import { cyberProfile } from './cyberProfile.js';
import { SvgProfile } from './SvgProfile.js';

export const Profile = (state) => {
  const element = document.createElement('div');
  element.id = 'profile';

  element.innerHTML = 'Loading...';

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

      element.innerHTML = state.isLoading ? 'Loading...' : SvgProfile(state);
    });

  return element;
};
