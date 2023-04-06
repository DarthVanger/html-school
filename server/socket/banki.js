let voteState;
let smokeState;
import { db } from '../db/db.js';
export const bankiSocketHandler = ({
  data,
  socket,
  wsSendAll,
}) => {
  const { payload } = data;
  
  const handleZaprosBanki = (payload) => {
    const { student, requester } = payload;
    voteState = {
      student,
      requester,
      votes: {},
    };

    const mes = {
      name: 'zaprosBanki',
      payload,
    };

    voteState.zaprosBanki = mes;
    wsSendAll(mes);
  }

  if (data.name == 'zaprosBanki') {
    handleZaprosBanki(payload);

  }

  if (data.name == 'vote') {
      console.log('Received "vote" event', data);
      const { student, vote } = data.payload;
if (voteState?.votes) {
    voteState.votes[student] = vote;
}

      function isVoteResultYes() {
        return Object.values(voteState.votes).filter(v => v).length >= 3;
      }

      function isVoteResultNo() {
        return Object.values(voteState.votes).filter(v => !v).length >= 3;
      }

      function voteEnd({ passed }) {
        console.log('vote end. Passed: ', passed);
        const mes = {
          name: 'voteEnd',
          payload: { votes: voteState.votes, passed },
        };
        wsSendAll(mes);

        if (passed) {
          giveBanka(voteState.student);
        }
        voteState = null;
      }

      const mes = {
        name: 'vote',
        payload: { votes: voteState.votes, student, vote },
      };

      voteState.lastVoteMsg = mes;

      wsSendAll(mes);

      if (isVoteResultYes(voteState.votes)) {
        voteEnd({ passed: true });
        return;
      }

      if (isVoteResultNo(voteState.votes)) {
        voteEnd({ passed: false });
        return;
      }
    }

    if (data.name == 'smoke') {
      console.log('WS: smoke');
      const { payload } = data;

      const { student, requester } = payload;

      smokeState = {
        student,
        requester,
      };

      const mes = {
        name: 'smoke',
        payload: smokeState,
      };

      wsSendAll(mes);
    }

    console.log('data: ', data);

    if (data.name == 'get_banki_state') {
      console.log('Received get_banki_state');
      if (voteState?.zaprosBanki) {
        socket.send(JSON.stringify(voteState.zaprosBanki));
      }
      if (smokeState) {
        socket.send(JSON.stringify(smokeState));
      }

      if (voteState?.lastVoteMsg) {
        socket.send(JSON.stringify(voteState.lastVoteMsg));
      }

      if (!db.data.banki) {
        db.data.banki = {};
        for (let student of db.data.students) {
          db.data.banki[student] = {
            earned: 0,
            smoked: 0,
          }
        }
      }

      console.log('WS: send banki');
      socket.send(JSON.stringify({
        name: 'banki',
        payload: db.data.banki,
      }));

      const giveBanka = (student) => {
        console.log('giveBanka to student ', student);
        db.data.banki[student].earned++;
        db.write();
        console.log('db.data.banki ', db.data.banki);
        wsSendAll({
          name: 'banki',
          payload: db.data.banki,
        });
      };
    }
};
