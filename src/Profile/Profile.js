import { cyberProfile } from './cyberProfile.js';
import { SvgProfile } from './SvgProfile.js';

export const Profile = (state) => {
  const element = document.createElement('div');
  element.id = 'profile';

  state.isProfileLoading = true;
  fetch('/tree')
    .then(r => r.json())
    .then(r => {
      state.isProfileLoading = false;
      state.skills = r.skills;
      state.levels = r.levels;
      state.points = r.points;
      state.categoryLevels = r.categoryLevels;
      state.lecturePoints = r.lecturePoints;
      state.questPoints = r.questPoints;
      state.codeAcademy = r.codeAcademy;
      state.students = r.students;

      element.innerHTML = render();
    });

  function render() {
    return `
      ${state.isProfileLoading ? 'Loading...' : SvgProfile(state)}
    `;
  }

  element.innerHTML = `
    <div id="profile">
      ${render()}
    </div>
  `;

  return element;
};
