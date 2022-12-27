import { cyberProfile } from './cyberProfile.js';
import { saveCodeAcademy } from './api.js';

export const SvgProfile = (state) => {
  const height = 296 * 4;
  const width = 526 * 4;
  const x = 0;
  const y = 0;
  const fontSize = state.is3d ? '2em' : '1em';

  const cx = width / 2;
  const cy = height / 2;

  const levelText = {
    x: cx,
    y: cy + 0.084 * height,
  }

  const levelNumberText = {
    x: cx,
    y: cy - 0.054 * height,
  }

  const questText = {
    x: cx - 0.1 * width,
    y: cy - 0.185 * height,
  }

  const questNumberText = {
    x: cx - 0.085 * width,
    y: cy - 0.14 * height,
  }

  const lecturePointsText = {
    x: cx,
    y: cy - 0.283 * height,
  }

  const lecturePointsNumberText = {
    x: cx + 0.01 * width,
    y: cy - 0.239 * height,
  }

  const experienceText = {
    x: cx + 0.1 * width,
    y: cy - 0.185 * height,
  }

  const experienceNumberText = {
    x: cx + 0.12 * width,
    y: cy - 0.138 * height,
  }

  const repeatsText = {
    x: cx + 0.102 * width,
    y: cy + 0.165 * height,
  }

  const repeatsNumberText = {
    x: cx + 0.115 * width,
    y: cy + 0.21 * height,
  }

  const nothingText = {
    x: cx - 0.105 * width,
    y: cy + 0.165 * height,
  }

  const nothingNumberText = {
    x: cx - 0.094 * width,
    y: cy + 0.21 * height,
  }

  const getSvg = () => document.querySelector('svg');

  const getLevelNumberText = () => {
    return document.querySelector('#level-number-text');
  };

  const getQuestNumberText = () => {
    return document.querySelector('#quest-number-text');
  };

  const getLecturePointsNumberText = () => {
    return document.querySelector('#quest-lecture-points-number-text');
  };

  const getExperienceNumberText = () => {
    return document.querySelector('#quest-experience-number-text');
  };

  const getRepeatsNumberText = () => {
    return document.querySelector('#repeats-number-text');
  };

  const getCodeAcademyNumberText = () => {
    return document.querySelector('#codecademy');
  }

  const getCodeAcademyText = () => {
    return document.querySelector('#codecademy-text');
  }

  const calculateLecturePoints = () => {
    const studentPoints = state.lecturePoints[state.student];
    let sum = 0;

    for (let x in studentPoints) {
      sum += studentPoints[x];
    }

    return sum;
  }

  const calculateCodeAcademyPoints = () => {
    return state.codeAcademy[state.student];
  }

  const calculateRepeats = () => {
    const quests = state.questPoints[state.student];
    const map = {};

    for (let q of quests) {
      map[q.id] = map[q.id] ? (map[q.id] + 1) : 1;
    }

    let sum = 0;
    for (let q in map) {
      const c = map[q];
      sum += c - 1;
    }

    return sum;
  }

  if (!state.levels) {
    return `Loading...`;
  }

  if (!state.codeAcademy) {
    state.codeAcademy = {
      [state.student]: 0,
    };
  }


  const student = state.student;
  const questsNum = state.questPoints[state.student]?.length || 0;
  const lecturePoints = calculateLecturePoints();
  const repeats = questsNum > 0 ? calculateRepeats() : 0;
  const experience = calcExp();
  const level = calcLevel();

  function calcLevel() {
    return parseInt(calcExp() / 10);
  }

  function calcExp() {
    return state.points[state.student] + calculateCodeAcademyPoints();
  }

  function plusCodeAcademy() {
    const student = state.student;
    const points = ++state.codeAcademy[student];
    recomputeExp();
    saveCodeAcademy({ student, points });
  }

  function minusCodeAcademy() {
    const student = state.student;
    if (state.codeAcademy[student] <= 1) {
      return;
    }
    const points = --state.codeAcademy[student];
    recomputeExp();
    saveCodeAcademy({ student, points });
  }

  let isCodeAcademySelected = false;

  function keyupListener(e) {
    if (e.key == 'p') {
      plusCodeAcademy();
    }
    if (e.key == 'm') {
      minusCodeAcademy();
    }
  }

  function handleCodeAcademyClick(e) {

    if (!isCodeAcademySelected) {
      isCodeAcademySelected = true;
      getSvg().classList.add('selected');
      document.addEventListener('keyup', keyupListener);
    } else {
      isCodeAcademySelected = false;
      console.log('remov even lis');
      document.removeEventListener('keyup', keyupListener, false);
      getSvg().classList.remove('selected');
    }
  }

  function recomputeExp() {
    getCodeAcademyNumberText().textContent = calculateCodeAcademyPoints();
    getExperienceNumberText().textContent = calcExp();
    getLevelNumberText().textContent = calcLevel();
  };

  setTimeout(() => {
    [getCodeAcademyText(), getCodeAcademyNumberText()].forEach(el => {
      el.addEventListener('click', handleCodeAcademyClick);
    });
  });

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <style>
        text {
          fill: #60a7ac;
          font-size: ${fontSize};
        }
        #level-number-text {
          font-size: ${fontSize * 1.5};
        }
      </style>

      <image
        href="${cyberProfile}"
        width="${width}"
        height="${height}"
        x="${x}"
        y="${y}"
        preserveAspectRatio="none"
      />
      <text dominant-baseline="middle" text-anchor="middle" x="${levelText.x}" y="${levelText.y}">
      Level
      </text>

      <text dominant-baseline="middle" text-anchor="middle" id="level-number-text" x="${levelNumberText.x}" y="${levelNumberText.y}">
        ${level}
      </text>

      <text dominant-baseline="middle" text-anchor="middle" x="${questText.x}" y="${questText.y}">
        Домашка
      </text>

      <text dominant-baseline="middle" text-anchor="middle" id="quest-number-text" x="${questNumberText.x}" y="${questNumberText.y}">
        ${questsNum}
      </text>

      <text dominant-baseline="middle" text-anchor="middle" x="${lecturePointsText.x}" y="${lecturePointsText.y}">
        Лекции
      </text>

      <text dominant-baseline="middle" text-anchor="middle" id="quest-lecture-points-number-text" x="${lecturePointsNumberText.x}" y="${lecturePointsNumberText.y}">
      ${lecturePoints}
      </text>

      <text dominant-baseline="middle" text-anchor="middle" x="${experienceText.x}" y="${experienceText.y}">
        Экспа
      </text>

      <text dominant-baseline="middle" text-anchor="middle" id="quest-experience-number-text" x="${experienceNumberText.x}" y="${experienceNumberText.y}">
      ${experience}
      </text>

      <text dominant-baseline="middle" text-anchor="middle" x="${repeatsText.x}" y="${repeatsText.y}">
        Повторение
      </text>

      <text dominant-baseline="middle" text-anchor="middle" id="repeats-number-text" x="${repeatsNumberText.x}" y="${repeatsNumberText.y}">
      ${repeats}
      </text>

      <text id="codecademy-text" dominant-baseline="middle" text-anchor="middle" x="${nothingText.x}" y="${nothingText.y}">
      Академия Кода
      </text>

      <text id="codecademy" dominant-baseline="middle" text-anchor="middle" id="repeats-number-text" x="${nothingNumberText.x}" y="${nothingNumberText.y}">
      ${state.codeAcademy[state.student]}
      </text>
    </svg>
  `;
};
