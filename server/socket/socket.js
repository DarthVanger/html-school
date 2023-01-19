import { db } from '../db/db.js';

import { WebSocketServer } from 'ws';
let wsClients = [];

const clients = [];
export const socket = new WebSocketServer({ noServer: true });

export function wsSendAll(mes) {
  wsClients.forEach(ws => ws.send(mes));
}


let voteState;
let smokeState;
socket.on('connection', ws => {
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
  ws.on('message', handleWebsocketMessage);

  function handleWebsocketMessage(d) {
    console.debug('socket received message: %s', data);
    const data = JSON.parse(d);
    bankiSocketHandler(d);
  }

});
