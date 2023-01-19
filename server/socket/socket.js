import { db } from '../db/db.js';
import { bankiSocketHandler } from './banki.js';

import { WebSocketServer } from 'ws';

export const socket = new WebSocketServer({ noServer: true });

export function wsSendAll(mes) {
  wsClients.forEach(ws => ws.send(mes));
}

export const initSocket = async () => {
  let wsClients = {};

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
      wsClients[student] = ws;
      console.log('studentsOnline: ', studentsOnline);
      console.log('wsClients: ', Object.keys(wsClients));
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
