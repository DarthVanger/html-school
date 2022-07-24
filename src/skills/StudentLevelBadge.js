import { Badge } from './Badge.js';
import { ProgressArc } from './ProgressArc.js';

export const StudentLevelBadge = ({text, x, y, level, points, selectedStudent}) => {
  const badgeR = 30;
  const height = badgeR * 2;
  const width = height;
  const size = width;

  const levelProgress = points[selectedStudent] % 10 / 10;
  const angle = 1 * Math.PI * levelProgress;

  return `
    <g class="student-level">
     ${Badge({
       x: x - size,
       y: y - size,
       level,
       badgeR: 30,
       selectedStudent,
     })};
      <circle cx="${x}" cy="${y}" r="${badgeR}" stroke="black" stroke-width="10" fill="transparent" />
     ${ProgressArc({
       x,
       y,
       r: badgeR,
       points,
       selectedStudent,
     })}
      <text
          x="${x}" y="${y + size - 10}"
          text-anchor="middle"
          alignment-baseline="middle"
          class="student-level-text"
        >
          Level
     </text>
      <text
          x="${x}" y="${y + size + 8}"
          text-anchor="middle"
          alignment-baseline="middle"
          class="exp-text"
        >
          Exp: ${points[selectedStudent]}
     </text>
   </g>
 `;
};

