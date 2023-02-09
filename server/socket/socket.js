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
  let studentsOnline = {}
  for (let student of db.data.students) {
    if (!studentsOnline[student]) {
      studentsOnline[student] = new Date(0);
      db.data.onlineLog[student] = [];
    }
  }

  const pingSocketHandler = (msg, ws) => {
    if (msg.name == 'ping') {
      const { student } = msg.payload;
      console.log(`PING from student ${student}`);
      const lastOnlineDate = studentsOnline[student] ;
      const now = new Date();
      const timePast = now.getTime() - lastOnlineDate.getTime();
      const isOnline = timePast <= pingInterval * 2;

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
      
      studentsOnline[student] = now;
      aliveClients[student] = ws;


      const payload = studentsOnline;
      //for (let stud of db.data.students) {
      //  payload[stud] = stud in studentsOnline;
      //};

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
    const isAlive = aliveClientsArray.includes(ws);
    if (isAlive === false) return ws.terminate();
  });
}, pingInterval);

socket.on('close', function close() {
  clearInterval(interval);
});
