export const Login = ({ handleLogin }) => {
  const element = document.createElement('div');
  element.id = 'login';

  const close = () => {
    element.remove();
  };

  const form = document.createElement('form');
  form.innerHTML = `
    <label>
      <input type="radio" name="student" value="other-species">
      <span>Иной вид Существа</span>
    </label>

    <label>
      <input type="radio" name="student" value="johnny"/>
      <span>Johnny</span>
    </label>

    <label>
      <input type="radio" name="student" value="tony">
      <span>Tony</span>
    </label>

    <label>
      <input type="radio" name="student" value="dimon">
      <span>Morphem</span>
    </label>

    <label>
      <input type="radio" name="student" value="mister-smith">
      <span>Mister Smith</span>
    </label>

    <label>
      <input type="radio" name="student" value="valik_h">
      <span>valik_h</span>
    </label>

    <label>
      <input type="radio" name="student" value="russi4">
      <span>russi4</span>
    </label>

    <label>
      <input type="radio" name="student" value="mazerTim">
      <span>marezTim</span>
    </label>

    <label>
      <input type="radio" name="student" value="alex">
      <span>alex</span>
    </label>

    <label>
      <input type="radio" name="student" value="yrtz">
      <span>yrtz</span>
    </label>

    <label>
      <input type="radio" name="student" value="napaleon">
      <span>Napaleon</span>
    </label>
  `;

  const radios = form.querySelectorAll('input[name="student"]');
  radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const student = radio.value;
      handleLogin(student);
      close();
    });
  });

  element.innerHTML = `
    <h1>Кто ты, Сущность?</h1>
    <img src="src/HomePage/img/tardigrade.jpeg" />
  `;

  element.append(form);

  return element;
};
