import { cyberProfile } from './cyberProfile.js';

export const Profile = (state) => {
  console.log('state: ', state);
  const scale = 2;
  const height = 296;
  const width = 526;
  const x = 0;
  const y = 0;
  const fontSize = 5;

  const cx = width / 2;
  const cy = height / 2;

  const levelText = {
    x: cx,
    y: cy + 25,
  }

  const levelNumberText = {
    x: cx,
    y: cy - 16,
  }

  const questText = {
    x: cx - 55,
    y: cy - 55,
  }

  const questNumberText = {
    x: cx - 45,
    y: cy - 42,
  }

  const lecturePointsText = {
    x: cx,
    y: cy - 84,
  }

  const lecturePointsNumberText = {
    x: cx + 6,
    y: cy - 71,
  }

  const experienceText = {
    x: cx + 53,
    y: cy - 55,
  }

  const experienceNumberText = {
    x: cx + 62,
    y: cy - 42,
  }

  const repeatsText = {
    x: cx + 54,
    y: cy + 49,
  }

  const repeatsNumberText = {
    x: cx + 60,
    y: cy + 60,
  }

  const nothingText = {
    x: cx + -54,
    y: cy + 49,
  }

  const nothingNumberText = {
    x: cx + -48,
    y: cy + 60,
  }

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

  const calculateLecturePoints = () => {
    const studentPoints = state.lecturePoints[state.student];
    let sum = 0;

    for (let x in studentPoints) {
      sum += studentPoints[x];
    }

    return sum;
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

  fetch('/tree')
    .then(r => r.json())
    .then(r => {
      state.skills = r.skills;
      state.levels = r.levels;
      state.points = r.points;
      state.categoryLevels = r.categoryLevels;
      state.lecturePoints = r.lecturePoints;
      state.questPoints = r.questPoints;
      const level = state.levels[state.student];
      const questsNum = state.questPoints[state.student].length;
      const lecturePoints = calculateLecturePoints();
      const experience = state.points[state.student];
      const repeats = calculateRepeats();
      getLevelNumberText().innerHTML = level;
      getQuestNumberText().innerHTML = questsNum;
      getLecturePointsNumberText().innerHTML = lecturePoints;
      getExperienceNumberText().innerHTML = experience;
      getRepeatsNumberText().innerHTML = repeats;
    });

  return `
    <div id="profile">
      <!--
      <img src="/src/Profile/cyber-skills.jpg" />
      -->
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <image
          href="${cyberProfile}"
          width="${width}"
          height="${height}"
          x="${x}"
          y="${y}"
          preserveAspectRatio="none"
        />
        <text dominant-baseline="middle" text-anchor="middle" x="${levelText.x}" y="${levelText.y}" style="font-size: ${fontSize}">
        Level
        </text>

        <text dominant-baseline="middle" text-anchor="middle" id="level-number-text" x="${levelNumberText.x}" y="${levelNumberText.y}" style="font-size: ${fontSize * 1.5}">
          0
        </text>

        <text dominant-baseline="middle" text-anchor="middle" x="${questText.x}" y="${questText.y}" style="font-size: ${fontSize}">
          Домашка
        </text>

        <text dominant-baseline="middle" text-anchor="middle" id="quest-number-text" x="${questNumberText.x}" y="${questNumberText.y}" style="font-size: ${fontSize}">
          0
        </text>

        <text dominant-baseline="middle" text-anchor="middle" x="${lecturePointsText.x}" y="${lecturePointsText.y}" style="font-size: ${fontSize}">
          Лекции
        </text>

        <text dominant-baseline="middle" text-anchor="middle" id="quest-lecture-points-number-text" x="${lecturePointsNumberText.x}" y="${lecturePointsNumberText.y}" style="font-size: ${fontSize}">
          0
        </text>

        <text dominant-baseline="middle" text-anchor="middle" x="${experienceText.x}" y="${experienceText.y}" style="font-size: ${fontSize}">
          Экспа
        </text>

        <text dominant-baseline="middle" text-anchor="middle" id="quest-experience-number-text" x="${experienceNumberText.x}" y="${experienceNumberText.y}" style="font-size: ${fontSize}">
          0
        </text>

        <text dominant-baseline="middle" text-anchor="middle" x="${repeatsText.x}" y="${repeatsText.y}" style="font-size: ${fontSize}">
          Повторение
        </text>

        <text dominant-baseline="middle" text-anchor="middle" id="repeats-number-text" x="${repeatsNumberText.x}" y="${repeatsNumberText.y}" style="font-size: ${fontSize}">
          0
        </text>

        <text dominant-baseline="middle" text-anchor="middle" x="${nothingText.x}" y="${nothingText.y}" style="font-size: ${fontSize}">
        Нихуя
        </text>

        <text dominant-baseline="middle" text-anchor="middle" id="repeats-number-text" x="${nothingNumberText.x}" y="${nothingNumberText.y}" style="font-size: ${fontSize}">
          0
        </text>
      </svg>
      </svg>
    </div>
  `;
};
