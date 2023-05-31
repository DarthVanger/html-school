import { getStudents } from '../api.js';

export const Login = ({ handleLogin }) => {
  const element = document.createElement('div');
  element.id = 'login';

  getStudents().then(handleStudentsFetch);

  const close = () => {
    element.remove();
  };

  const form = document.createElement('form');

  element.innerHTML = `Loading students...`;

  function handleStudentsFetch(students) {
    console.log('students: ', students);

    element.innerHTML = `
      <h1>Кто ты, Сущность?</h1>
      <img src="src/HomePage/img/tardigrade.jpeg" />
    `;

    students.forEach(student => {
      form.innerHTML += `
        <label>
          <input type="radio" name="student" value="${student}">
          <span>${student}</span>
        </label>
      `;
    });

    element.append(form);

    const radios = form.querySelectorAll('input[name="student"]');
    radios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const student = radio.value;
        handleLogin(student);
        close();
      });
    });
  }

  return element;
};
