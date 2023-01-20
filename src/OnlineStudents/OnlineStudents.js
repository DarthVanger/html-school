import * as socket from '../socket.js';

export const OnlineStudents = () => {
  let areStudentsRendered = false;
  const element = document.createElement('div');
  element.id = 'online-students';

  element.addEventListener('click', () => {
    element.style.display = 'none';
  });

  const handleOnlineStudents = (payload) => {
    console.log('handleOnlineStudents: ', payload);
    const onlineStudentsMap = payload;
    if (!areStudentsRendered) {
      for (let student in onlineStudentsMap) {
        element.innerHTML += `
          <figure class="student student-ava">
            <img src="/img/${student}.jpg" />
          </figure>
        `;
      }
      areStudentsRendered = true;
    }

    const studentElements = element.querySelectorAll('.student');
    let idx = 0;
    for (let student in onlineStudentsMap) {
        const isOnline = onlineStudentsMap[student];
        if (isOnline) {
          studentElements.item(idx).classList.add('online');
        } else {
          studentElements.item(idx).classList.remove('online');
        }
        idx++;
    }
  }

  socket.addHandler('online_students', handleOnlineStudents);

  return element;
};
