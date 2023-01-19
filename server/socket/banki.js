import { socket, wsSendAll } from './socket.js';

export const bankiSocketHandler = data => {
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
    wsSendAll(JSON.stringify(mes));
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
        wsSendAll(JSON.stringify(mes));

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

      wsSendAll(JSON.stringify(mes));

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

      wsSendAll(JSON.stringify(mes));
    }
};
