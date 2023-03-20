import * as socket from '../socket.js';

export const OnlineStudents = () => {
  let areStudentsRendered = false;
  let onlineStudentsMap = {};

  const element = document.createElement('div');
  element.id = 'online-students';

  const handleOnlineStudents = (payload) => {
    console.debug('handleOnlineStudents: ', payload);
    const onlineStudentsMap = payload;
    if (!areStudentsRendered) {
      for (let student in onlineStudentsMap) {
        element.innerHTML += `
          <figure class="student student-ava" data-student="${student}">
            <img src="/img/${student}.jpg" />
            <figcaption></figcaption>
          </figure>
        `;
      }
      areStudentsRendered = true;
    }

    const studentElements = element.querySelectorAll('.student');
    let idx = 0;
    for (let student in onlineStudentsMap) {
      const studEl = studentElements[idx];
      const stud = studEl.getAttribute('data-student');
      const lastOnlineDate = new Date(onlineStudentsMap[stud]);
      const now = new Date();
      const timePast = now.getTime() - lastOnlineDate.getTime();
      const pingInterval = 5000;
      const isOnline = timePast <= pingInterval;
      const neverOnline = lastOnlineDate.getTime() === 0;
      const offlineForMonth = neverOnline || timePast > 1000 * 60 * 60 * 24 * 30;

      if (isOnline) {
        studentElements.item(idx).classList.add('online');
      } else {
        studentElements.item(idx).classList.remove('online');
      }
      idx++;

      const localeOptions = {
        //era: 'long',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      };

      const figcap = studEl.querySelector('figcaption');

      if (neverOnline) {
        figcap.innerHTML = `
          Last Online:<br> Never
        `;
      } else {
        figcap.innerHTML = `
          Last Online<br>${lastOnlineDate.toLocaleDateString('en-US', localeOptions)}
        `;
      }

      if (isOnline) {
        figcap.innerHTML = `
          Is Online Now!
        `;
      }


      if (offlineForMonth) {
        studEl.style.display = 'none';
      }
    }
  }

  socket.addHandler('online_students', handleOnlineStudents);

  return element;
};
