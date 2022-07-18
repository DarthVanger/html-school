import { logout } from './session.js';
import { describeArc } from './skills/arc.js';

export const BottomBar = ({ student }) => {
  const getElement = () => document.querySelector('#bottom-bar');
  const size = 200;

  const levelProgress = 0.75;
  const levelProgressDegrees = levelProgress * 90;

  setTimeout(() => {
    getElement().addEventListener('click', () => {
      logout();
      location.reload();
    });
  });

  return `
    <div id="bottom-bar">
      <img class="avatar" src="img/${student}.jpg" />
      <svg>
        <path d="${describeArc(0, size, size, 0, levelProgressDegrees)}" class="level-progress-arc" />
      </svg>
    </div>
  `;
};
