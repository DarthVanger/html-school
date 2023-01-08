import * as socket from '../socket.js';
import { WeedSvg } from '../WeedSvg.js';

export const BankiStudent = ({ student, state }) => {
  const userStudent = state.student;
  const el = document.createElement('section');
  const getBankiEl = () => el.querySelector('.banki');
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

  const handleBanki = (banki) => {
    const studentBanki = banki[student] || {};

    let weedsEarnedHtml = ``;
    for (let i = 0; i < studentBanki.earned; i++) {
      weedsEarnedHtml += WeedSvg({});
    }

    let weedsSmokedHtml = ``;
    for (let i = 0; i < studentBanki.smoked; i++) {
      weedsSmokedHtml += WeedSvg({ className: 'smoked' });
    }

    getBankiEl().innerHTML = `
      <div>Earned: ${studentBanki.earned} ${weedsEarnedHtml}</div>
      <div>Smoked: ${studentBanki.smoked} ${weedsSmokedHtml}</div>
    `;
  };

  socket.addHandler('banki', handleBanki);

  if (state.banki) {
    handleBanki(state.banki);
  }

  function handleStudentClick(student) {
    console.log('handleStudentClick');
    initiateZaprosBanki({ student, requester: userStudent });
  }

  function initiateZaprosBanki(zapros) {
    socket.requestZaprosBanki(zapros);
  }

  return el;
};
