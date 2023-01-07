const url = `ws://localhost:8080`;

const listeners = {};
export const addHandler = (c, f) => {
  listeners[c] = f;
};

const socket = new WebSocket(url);

socket.onopen = (e) => {
  console.log('sock open', e);
};

socket.onmessage = (e) => {
  console.log('sock message', e.data);
};
