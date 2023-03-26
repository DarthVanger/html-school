import * as socket from '../../socket.js';
import { BankiStudent } from './BankiStudent.js';

const getPlusBankaImg = () => {
  const randIdx = Math.round(Math.random() * 8 + 1);

  return `/img/banki/plus-banka/${randIdx}.gif`;
};

export const Banki = (state) => {
  const el = document.createElement('section');
  el.id = 'banki';

  const userStudent = state.student;

  setTimeout(async () => {
    el.innerHTML = `
      <h2>Banki</h2>
      <p>Loading...</p>
    `;

    const students = await fetch('/students').then(r => r.json());

    el.innerHTML = ``;

    for (let student of students)  {
      el.append(BankiStudent({ student, state }));
    }
  });


  socket.addHandler('zaprosBanki', handleZaprosBanki);
  socket.addHandler('banki', handleBanki);

  function handleBanki(banki) {
    state.banki = banki;
  }

  function handleZaprosBanki({ student, requester }) {
    console.log('handleZaprosBanki');
    showZaprosBankiVote({ student, requester });
  }

  function showZaprosBankiVote({ student, requester }) {
    document.body.append(ZaprosBankiVote({ student, requester }));
  }

  function ZaprosBankiVote({ state, student, requester }) {
    const el = document.createElement('section');
    el.id = 'zapros-banki-vote';

    const getVotesEl = () => document.querySelector('#votes');
    const getYesBtn = () => document.querySelector('#yes-btn');
    const getNoBtn = () => document.querySelector('#no-btn');
    const getArticle = () => el.querySelector('article');

    el.innerHTML = `
      <h1>${requester.toUpperCase()}</i> запрашивает банку для ${student.toUpperCase()}</h1>
      <article class="yes-no-btns">
        <div id="yes-btn">Yes</div>
        <div id="no-btn">No</div>
      </article>
      <div id="votes"></div>
    `;

    setTimeout(() => {
      console.log('add even lis for ', getYesBtn());
      getYesBtn().addEventListener('click', handleYesClick);
      getNoBtn().addEventListener('click', handleNoClick);
    });

    function handleYesClick() {
      console.log('handle yes click');
      socket.sendVote({ student: userStudent, vote: true }); 
    }

    function handleNoClick() {
      socket.sendVote({ student: userStudent, vote: false }); 
    }

    socket.addHandler('vote', handleVote);
    socket.addHandler('voteEnd', handleVoteEnd);

    function handleVote({ votes, student, vote }) {
      getVotesEl().innerHTML = ``;
      let idx = 0;
      for (let stud in votes) {
        getVotesEl().innerHTML += `
          ${stud}: ${vote ? 'yes' : 'no'}
        `;

        if (idx < Object.keys(votes).length - 1) {
          getVotesEl().innerHTML += ', '
        } else {
          getVotesEl().innerHTML += '.'
        }

        idx++;
      }
      console.log(`${student} voted ${vote ? 'yes' : 'no'}`);
    }

    function handleVoteEnd({ votes, passed }) {
      if (passed) {
        getArticle().classList.remove('yes-no-btns');
        getArticle().innerHTML = `
          <h3>Банка Засчитана!!!</h3>
          <img src=${getPlusBankaImg()} />
        `;
      } else {
        getArticle().innerHTML = `
          <h3>Банка Отклонена ((</h3>
        `;
      }

      setTimeout(() => {
        el.remove();
      }, 3000);
    }

    return el;
  }

  return el;
};
