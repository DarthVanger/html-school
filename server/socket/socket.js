import { db } from '../db/db.js';
import { bankiSocketHandler } from './banki.js';

import { WebSocketServer } from 'ws';

export const socket = new WebSocketServer({ noServer: true });

const pingInterval = 5000;
let aliveClients = {};

export function wsSendAll(mes) {
  for (let student in aliveClients) {
    aliveClients[student].send(JSON.stringify(mes));
  }
}

export const initSocket = async () => {
  if (!db.data.onlineLog) {
    db.data.onlineLog = {};
  }
  if (!db.data.studentsOnline) {
    db.data.studentsOnline = {};
  }
  for (let student of db.data.students) {
    if (!db.data.studentsOnline[student]) {
      db.data.studentsOnline[student] = new Date(0);
      db.data.onlineLog[student] = [];
    }
  }

  console.log('initSocket. studentsOnline: ', db.data.studentsOnline);

  const pingSocketHandler = (msg, ws) => {
    if (msg.name == 'ping') {
      const { student } = msg.payload;
      console.log(`PING from student ${student}`);
      const lastOnlineDate = new Date(db.data.studentsOnline[student]);
      const now = new Date();
      const timePast = now.getTime() - lastOnlineDate.getTime();
      const isOnline = timePast <= pingInterval * 2;

      if (student) {
        const studOnlineLog = db.data.onlineLog[student];

        if (!isOnline) {
          studOnlineLog.push({
            date: now,
            durationMinutes: 0,
          });
        } else {
          studOnlineLog[studOnlineLog.length - 1].durationMinutes += pingInterval / 1000 / 60;
        }

        db.write();
      }
      
      db.data.studentsOnline[student] = now;
      aliveClients[student] = ws;
      ws.isAlive = true;

      const payload = db.data.studentsOnline;

      wsSendAll({
        name: 'online_students',
        payload,
      });
    }
  };

  socket.on('connection', ws => {
    ws.on('message', msg => handleWebsocketMessage(msg, ws));

    function handleWebsocketMessage(d, ws) {
      console.debug('socket received message: %s', d);
      const data = JSON.parse(d);
      pingSocketHandler(data, ws);
      bankiSocketHandler({
        data,
        socket: ws,
        wsSendAll
      });
    }
  });
}

// https://github.com/websockets/ws#how-to-detect-and-close-broken-connections
const interval = setInterval(() => {
  socket.clients.forEach(function each(ws) {
    const aliveClientsArray = Object.values(aliveClients);
    if (ws.isAlive === false) return ws.terminate();

    ws.isAlive = false;
  });
}, pingInterval + 1000);

socket.on('close', function close() {
  clearInterval(interval);
});
