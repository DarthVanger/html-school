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
    y: cy - 18,
  }

  const questText = {
    x: cx - 55,
    y: cy - 55,
  }

  const questNumberText = {
    x: cx - 45,
    y: cy - 42,
  }

  const getLevelNumberText = () => {
    return document.querySelector('#level-number-text');
  };

  const getQuestNumberText = () => {
    return document.querySelector('#quest-number-text');
  };

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
      getLevelNumberText().innerHTML = level;
      getQuestNumberText().innerHTML = questsNum;
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

        <text dominant-baseline="middle" text-anchor="middle" id="level-number-text" x="${levelNumberText.x}" y="${levelNumberText.y}" style="font-size: ${fontSize}">
          0
        </text>

        <text dominant-baseline="middle" text-anchor="middle" x="${questText.x}" y="${questText.y}" style="font-size: ${fontSize}">
          Домашка
        </text>

        <text dominant-baseline="middle" text-anchor="middle" id="quest-number-text" x="${questNumberText.x}" y="${questNumberText.y}" style="font-size: ${fontSize}">
          0
        </text>
      </svg>
    </div>
  `;
};
