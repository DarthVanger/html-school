export const BankiStudent = ({ student }) => {
  const el = document.createElement('section');
  el.id = `banki-${student}`;
  
  el.innerHTML = `
    <p>Banki student :) ${student}</p>
  `;

  return el;
};
