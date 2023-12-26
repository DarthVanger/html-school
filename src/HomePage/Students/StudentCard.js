import { Avatar } from '../../Avatar.js';
import { StatsBarChart } from './StatsBarChart/StatsBarChart.js';

export const StudentCard = (state) => {
  const element = document.createElement('article');
  element.className = 'student-card';

  const { student } = state;

  element.innerHTML = `
    <div>
      ${Avatar({student})}
    </div>
  `;

  element.append(StatsBarChart({ ...state, student }));

  return element;
};
