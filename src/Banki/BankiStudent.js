import * as socket from '../socket.js';

export const BankiStudent = ({ student, state }) => {
  console.log('BankiStudent state ', state);
  const userStudent = state.student;
  const el = document.createElement('section');
  const id = `banki-${student}`;
  el.id = id;
  
  el.innerHTML = `
    <p>
      <img src="/img/${student}.jpg" class="student-ava" /> Banki student :) ${student}
    </p>
  `;

  el.addEventListener('click', () => handleStudentClick(student));

  function handleStudentClick(student) {
    console.log('handleStudentClick');
    initiateZaprosBanki({ student, requester: userStudent });
  }

  return el;
};

function initiateZaprosBanki(zapros) {
  socket.requestZaprosBanki(zapros);
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
