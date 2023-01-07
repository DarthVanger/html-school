import * as socket from '../socket.js';
import { BankiStudent } from './BankiStudent.js';

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

    const inactiveStudents = ['other-species', 'mazerTim'];
    students.unshift('napaleon');

    for (let student of students)  {
      if (inactiveStudents.includes(student)) continue;

      el.append(BankiStudent({ student, state }));
    }
  });


  socket.addHandler('zaprosBanki', handleZaprosBanki);
  socket.addHandler('vote', handleVote);

  function handleZaprosBanki({ student, requester }) {
    console.log('handleZaprosBanki');
    showZaprosBankiVote({ student, requester });
  }

  function handleVote({ votes, student, vote }) {
    console.log(`${student} voted ${vote ? 'yes' : 'no'}`);
  }

  function showZaprosBankiVote({ student, requester }) {
    document.body.append(ZaprosBankiVote({ student, requester }));
  }

  function ZaprosBankiVote({ state, student, requester }) {
    const el = document.createElement('section');
    el.id = 'zapros-banki-vote';

    const getYesBtn = () => document.querySelector('#yes-btn');
    const getNoBtn = () => document.querySelector('#no-btn');

    el.innerHTML = `
      <h1>Zapros banki for ${student} from ${requester}</h1>
      <article>
        <div id="yes-btn">Yes</div>
        <div id="no-btn">No</div>
      </article>
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

    return el;
  }

  return el;
};
