import { cyberProfile } from './cyberProfile.js';
import { SvgProfile } from './SvgProfile.js';

export const Profile = (state) => {
  const getElement = () => {
    return document.querySelector('#profile');
  };

  fetch('/tree')
    .then(r => r.json())
    .then(r => {
      state.skills = r.skills;
      state.levels = r.levels;
      state.points = r.points;
      state.categoryLevels = r.categoryLevels;
      state.lecturePoints = r.lecturePoints;
      state.questPoints = r.questPoints;

      getElement().innerHTML = render();
    });

  function render() {
    return `
        <a href="#/3d">
          ${SvgProfile(state)}
        </a>
    `;
  }

  return `
    <div id="profile">
      ${render()}
    </div>
  `;
};
