import * as socket from '../socket.js';

export const BankiStudent = ({ student, state }) => {
  const userStudent = state.student;
  const el = document.createElement('section');
  const id = `banki-${student}`;
  el.id = id;

  const getYesBtn = () => document.querySelector('#yes-btn');
  const getNoBtn = () => document.querySelector('#no-btn');
  
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

  function initiateZaprosBanki(zapros) {
    socket.requestZaprosBanki(zapros);
  }

  socket.addHandler('zaprosBanki', handleZaprosBanki);
  socket.addHandler('vote', handleVote);

  function handleZaprosBanki({ student, requester }) {
    console.log('handleZaprosBanki');
    showZaprosBankiVote({ student, requester });
  }

  function handleVote({ votes, student, vote }) {
    console.log(`${student} voted ${vote ? 'yes' : 'no'}`);
    showZaprosBankiVote({ student, requester });
  }


  function showZaprosBankiVote({ student, requester }) {
    document.body.append(ZaprosBankiVote({ student, requester }));
  }

  function ZaprosBankiVote({ state, student, requester }) {
    const el = document.createElement('section');
    el.id = 'zapros-banki-vote';

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
