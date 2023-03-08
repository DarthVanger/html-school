import * as socket from '../socket.js';
import { getOnlineLog } from './api.js';

export const OnlineLog = () => {
  const element = document.createElement('div');
  element.id = 'online-log';

  setTimeout(async () => {
    const onlineLog = await getOnlineLog();

    element.querySelector('#loading-online-log').remove();

    const onlineByDayUnsorted = getOnlineByDay(onlineLog);
    const students = Object.keys(onlineByDayUnsorted);
    const totalMinutesByStud = students.map(stud => ({
        [stud]: getTotalOnlineMinutes(onlineLog[stud]),
    })).sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);

    console.log('totalMinutesByStud' , totalMinutesByStud);

    const onlineByDay = {};
    for (let entry of totalMinutesByStud) {
      console.log('entry:' , entry);
      const student = Object.keys(entry)[0];
      onlineByDay[student] = onlineByDayUnsorted[student];
    }

    console.log('online by day: ', onlineByDay);

    for (let student in onlineByDay) {
      let html = '';
      html += `
        <div class="student-row">
          <img class="student-ava" src="/img/${student}.jpg" />
      `;

      const studentOnlineByDay = onlineByDay[student];
      const totalOnlineMinutes = getTotalOnlineMinutes(onlineLog[student]);

      html += `
        <div class="online-log-day">
          <div class="day">All time</div>
          <div class="time">${totalOnlineMinutes} min</div>
        </div>
      `;

      for (let dayString in studentOnlineByDay) {
        const durationMinutes = Math.round(studentOnlineByDay[dayString]);
        const date = new Date(dayString);

        html += `
          <div class="online-log-day">
            <div class="day">${formatDay(date)}</div>
            <div class="time">${durationMinutes} min</div>
          </div>
        `;
      }

     html += '</div>';
     element.innerHTML += html;
    }
  });

  element.innerHTML = `
    <h2>Online Log</h2>
    <p id="loading-online-log">Loading...</p>
  `;

  return element;
};

const getTotalOnlineMinutes = (studentLog) => {
  let sum = 0;
  for (let studentLogEntry of studentLog) {
    sum += studentLogEntry.durationMinutes;
  }
  return Math.round(sum);
};

const getOnlineByDay = (onlineLog) =>  {
  let onlineByDay = {}
  for (let student in onlineLog) {
    let byDay = {};
    const studentLog = onlineLog[student];
    for (let studentLogEntry of studentLog) {
      const date = new Date(studentLogEntry.date);
      if (!byDay[getCalendarDayString(date)]) {
        byDay[getCalendarDayString(date)] = studentLogEntry.durationMinutes;
      } else {
        byDay[getCalendarDayString(date)] += studentLogEntry.durationMinutes;
      }
    }
    onlineByDay[student] = byDay;
  }
  console.log(onlineByDay);
  return onlineByDay;
};

// https://bobbyhadz.com/blog/javascript-get-month-and-date-in-2-digit-format
function getCalendarDayString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDay(date) {
  const localeOptions = {
    month: 'short',
    day: '2-digit',
  };

  return date.toLocaleDateString('en-US', localeOptions);
};
