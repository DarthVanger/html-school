import { db, loadDb } from './db/db.js';
import { getStats } from './db/stats.js';
import { applyMigrations } from './db/migrations/apply.js';
import { studentsApi } from './studentsApi.js';
import { homeworkApi } from './homeworkApi.js';
import { questApi } from './questApi.js';
import { catacombsApi } from './catacombsApi.js';
import { chatApi } from './chatApi.js';
import { experienceApi } from './experience/experienceApi.js';
import { socket, initSocket } from './socket/socket.js';

import fs from 'fs';
import http from 'http';
import https from 'https';
const certsDir = '/etc/letsencrypt/live/napaleon.space';

import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
const isHttp = process.env.http;
const port = process.env.port || 8080

let credentials;
if (!isHttp) {
  const privateKey  = fs.readFileSync(`${certsDir}/privkey.pem`, 'utf8');
  const certificate = fs.readFileSync(`${certsDir}/fullchain.pem`, 'utf8');
  credentials = {key: privateKey, cert: certificate};
}

app.use(express.static('./'))
app.use(express.json());

const runApp = async () => {
  await loadDb();
  await initSocket();
  if (!db.data) db.data = {};
  console.log('Db loaded');

  console.info('Applying migrations');
  applyMigrations();

  let server;

  if (!isHttp) {
    server = https.createServer(credentials, app);
    server.listen(443);

    const httpApp = express()
    const httpServer = http.createServer(httpApp);

    // https://stackoverflow.com/a/7458587/1657101
    // set up a route to redirect http to https
    httpApp.get('*', function(req, res) {  
      res.redirect('https://' + req.headers.host + req.url);
    });

    httpServer.listen(80);
  } else {
    server = http.createServer(app);
    server.listen(port);
  }

  // Enable WebSockets
  // https://masteringjs.io/tutorials/express/websockets
  server.on('upgrade', (request, ws, head) => {
    socket.handleUpgrade(request, ws, head, ws => {
      socket.emit('connection', ws, request);
    });
  });
};

app.get('/tree', (req, res) => {
  console.info('GET /tree');

  const { levels, points, categoryLevels, lecturePoints, questPoints } = getStats();
  res.json({ skills: db.data.skills, levels, points, categoryLevels, lecturePoints, questPoints, codeAcademy: db.data.codeAcademy, students: db.data.students });
})



studentsApi({app, db});
homeworkApi({app, db});
questApi({app, db});
catacombsApi({app, db});
chatApi({app, db});
experienceApi({app, db});


(async () => {
  await runApp();
})();
