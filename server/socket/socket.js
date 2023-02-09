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
  let studentsOnline = {}
  for (let student of db.data.students) {
    if (!studentsOnline[student]) {
      studentsOnline[student] = new Date(0);
    }
  }

  const pingSocketHandler = (msg, ws) => {
    console.log('pingSocketHandler, msg: ', msg);
    if (msg.name == 'ping') {
      const { student } = msg.payload;
      console.log(`PING from student ${student}`);
      const now = new Date();
      studentsOnline[student] = now;
      aliveClients[student] = ws;

      for (let s in studentsOnline) {
        const lastOnlineDate = studentsOnline[s];
        const timePast = now.getTime() - lastOnlineDate.getTime();
        if (timePast > pingInterval) {
          console.log(`Student ${s} went Offline`);
          //delete studentsOnline[s];
          //delete aliveClients[s];
        }
      }

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
