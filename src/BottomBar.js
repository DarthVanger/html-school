import { logout } from './session.js';
import { describeArc } from './skills/arc.js';
import { getLevelInfo } from './api.js';
import { getLevelProgress } from './skills/utils.js';

export const BottomBar = ({ student }) => {
  const getElement = () => document.querySelector('#bottom-bar');
  const size = 200;

  const state = {
    level: 0,
    points: 0,
  };

  const setState = (newState) => {
    console.log('setState: ', newState);
    state.level = newState.level;
    state.points = newState.points;
    render();
  };

  const fetchScore = async () => {
    const { level, points } = await getLevelInfo({ student });

    setState({
      level,
      points,
    });
  };

  const addListeners = () => {
    const levelElement = getElement().querySelector('#level')
    levelElement.addEventListener('click', () => {
      logout();
      location.reload();
    });
  };

  setTimeout(() => {
    addListeners();
    fetchScore();
  });

  const render = () => {
    const levelProgress = getLevelProgress(state.points);
    const levelProgressDegrees = levelProgress * 90;

    const element = document.createElement('div');
    element.id = 'bottom-bar';

    element.innerHTML = `
      <img class="avatar" src="img/${student}.jpg" />
      <svg>
        <path d="${describeArc(0, size + 2, size, 0, levelProgressDegrees)}" class="level-progress-arc" />
      </svg>
      <div id="level">
        ${state.level}
      </div>
      <div id="level-progress">
        ${levelProgress * 100}%
      </div>
      <div id="points">
        Exp: ${state.points}
      </div>
    `;

    if (getElement()) {
      const parent = getElement().parentNode;
      getElement().remove();
      parent.append(element);
      addListeners();
    }

    return element.outerHTML;
  };

  return render();
};
