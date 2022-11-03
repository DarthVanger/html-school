import { HomeworkPage } from './HomeworkPage/HomeworkPage.js';
import { getHomeworkPoints } from './stats.js';
let element;

export const HomeworkBadge = ({x, y, level, skill, state }) => {
  let id = 'elem-' + Math.round(Math.random() * 100000).toString();
  const size = 50;

  const imgX = x + size;
  const imgY = y + size;
  const fontSize = 16;
  const textPadding = 8;

  const { student, homework } = state;

  const homeworkPoints = getHomeworkPoints({homework, student, skill});

  setTimeout(() => {
    element = document.querySelector(`#${id}`);

    element?.addEventListener('click', async () => {
      const e = HomeworkPage({...state, skill})
      console.log('apending: ', e);
      document.body.append(e);
    });
  });
  
  return `
    <g class="homework-badge" id="${id}">
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
       ${homeworkPoints}
     </text>
   </g>
 `;
};
