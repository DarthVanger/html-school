import { Badge } from './Badge.js';
import { QuestBadge } from './QuestBadge.js';
import { LecturesBadge } from './LecturesBadge.js';
import { getSkillLevel, getQuestPoints } from './stats.js';

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

    const questBadgePoints = getQuestPoints({ ...state, skill });
    console.debug('Skill(). Quest badge points: ', questBadgePoints);
    if (questBadgePoints > 0) {
      html += QuestBadge({
        x: x - width,
        y,
        points: questBadgePoints,
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
