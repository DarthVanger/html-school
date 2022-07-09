import { describeArc } from './arc.js';
import { skills, students, levels, points } from './levels.js';
import { Tree, treeWidth, treeHeight } from './Tree.js';
import { Skill } from './Skill.js';
import { Badge } from './Badge.js';
import { Avatar } from './Avatar.js';
import { SvgContainer } from './SvgContainer.js';

const skillBoxSize = 120;
const width = skillBoxSize;
const height = skillBoxSize;

const state = {
  component: null,
};

export const Skills = ({ student }) => {
  console.info('Skills');

  if (state.component) {
    state.component.remove();
    state.component = null;
  }

  const playMusicOnClick = () => {
    let audioIsOn = false;
    document.body.addEventListener('click', () => {
      if (!audioIsOn) {
        audioIsOn = true;
        var audio = new Audio('audio/tristram.webm');
        audio.volume = 0.2;
        audio.play();
      }
    });
  }

  playMusicOnClick();

  const tree = Tree({ student: state.student });

  const svgContainer = SvgContainer({
    width: 1000,
    height: 1000,
    children: tree,
  });

  state.component = svgContainer;
  return state.component;
};
