//const url = `ws://localhost:8080`;
const url = `ws://napaleon.space`;

const listeners = {};
export const addHandler = (c, f) => {
  listeners[c] = listeners[c] ? listeners[c] : [];
  listeners[c].push(f);
};

const socket = new WebSocket(url);

socket.onopen = (e) => {
  console.log('sock open', e);
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
  socket.send(JSON.stringify({
    name: 'zaprosBanki',
    payload,
  }));
};

export const requestSmoke = (payload) => {
  console.log('requestSmoke', payload);
  socket.send(JSON.stringify({
    name: 'smoke',
    payload,
  }));
};

export const sendVote = (payload) => {
  socket.send(JSON.stringify({
    name: 'vote',
    payload,
  }));
};
