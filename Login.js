import { setStudent } from './session.js';

export const Login = () => {
  const getElement = () => document.querySelector('#login');

  const close = () => {
    getElement().remove();
  };

  setTimeout(() => {
    const form = document.querySelector('#login > form');
    const radios = document.querySelectorAll('input[name="student"]');
    radios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const student = radio.value;
        setStudent(student);
        close();
      });
    });
  });

  return `
    <div id="login">
      <h1>Кто ты, Сущность?</h1>
      <img src="MainPage/img/tardigrade.jpeg" />
      <form>
        <label>
          <input type="radio" name="student" value="johhny"/>
          <span>Johnny</span>
        </label>

        <label>
          <input type="radio" name="student" value="tony">
          <span>Tony</span>
        </label>

        <label>
          <input type="radio" name="student" value="morphem">
          <span>Morphem</span>
        </label>

        <label>
          <input type="radio" name="student" value="other-species">
          <span>Иной вид Существа</span>
        </label>
      </form>
    </div>
  `;
};
