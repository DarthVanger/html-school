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

          const homework = {
            ...hw,
            points: getHomeworkPoints(hw),
          };

          lastWeekByStudent[student].push(homework);

          lastWeekHomeworks.push({
            student,
            homework,
          });
        }
      }
    };

    console.log('lastWeekByStudent: ', lastWeekByStudent);

    let studRows = [];
    for (let student in lastWeekByStudent) {
      const studHws = lastWeekByStudent[student];
      const points = studHws.reduce((acc, cur) => {
        return acc + cur.points
      }, 0);

      const curLevel = state.levels[student];
      const prevLevel = Math.floor((state.points[student] - points) / 10);

      studRows.push({
        student,
        points,
        numHws: studHws.length,
        hws: studHws,
        curLevel,
        prevLevel,
      });
    }

    studRows.sort((a, b) => b.points - a.points);

    const hwCutLimit = 4;

    let html = '';
    studRows.forEach(({ student, points, hws, numHws, curLevel, prevLevel }) => {
        html += `
          <div class="student-row">
            <div class="ava">
              <img src="img/${student}.jpg" />
            </div>
            <div class="info">
              <div class="plus-exp">
                + ${points} exp
                &nbsp;(${numHws} зоданей: ${hws.map(hw => hw.id).slice(0, hwCutLimit).join(', ')}${hws.length > hwCutLimit && ', ...' || ''})
              </div>
              <div class="level-gain">
                Level: ${prevLevel} -> ${curLevel}
              </div>
            </div>
          </div>
        `;
    });

    const formatDate = (d) => {
      const date = new Date(d);
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

      return date.toLocaleDateString("uk-UA", options); // Saturday, September 17, 2016
    }


    getElement().innerHTML = `
      <h2>ДОСКА ПОМËТА</h2>
      ${html}
    `;

    console.log('homeworks: ', homeworks);
    console.log('lastWeekHomeworks: ', lastWeekHomeworks);
  }

  renderWhenReady();


  element.innerHTML = `
    <button type="button">Loading...</button>
  `;

  return element.outerHTML;

}
