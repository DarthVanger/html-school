const element = document.createElement('div');
element.id = 'doska-pometa';
import { getQuestSkills } from '../quests/quests/quests.js';

export const Doska = (state) => {
  const getElement = () => document.querySelector('#doska-pometa');

  let isExpanded = false;

  const expand = () => {
    if (!isExpanded) {
      getElement().className = 'expand';
      isExpanded = true;
    } else {
      getElement().className = '';
      isExpanded = false;
    }
  }

  const renderWhenReady = () => {
    if (!state.questPoints) {
      setTimeout(render, 500);
      return;
    }
  }

  const getHomeworkPoints = (hw) => {
    return getQuestSkills(hw.id)?.length;
  }

  const render = () => {
    const homeworks = state.questPoints;
    console.log('homeworks: ', homeworks);
    const now = new Date();
    let lastWeekHomeworks = [];
    let lastWeekByStudent = {};
    for (let student in homeworks) {
      for (let hw of homeworks[student]) {
        const d = hw.date;
        const date = new Date(d)
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const diffMinutes = diff / 1000 / 60;

        const diffDays = diffMinutes / 60 / 24;

        if (diffDays < 7) {
          if (!lastWeekByStudent[student]) {
            lastWeekByStudent[student] =  [];
          }
          lastWeekByStudent[student].push(hw);

          lastWeekHomeworks.push({
            student,
            homework: {
              ...hw,
              points: getHomeworkPoints(hw),
            },
          });
        }
      }
    };

    console.log('lastWeekByStudent: ', lastWeekByStudent);

    const formatDate = (d) => {
      const date = new Date(d);
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

      return date.toLocaleDateString("uk-UA", options); // Saturday, September 17, 2016
    }

    const homeworkListHtml = lastWeekHomeworks.reverse().map(({ student, homework }) => `
      <div class="entry">
        <div class="left">
          <img src="/img/${student}.jpg" />
          <div>${student}</div>
        </div>
        <div class="right">
          <p>${homework.id} - ${formatDate(homework.date)}</p>
        </div>
      </div>
    `).join('');;

    getElement().innerHTML = `
      <button type="button" class="expand">ДОСКА ПОМËТА</button>
      ${homeworkListHtml}
    `;

    getElement().querySelector('.expand').addEventListener('click', expand);

    console.log('homeworks: ', homeworks);
    console.log('lastWeekHomeworks: ', lastWeekHomeworks);
  }

  renderWhenReady();


  element.innerHTML = `
    <button type="button">Loading...</button>
  `;

  return element.outerHTML;

}
