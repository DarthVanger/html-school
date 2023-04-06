import { getStudent, setStudent } from './session.js';
import { Router } from './Router.js';
import { Navbar } from './Navbar/Navbar.js';

const id = 'App';

const getElement = () => {
  return document.querySelector(`#${id}`);
}

const getRouteFromHash = () => {
  if (location.hash.match(/^#[/]/)) {
    return location.hash.slice(1) || '/';
  }

  return '/';
}

addEventListener('popstate', (event) => {
  //console.log('popstate: ', event);
});

const updateRouteInHash = (route) => {
  console.log('Update route in hash:' , route);
  location.hash = '#' + route;
  //history.pushState({ route }, '', location.hash);
}


const element = document.createElement('div');
element.id = id;
const state = {
  student: getStudent(),
  route: getRouteFromHash(),
};

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
  console.log('hash change: ', getRouteFromHash());
  setState({ route: getRouteFromHash() });
};

window.addEventListener('hashchange', handleHashChange);

export const App = () => {
  //console.info('App state: ', state);

  state.handleLogin = (student) => {
    setStudent(student);
    setState({ student, route: '/' });
  }

  if (!state.student) {
    state.route = '/login';
    updateRouteInHash(state.route);
  }

  state.handleRouteChange = (route) => {
    setState({ route });
  };

  element.innerHTML = '';
  console.log('append navbar ', Navbar(state));
  element.append(Navbar(state));
  element.append(Router(state));

  //console.log('app returning: ', element);
  return element;
};
