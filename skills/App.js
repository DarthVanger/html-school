import { Skills } from './skills.js';
import { state, setState } from './state.js';

const getStudentFromHash = () => {
  return window.location.hash.replace('#', '') || 'tony';
};

let isMusicPlaying = false;

export const App = ({ render }) => {
  state.onChange = () => {
    state.skills = null;
    render();
  };

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
        state.homework = r.homework;
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

  document.body.addEventListener('click', () => {
    if (!isMusicPlaying) {
      isMusicPlaying = true;
      var audio = new Audio('/audio/tristram.webm');
      audio.volume = 0.2;
      audio.play();
    }
  });

  return `
    <div id="app">
      ${Skills(state)};
    </div>
  `;
}
