import { getStudent, setStudent } from './session.js';
import { Login } from './Login.js';
import { HomePage } from './HomePage/HomePage.js';

const id = 'App';

const getElement = () => {
  return document.querySelector(`#${id}`);
}

const element = document.createElement('div');
element.id = id;
const state = {
  student: getStudent(),
};

const setState = (newState) => {
  state.student = newState.student;
  App();
};

export const App = () => {
  console.info('App state: ', state);

  const handleLogin = (student) => {
    setStudent(student);
    setState({ student });
  }

  const page = state.student ? HomePage(state) : Login({ handleLogin });

  element.innerHTML = page;

  console.log('app returning: ', element);
  return element;
};
