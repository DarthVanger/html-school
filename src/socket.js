const url = `ws://localhost:8080`;
//const url = `ws://napaleon.space`;

const listeners = {};
export const addHandler = (c, f) => {
  listeners[c] = listeners[c] ? listeners[c] : [];
  listeners[c].push(f);
};

const socket = new WebSocket(url);
const pingInterval = 5000;

socket.onopen = (e) => {
  console.info('Websocket open:', e);
  setInterval(sendPing, pingInterval);
  sendPing();
  console.info('Send get_banki_state');
  sendJSON({
    name: 'get_banki_state',
  });
};

const sendJSON = j => socket.send(JSON.stringify(j));

const sendPing = () => {
  const student = localStorage.getItem('student');
  console.info(`Sending ping from ${student}`);

  sendJSON({
    name: 'ping',
    payload: {
      student,
    },
  });
};


socket.onmessage = (e) => {
  console.debug('socket message: ', e.data);
  const mes = JSON.parse(e.data);
  console.log('sock message', mes);
  const lis = listeners[mes.name];
  console.log('listeners', lis);
  lis?.forEach(f => f(mes.payload));
};

export const requestZaprosBanki = (payload) => {
  sendJSON({
    name: 'zaprosBanki',
    payload,
  });
};

export const requestSmoke = (payload) => {
  console.log('requestSmoke', payload);
  sendJSON({
    name: 'smoke',
    payload,
  });
};

export const sendVote = (payload) => {
  sendJSON({
    name: 'vote',
    payload,
  });
};

export const sendKatakombiLevelComplete = (payload) => {
  sendJSON({
    name: 'vote',
    payload,
  });
};
