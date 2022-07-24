import { Skills } from './skills.js';
import { Students } from './Students.js';
import { state, setState } from './state.js';
import { getQuestsPoints } from './api.js';
import { getStudent } from '../session.js';

const getCurrentStudent = () => {
  const studentFromHash = window.location.hash.replace('#', '');
  if (studentFromHash) {
    return studentFromHash;
  }

  const student = getStudent();
  window.location.hash = `#${student}`;
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
        state.questPoints = r.questPoints;
        render();
      });

    return 'Loading...';
  }

  window.addEventListener('hashchange', event => {
    const student = getCurrentStudent();
    setState({
      student,
    });
  });

  setState({
    student: getCurrentStudent(),
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
      ${Students(state)}
      ${Skills(state)}
    </div>
  `;
}
