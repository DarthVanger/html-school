import { BottomBar } from './BottomBar.js';
import { getStudent, setStudent } from './session.js';
import { Login } from './Login.js';

const run = () => {
  const student = getStudent();
  console.info('student from session: ', student);

  if (!student) {
    showLogin();
  } else {
    showBottomBar({ student });
  }

};

const handleLogin = (student) => {
  setStudent(student);
  showBottomBar({ student });
}

const showLogin = () => {
  document.body.innerHTML += Login({ handleLogin });
}

const showBottomBar = ({ student }) => {
  document.body.innerHTML += BottomBar({ student });
}

run();
