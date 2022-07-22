import { Badge } from './Badge.js';
import { QuestBadge } from './QuestBadge.js';
import { HomeworkBadge } from './HomeworkBadge.js';
import { getHomeworkPoints } from './stats.js';
import quests from '../quests/quests/quests.js';

export const Skill = ({ skill, x, y, skillBoxSize, state }) => {
  const height = skillBoxSize;
  const width = skillBoxSize;
  const { homework, student, questPoints } = state;
  const level = skill.level[student]  + getHomeworkPoints({homework, student, skill});

  const Text = ({ text, x, y }) =>  {
    const texts = skill.text.split('\n');
    const fontSize = 18;
    const lineHeight = fontSize * 2;
    const numLines = texts.length;
    const textHeight = fontSize * (numLines);
    const translateY = numLines < 2 ? 0 :
      - textHeight / 2;

    let html = `
      <g transform="translate(0, ${translateY})"
      >
    `;

    texts.forEach((text, idx) => {
      const textEncoded = text.replace('>', '&gt').replace('<', '&lt');

      html += `
      <text x=${x} y=${y + idx * lineHeight}
       text-anchor="middle"
       alignment-baseline="middle"
      >
        ${textEncoded}
      </text>`;
    });

    html += '</g>';

    html += Badge({
      x,
      y,
      level,
    });

    const hasCompletedQuest = () => {
      const completedQuests = questPoints[student];
      if (!completedQuests) return false;

      for (let q of completedQuests) {
        const skills = quests[q.id].skills;
        console.log('skills: ', skills);
        console.log('q.id: ', q.id);
        if (skills.includes(skill.text)) {
          return true;
        }
      }
      return false;
    };

    if (hasCompletedQuest()) {
      html += QuestBadge({
        x: x - width,
        y,
      });
    }

    return html;
  };


  return `
    <g class="skill}" width="${width}" height="${height}">
     <rect x="${x}" y="${y}" width="${skillBoxSize}" height="${skillBoxSize}"></rect>
      <image
        href="img/texture-100x100.jpg"
        height="${height}"
        width="${width}"
        x="${x}"
        y="${y}"
        class="level-${level} ${student}"
        data-level-tony=${skill.level.tony}
        data-level-johnny=${skill.level.johnny}
        data-level-dimon=${skill.level.dimon}
      />
     ${Text({
       x: x + width / 2,
       y: y + height / 2,
       text: skill.text,
     })}
     ${HomeworkBadge({
       x: x + skillBoxSize / 2,
       y: y - skillBoxSize / 2,
       level,
       state,
       skill,
     })}
    </g>
 `;
};
