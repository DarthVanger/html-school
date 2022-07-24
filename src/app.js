import { getStudent, setStudent } from './session.js';
import { Router } from './Router.js';

const id = 'App';

const getElement = () => {
  return document.querySelector(`#${id}`);
}

const element = document.createElement('div');
element.id = id;
const state = {
  student: getStudent(),
  route: location.hash,
};

const updateRouteInHash = (value) => {
  location.hash = value;
}

const setState = (newState) => {
  console.log('Set app state: ', newState);
  for (let prop in state) {
    if (newState[prop] !== undefined) {
      state[prop] = newState[prop];
      if (prop === 'route') {
        updateRouteInHash(state[prop]);
      }
    }
  }
  App();
};

const handleHashChange = () => {
  setState({ route: location.hash });
};

window.addEventListener('hashchange', handleHashChange);

export const App = () => {
  console.info('App state: ', state);

  state.handleLogin = (student) => {
    setStudent(student);
    setState({ student, route: '' });
  }

  if (!state.student) {
    state.route = '#login';
    updateRouteInHash(state.route);
  }

  state.handleRouteChange = (route) => {
    setState({ route });
  };

  element.innerHTML = '';
  element.append(Router(state));

  console.log('app returning: ', element);
  return element;
};
