import { Badge } from './Badge.js';
import { QuestBadge } from './QuestBadge.js';
import { LecturesBadge } from './LecturesBadge.js';
import { getSkillLevel } from './stats.js';
import { getQuestSkills } from '../quests/quests/quests.js';

export const Skill = ({ skill, x, y, skillBoxSize, state }) => {
  console.debug('Rendering skill: ', skill);
  const height = skillBoxSize;
  const width = skillBoxSize;
  const { lecturePoints, student, questPoints } = state;
  const level = getSkillLevel({lecturePoints, questPoints, student, skill});

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

    const getCompletedQuests = () => {
      const completedQuests = questPoints[student];
      if (!completedQuests) return false;

      const questsBySkill = [];

      for (let q of completedQuests) {
        const skills = getQuestSkills(q.id);
        if (skills.includes(skill.id)) {
          questsBySkill.push(q);
        }
      }

      return questsBySkill;
    };

    const completedQuests = getCompletedQuests();

    if (completedQuests?.length) {
      html += QuestBadge({
        x: x - width,
        y,
        points: completedQuests.length,
      });
    }

    return html;
  };


  return `
    <g class="skill}" width="${width}" height="${height}">
     <rect x="${x}" y="${y}" width="${skillBoxSize}" height="${skillBoxSize}"></rect>
      <image
        href="src/skills/img/texture-100x100.jpg"
        height="${height}"
        width="${width}"
        x="${x}"
        y="${y}"
        class="level-${level} ${student}"
      />
     ${Text({
       x: x + width / 2,
       y: y + height / 2,
       text: skill.text,
     })}
     ${LecturesBadge({
       x: x + skillBoxSize / 2,
       y: y - skillBoxSize / 2,
       level,
       state,
       skill,
     })}
    </g>
 `;
};
