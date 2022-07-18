export const Login = () => {
  return `
    <div id="login">
      <h1>Кто ты, Сущность?</h1>
      <img src="MainPage/img/tardigrade.jpeg" />
      <form>
        <label>
          <input type="radio" name="student" />
          <span>Johnny</span>
        </label>

        <label>
          <input type="radio" name="student">
          <span>Tony</span>
        </label>

        <label>
          <input type="radio" name="student">
          <span>Morphem</span>
        </label>

        <label>
          <input type="radio" name="student">
          <span>Иной вид Существа</span>
        </label>
      </form>
    </div>
  `;
};
