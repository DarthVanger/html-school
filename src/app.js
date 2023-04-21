import { getStudent, setStudent } from './session.js';
import { Router } from './Router.js';
import { Navbar } from './Navbar/Navbar.js';

const getRouteFromHash = () => {
  if (location.hash.match(/^#[/]/)) {
    return location.hash.slice(1) || '/';
  }

  return '/';
}

const updateRouteInHash = (route) => {
  console.info('Router: updating route in hash:' , route);
  location.hash = '#' + route;
}

export const App = () => {
  const element = document.createElement('div');
  element.id = 'App';

  const state = {
    student: getStudent(),
    route: getRouteFromHash(),
  };

  const showPage = (route) => {
    window.scrollTo(0, 0);
    render(route);
  }

  if (!state.student) {
    state.route = '/login';
    showPage('/login');
  }

  state.handleLogin = (student) => {
    state.student = student;
    state.route = '/';
    showPage('/');
  }

  const handleHashChange = () => {
    state.route = getRouteFromHash();
    console.info('Router: handle URL hash change: ', state.route);
    if (/vangers/.test(state.route)) {
      console.info('Router: ignoring hash change for vangers page');
      return;
    }
    showPage(state.route);
  };

  window.addEventListener('hashchange', handleHashChange);

  function render () {
    element.innerHTML = '';
    element.append(Navbar(state));
    element.append(Router(state));
  }

  render();

  return element;
};
