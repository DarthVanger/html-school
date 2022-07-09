import { Skills } from './skills.js';

let state = {
  student: window.location.hash.replace('#', '') || 'tony',
  skills: null,
};

export const App = ({ render }) => {
  if (!state.skills) {
    console.info('Fetching skills');
    fetch('/tree')
      .then(r => r.json())
      .then(r => {
        state.skills = r.skills;
        state.levels = r.levels;
        state.points = r.points;
        state.categoryLevels = r.categoryLevels;
        render();
      });

    return 'Loading...';
  }

  return Skills(state);
}
