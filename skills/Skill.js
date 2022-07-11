import { Badge } from './Badge.js';
import { HomeworkBadge } from './HomeworkBadge.js';

export const Skill = ({ skill, x, y, skillBoxSize, state }) => {
  const height = skillBoxSize;
  const width = skillBoxSize;
  const { student } = state;
  const level = skill.level[student]

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
