import { describeArc } from './arc.js';
import { getLevelProgress } form './utils.js';

export const ProgressArc = ({x, y, r, points, selectedStudent}) => {
  const levelProgress = getLevelProgress(points[selectedStudent]);
  const angle = 360 * levelProgress;

  return `
    <path
      d="${describeArc(x, y, r, 0, angle)}"
      class="student-level-path progress-arc"
      data-x="${x}"
      data-y="${y}"
      data-r="${r}"
    />
  `;
};
