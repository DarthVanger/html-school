export const BankiStudent = ({ student }) => {
  const el = document.createElement('section');
  el.id = `banki-${student}`;
  
  el.innerHTML = `
    <p>
      <img src="/img/${student}.jpg" class="student-ava" />
      Banki student :) ${student}
    </p>
  `;

  return el;
};
