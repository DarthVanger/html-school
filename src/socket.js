//const url = `ws://localhost:8080`;
const url = `ws://napaleon.space`;

const listeners = {};
export const addHandler = (c, f) => {
  listeners[c] = listeners[c] ? listeners[c] : [];
  listeners[c].push(f);
};

const socket = new WebSocket(url);
const pingInterval = 5000;

socket.onopen = (e) => {
  console.info('Websocket opened');
  setInterval(sendPing, pingInterval);
  sendPing();
  sendJSON({
    name: 'get_banki_state',
  });
};

socket.onclose = (e) => {
  console.info('Websocket closed:', e);
};

socket.onerror = (e) => {
  console.error('Websocket error:', e);
};

const sendJSON = j => socket.send(JSON.stringify(j));

const sendPing = () => {
  const student = localStorage.getItem('student');
  if (!student) {
    console.log('Not sending ping until student logs in');
    return;
  }

  console.debug(`Sending ping from ${student}`);

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
  const lis = listeners[mes.name];
  lis?.forEach(f => f(mes.payload));
};

export const requestZaprosBanki = (payload) => {
  sendJSON({
    name: 'zaprosBanki',
    payload,
  });
};

export const requestSmoke = (payload) => {
  console.info('requestSmoke', payload);
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
