import { Tree } from './Tree.js';
import { SvgContainer } from './SvgContainer.js';
import { Students } from './Students.js';
import { BottomBar } from '../BottomBar.js';
import { Topbar } from '../Topbar.js';

const skillBoxSize = 120;
const width = skillBoxSize;
const height = skillBoxSize;

let isMusicPlaying = false;
const element = document.createElement('div');
element.id = 'skills-page';
let state = {};
export const Skills = (props) => {
  console.log('Skills, props: ', props);
  state.student = props.student;
  if (!state.skills) {
    console.info('Fetching skills');
    fetch('/tree')
      .then(r => r.json())
      .then(r => {
        state.skills = r.skills;
        state.levels = r.levels;
        state.points = r.points;
        state.categoryLevels = r.categoryLevels;
        state.lecturePoints = r.lecturePoints;
        state.questPoints = r.questPoints;
        Skills(props);
      });

    element.innerHTML = 'Loading...';
    return element;
  }
  console.info('Rendering skills tree');

  const tree = Tree(state);

  console.log('skills: ', state.skills);
  console.log('Rendering svg cont');
  const svgContainer = SvgContainer({
    width: 1000,
    height: 1000,
    children: tree,
  });

  if (!isMusicPlaying) {
    document.body.addEventListener('click', () => {
      isMusicPlaying = true;
      var audio = new Audio('/audio/tristram.webm');
      audio.volume = 0.2;
      audio.play();
    });
  }

  element.innerHTML = `
    ${Topbar({ backUrl: '/#/', surface: 'black' })}
    ${svgContainer}
    ${BottomBar(state)}
  `;

  return element;
};

