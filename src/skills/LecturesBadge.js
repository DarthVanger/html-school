import { getLecturePoints } from './stats.js';
let element;

export const LecturesBadge = (props) => {
  console.debug('Lectures Badge. Props: ', props);

  const {x, y, level, skill, state } = props;
  let id = 'elem-' + Math.round(Math.random() * 100000).toString();
  const size = 50;

  const imgX = x + size;
  const imgY = y + size;
  const fontSize = 16;
  const textPadding = 8;

  const { student, lecturePoints } = state;

  const points = getLecturePoints({lecturePoints, student, skill});

  console.debug('Lectures Badge. Points: ', points);

  return `
    <g class="homework-badge lectures-badge" id="${id}">
      <image
        href="src/skills/img/book.png"
        x="${imgX}"
        y="${imgY}"
        width="${size}px" height="${size}px"
      />
     <text x="${imgX}" y="${imgY + fontSize + textPadding}"
      text-anchor="middle"
      alignment-baseline="middle"
      data-level-tony=${level}
      data-level-johnny=${level}
      data-level-dimon=${level}
      class="badge-text"
     >
       ${points}
     </text>
   </g>
 `;
};
