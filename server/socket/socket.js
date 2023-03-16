import { db } from '../db/db.js';
import { bankiSocketHandler } from './banki.js';
import { chatSocketHandler } from './chat.js';
import { pingSocketHandler } from './ping.js';

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

  socket.on('connection', ws => {
    ws.on('message', msg => handleWebsocketMessage(msg, ws));

    function handleWebsocketMessage(d, ws) {
      //console.debug('socket received message: %s', d);
      const data = JSON.parse(d);
      pingSocketHandler({ data, ws, aliveClients, pingInterval, wsSendAll });
      chatSocketHandler({ data, wsSendAll });
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
