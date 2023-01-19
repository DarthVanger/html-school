import { db, loadDb } from './db/db.js';
import { getStats } from './db/stats.js';
import { applyMigrations } from './db/migrations/apply.js';
import { studentsApi } from './studentsApi.js';
import { homeworkApi } from './homeworkApi.js';
import { questApi } from './questApi.js';
import https from 'https';
import fs from 'fs';
import { WebSocketServer } from 'ws';

import express from 'express'
const app = express()
const port = process.env.port || 8080

app.use(express.static('./'))
app.use(express.json());

let wsClients = [];

const runApp = async () => {
  await loadDb();
  if (!db.data) db.data = {};
  console.log('Db loaded');

  console.info('Applying migrations');
  applyMigrations();

  const server = app.listen(port, () => {
    console.log(`HTTP Listening on port ${port}`)
  });

  const clients = [];
  const wss = new WebSocketServer({ noServer: true });

  //wss.on('request', function(request) {
  //  const connection = request.accept('any-protocol', request.origin);
  //  clients.push(connection);

  //  connection.on('message', function(message) {
  //    //broadcast the message to all the clients
  //    clients.forEach(function(client) {
  //      client.send(message.utf8Data);
  //    });
  //  });
  //});
  //
  function wsSendAll(mes) {
    wsClients.forEach(ws => ws.send(mes));
  }

  let voteState;
  let smokeState;
  wss.on('connection', ws => {
    if (voteState?.zaprosBanki) {
      ws.send(JSON.stringify(voteState.zaprosBanki));
    }

    if (smokeState) {
      ws.send(JSON.stringify(smokeState));
    }

    if (voteState?.lastVoteMsg) {
      ws.send(JSON.stringify(voteState.lastVoteMsg));
    }

    if (!db.data.banki) {
      db.data.banki = {};
      for (let student of db.data.students) {
        db.data.banki[student] = {
          earned: 0,
          smoked: 0,
        }
      }
    }

    console.log('WS: send banki');
    ws.send(JSON.stringify({
      name: 'banki',
      payload: db.data.banki,
    }));

    const giveBanka = (student) => {
      console.log('giveBanka to student ', student);
      db.data.banki[student].earned++;
      db.write();
      console.log('db.data.banki ', db.data.banki);
      wsSendAll(JSON.stringify({
        name: 'banki',
        payload: db.data.banki,
      }));
    };

    wsClients.push(ws);
    console.log('wsClients: ', wsClients.length);
    ws.on('message', function message(d) {
      const data = JSON.parse(d);
      console.log('received: %s', data);
      if (data.name == 'zaprosBanki') {
        const { payload } = data;
        const { student, requester } = payload;

        voteState = {
          student,
          requester,
          votes: {},
        };

        const mes = {
          name: 'zaprosBanki',
          payload,
        };

        voteState.zaprosBanki = mes;
        wsSendAll(JSON.stringify(mes));
      }

      if (data.name == 'vote') {
        console.log('Received "vote" event', data);
        const { student, vote } = data.payload;
	if (voteState?.votes) {
     	voteState.votes[student] = vote;
	}

        function isVoteResultYes() {
          return Object.values(voteState.votes).filter(v => v).length >= 3;
        }

        function isVoteResultNo() {
          return Object.values(voteState.votes).filter(v => !v).length >= 3;
        }

        function voteEnd({ passed }) {
          console.log('vote end. Passed: ', passed);
          const mes = {
            name: 'voteEnd',
            payload: { votes: voteState.votes, passed },
          };
          wsSendAll(JSON.stringify(mes));

          if (passed) {
            giveBanka(voteState.student);
          }
          voteState = null;
        }

        const mes = {
          name: 'vote',
          payload: { votes: voteState.votes, student, vote },
        };

        voteState.lastVoteMsg = mes;

        wsSendAll(JSON.stringify(mes));

        if (isVoteResultYes(voteState.votes)) {
          voteEnd({ passed: true });
          return;
        }

        if (isVoteResultNo(voteState.votes)) {
          voteEnd({ passed: false });
          return;
        }
      }

      if (data.name == 'smoke') {
        console.log('WS: smoke');
        const { payload } = data;

        const { student, requester } = payload;

        smokeState = {
          student,
          requester,
        };

        const mes = {
          name: 'smoke',
          payload: smokeState,
        };

        wsSendAll(JSON.stringify(mes));
      }

    });

  });

  // Enable WebSockets
  // https://masteringjs.io/tutorials/express/websockets
  server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, socket => {
      wss.emit('connection', socket, request);
    });
  });
};

app.get('/tree', (req, res) => {
  console.info('GET /tree');

  const { levels, points, categoryLevels, lecturePoints, questPoints } = getStats();
  res.json({ skills: db.data.skills, levels, points, categoryLevels, lecturePoints, questPoints, codeAcademy: db.data.codeAcademy, students: db.data.students });
})


app.get('/catacombs', async (req, res) => {
  console.info(`GET catacombs`);
  res.json(db.data.catacombs);
});

app.post('/catacombs', async (req, res) => {
  console.info(`POST catacombs:`, req.body);

  const { student, levelId, code } = req.body;

  db.data.catacombs = db.data.catacombs || {};
  db.data.catacombs[student] = db.data.catacombs[student] || {};
  const studCata = db.data.catacombs[student];
  const now = new Date();
  const entry = {
    date: now.toISOString(),
    code,
  };
  studCata[levelId] = entry;

  await db.write();
  console.info('DB write Success', entry);
  res.json(entry);
});

studentsApi({app, db});
homeworkApi({app, db});
questApi({app, db});

(async () => {
  await runApp();
})();
