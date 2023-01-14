export const Login = ({ handleLogin }) => {
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
        handleLogin(student);
        close();
      });
    });
  });

  return `
    <div id="login">
      <h1>Кто ты, Сущность?</h1>
      <img src="src/HomePage/img/tardigrade.jpeg" /> <form>
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
          <input type="radio" name="student" value="napaleon">
          <span>Napaleon</span>
        </label>

      </form>
    </div>
  `;
};
