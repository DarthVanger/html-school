export const Certificate = ({ student }) => {

  return `
    <h2>ДАНЫЙ ПАСАЖИР ОКОНЧИЛ ПОЛКУРСА ПО HTML</h2>
    <p>ШАРИТ ТО-СË, ПЯТОЕ, ДЕСЯТОЕ</p>
    <div id="avatar">
      <h3>${student.name}</h3>
      <img src="${student.avatar}" />
    </div>
    <div id="otve4au">
      <h2>ОТВЕЧАЮ</h2>
      <img src="/napaleon.jpg" />
    </div>
  `;
};

