const url = `ws://localhost:8080`;

const listeners = {};
export const addHandler = (c, f) => {
  listeners[c] = listeners[c] ? listeners[c] : [];
  listeners[c].push(f);
  console.log('lis updated, lis: ', listeners);
};

const socket = new WebSocket(url);

socket.onopen = (e) => {
  console.log('sock open', e);
};

socket.onmessage = (e) => {
  console.log('sock e.data', e.data);
  const mes = JSON.parse(e.data);
  console.log('sock message', mes);
  const lis = listeners[mes.name];
  console.log('listeners', lis);
  lis?.forEach(f => f(mes.payload));
};
