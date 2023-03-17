//const url = `ws://localhost:8080`;
const url = `wss://napaleon.space`;

const listeners = {};
export const addHandler = (c, f) => {
  listeners[c] = listeners[c] ? listeners[c] : [];
  listeners[c].push(f);
};

const socket = new WebSocket(url);
const pingInterval = 5000;


export const sendJSON = j => socket.send(JSON.stringify(j));

let onlineStudents;

let isTabActive = true;

export const getOnlineStudents = () => {
  return onlineStudents;
};

socket.onopen = (e) => {
  console.info('Websocket opened');
  setInterval(sendPing, pingInterval);
  sendPing();
  sendJSON({
    name: 'get_banki_state',
  });
  sendJSON({
    name: 'get_banki_state',
  });
  sendJSON({
    name: 'chat_get_messages',
  });
};

socket.onclose = (e) => {
  console.info('Websocket closed:', e);
};

socket.onerror = (e) => {
  console.error('Websocket error:', e);
};

const sendPing = () => {
  const student = localStorage.getItem('student');

  //console.debug(`Sending ping from student ${student}`);

  sendJSON({
    name: 'ping',
    payload: {
      student,
      isTabActive: isTabActive,
    },
  });
};

const handleOnlineStudents = (payload) => {
  onlineStudents = payload;
}

addHandler('online_students', handleOnlineStudents);


socket.onmessage = (e) => {
  //console.debug('socket message: ', e.data);
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

document.addEventListener('visibilitychange', () => {
  setActivityTimeout();
  isTabActive = document.visibilityState !== 'hidden';
});

const activityTimeout = 15000 * 60;
let activityTimeoutId;

const setActivityTimeout = () => {
  activityTimeoutId = setTimeout(() => {
    isTabActive = false;
  }, activityTimeout);
};

setActivityTimeout();

document.addEventListener('mousemove', () => {
  isTabActive = true;
  clearTimeout(activityTimeoutId);
  setActivityTimeout();
});

document.addEventListener('keydown', () => {
  isTabActive = true;
  clearTimeout(activityTimeoutId);
  setActivityTimeout();
});
