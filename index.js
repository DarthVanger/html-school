import { getStudent, setStudent } from './session.js';
import { Login } from './Login.js';

const run = () => {
  const student = getStudent();
  console.info('student from session: ', student);

  if (!student) {
    showLogin();
  }
};

const showLogin = () => {
  document.body.innerHTML += Login();
}

run();
