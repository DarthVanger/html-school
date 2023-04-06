const element = document.createElement('div');
element.id = 'doska-pometa';
import { getQuestSkills } from '../quests/quests/quests.js';
import { getExperience } from '../api.js';

export const Doska = (state) => {
  const element = document.createElement('div');
  element.id = 'doska-pometa';

  setTimeout(async () => {
    const experience = await getExperience();
    console.log('experience: ', experience);
  });

  const renderWhenReady = () => {
    if (!state.questPoints) {
      setTimeout(render, 2500);
      return;
    }
  }

  const getHomeworkPoints = (hw) => {
    return getQuestSkills(hw.id)?.length;
  }

  const calculateCodeAcademyPoints = ({ student, codeAcademy }) => {
    if (!codeAcademy[student]?.length) {
      return 0;
    }
    return [...codeAcademy[student]][0].points;
  }

  const getLastWeekCodeAcademy = () => {
    let lastWeekCa = {};
    const codeAcademy = state.codeAcademy;
    for (let student in codeAcademy) {
      for (let ca of codeAcademy[student]) {
        if (!fresherThanWeek(ca.date)) {
          if (!lastWeekCa[student]) {
            lastWeekCa[student] =  [];
          }

          lastWeekCa[student].push(ca);
        }
      }
    }

    let ret = {};
    for (let student in codeAcademy) {
      const currentCaPoints = calculateCodeAcademyPoints({ student, codeAcademy });
      const lastWeekCaPoints = calculateCodeAcademyPoints({ student, codeAcademy: lastWeekCa });

      ret[student] = currentCaPoints - lastWeekCaPoints;
    }

    return ret;
  }

  const fresherThanWeek = (d) => {
    const date = new Date(d)
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffMinutes = diff / 1000 / 60;

    const diffDays = diffMinutes / 60 / 24;

    return diffDays <= 7;
  };

  const getLastWeekHwByStudent = () => {
    const homeworks = state.questPoints;
    let lastWeekHwByStudent = {};
    for (let student in homeworks) {
      for (let hw of homeworks[student]) {
        if (fresherThanWeek(hw.date)) {
          if (!lastWeekHwByStudent[student]) {
            lastWeekHwByStudent[student] =  [];
          }

          const homework = {
            ...hw,
            points: getHomeworkPoints(hw),
          };

          lastWeekHwByStudent[student].push(homework);
        }
      }
    };

    return lastWeekHwByStudent;
  };

  const render = () => {
    const lastWeekHwByStudent = getLastWeekHwByStudent();
    console.info('Doska: lastWeekHwByStudent: ', lastWeekHwByStudent);

    const lastWeekCodeAcademy = getLastWeekCodeAcademy();

    let studRows = [];
    console.info('Doska: state.students: ', state.students);
    for (let student of state.students) {
      const studHws = lastWeekHwByStudent[student];
      const studCa = lastWeekCodeAcademy[student] || 0;
      let points = studHws?.reduce((acc, cur) => {
        return acc + cur.points
      }, 0) || 0;
      points += studCa;

      if (points == 0) continue;

      const curLevel = state.levels[student];
      const prevLevel = Math.floor((state.points[student] - points) / 10);

      studRows.push({
        student,
        points,
        numHws: studHws?.length || 0,
        hws: studHws,
        curLevel,
        prevLevel,
        codeAcademyGain: studCa,
      });
    }

    studRows.sort((a, b) => b.points - a.points);

    const hwCutLimit = 4;

    let html = '';
    studRows.forEach(({ student, points, hws, numHws, curLevel, prevLevel, codeAcademyGain }) => {
        html += `
          <div class="student-row">
            <div class="ava">
              <img src="img/${student}.jpg" />
            </div>
            <div class="info">
              <div class="plus-exp">
                + ${points} exp
                &nbsp;(+${codeAcademyGain}% Codecademy)
                ${numHws > 0 && `
                  &nbsp;(${numHws} зоданей: ${hws.map(hw => hw.id).slice(0, hwCutLimit).join(', ')}${hws.length > hwCutLimit && ', ...' || ''})
                ` || ''}
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


    element.innerHTML = `
      <h2>ДОСКА ПОМËТА</h2>
      ${html}
    `;

  }

  renderWhenReady();


  element.innerHTML = `
    <button type="button">Loading...</button>
  `;

  return element;

}
