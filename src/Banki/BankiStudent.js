import * as socket from '../socket.js';

export const BankiStudent = ({ student, state }) => {
  const userStudent = state.student;
  const el = document.createElement('section');
  const id = `banki-${student}`;
  el.id = id;
  el.className = 'banki-student';
  
  el.innerHTML = `
    <figure class="student-ava">
      <img src="/img/${student}.jpg" />
    </figure>
    <div class="banki">
      Banki
    </div>

  `;

  el.addEventListener('click', () => handleStudentClick(student));

  function handleStudentClick(student) {
    console.log('handleStudentClick');
    initiateZaprosBanki({ student, requester: userStudent });
  }

  function initiateZaprosBanki(zapros) {
    socket.requestZaprosBanki(zapros);
  }

  return el;
};
