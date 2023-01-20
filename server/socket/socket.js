import { db } from '../db/db.js';
import { bankiSocketHandler } from './banki.js';

import { WebSocketServer } from 'ws';

export const socket = new WebSocketServer({ noServer: true });

let aliveClients = {};

export function wsSendAll(mes) {
  for (let student in aliveClients) {
    aliveClients[student].send(JSON.stringify(mes));
  }
}

export const initSocket = async () => {
  const studentsOnline = {};
  for (let student of db.data.students) {
    studentsOnline[student] = false;
  }

  const pingSocketHandler = (msg, ws) => {
    console.log('pingSocketHandler, msg: ', msg);
    if (msg.name == 'ping') {
      const { student } = msg.payload;
      console.log(`PING from student ${student}`);
      studentsOnline[student] = true;
      aliveClients[student] = ws;
      console.log('studentsOnline: ', studentsOnline);
      console.log('aliveClients: ', Object.keys(aliveClients));
      wsSendAll({
        name: 'online_students',
        payload: studentsOnline,
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
const pingInterval = 5000;
const interval = setInterval(() => {
  socket.clients.forEach(function each(ws) {
    const aliveClientsArray = Object.values(aliveClients);
    const isAlive = aliveClientsArray.includes(ws);
    if (isAlive === false) return ws.terminate();
  });
}, 5000);

socket.on('close', function close() {
  clearInterval(interval);
});
