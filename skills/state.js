export const state = {
  student: null,
  skills: null,
};

const subscribers = [];

let diff = {};

export const setState = (props) => {
  diff = {};
  let isSame = true;
  for (let prop in props) {
    const isPropSame = state[prop] !== props[prop];
    if (isPropSame) {
      isSame = false
      diff[prop] = `${state[prop]} -> ${props[prop]}`;
    };
    state[prop] = props[prop];
  }

  !isSame && notify();
};

export const subscribe = listener => {
  subscribers.push(listener);
};

const notify = () => {
  console.log('state change: ', diff);
  subscribers.map(s => s());
}

