import { db } from '../db/db.js';
import { bankiSocketHandler } from './banki.js';

import { WebSocketServer } from 'ws';

export const socket = new WebSocketServer({ noServer: true });

export function wsSendAll(mes) {
  wsClients.forEach(ws => ws.send(mes));
}

export const initSocket = async () => {
  let wsClients = [];

  const clients = [];
  const studentsOnline = db.data.students.map(s => ({
    s: false,
  }));

  const pingSocketHandler = (msg) => {
    if (msg.name == 'ping') {
      const { student } = msg.payload;
      console.log(`PING from student ${student}`);
      studentsOnline[student] = true;
    }
  };

  socket.on('connection', ws => {
    wsClients.push(ws);

    console.log('wsClients: ', wsClients.length);

    ws.on('message', handleWebsocketMessage);

    function handleWebsocketMessage(d) {
      console.debug('socket received message: %s', d);
      const data = JSON.parse(d);
      pingSocketHandler(d);
      bankiSocketHandler({
        data,
        socket: ws,
        wsSendAll
      });
    }
  });
}
