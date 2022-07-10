import { Skills } from './skills.js';
import { state, setState } from './state.js';

const getStudentFromHash = () => {
  return window.location.hash.replace('#', '') || 'tony';
};

export const App = ({ render }) => {
  console.log('App');
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

  window.addEventListener('hashchange', event => {
    setState({
      student: getStudentFromHash(),
    });
  });

  setState({
    student: getStudentFromHash(),
  });

  return `
    <div id="app">
      ${Skills(state)};
    </div>
  `;
}
