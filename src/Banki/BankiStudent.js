import * as socket from '../socket.js';

export const BankiStudent = ({ student }) => {
  const el = document.createElement('section');
  el.id = `banki-${student}`;
  
  el.innerHTML = `
    <p>
      <img src="/img/${student}.jpg" class="student-ava" /> Banki student :) ${student}
    </p>
  `;

  el.addEventListener('click', () => handleStudentClick(student));

  function handleStudentClick(student) {
    zaprosBanki(student);
  }

  return el;
};

function zaprosBanki(student) {
  requestZaprosBanki();
}

socket.addHandler('zaprosBanki', handleZaprosBanki);

function handleZaprosBanki({ student, requester }) {
  console.log('requester: ', requester);
  showZaprosBankiVote({ student, requester });
}

function showZaprosBankiVote({ student, requester }) {
  document.body.append(ZaprosBankiVote({ student, requester }));
}

function ZaprosBankiVote({ student, requester }) {
  const el = document.createElement('section');
  el.id = 'zapros-banki-vote';

  el.innerHTML = `
    Zapros banki from ${requester} for ${student}
  `;

  return el;
}
