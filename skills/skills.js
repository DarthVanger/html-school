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

let selectedStudent = window.location.hash.replace('#', '') || 'tony';

const state = {
  component: null,
};

export const Skills = () => {
  if (state.component) {
    state.component.remove();
    state.component = null;
  }
   console.info('Skills');
  const changeStudent = student => {
    console.log('change student: ', student);
    selectedStudent = student;
  };

  const header = document.querySelector('header');
  const links = header.querySelectorAll('a');

  links.forEach(link => {
    const student = link.href.replace(/[^#]*[#]/, '');
    link.addEventListener('click', () => changeStudent(student));
  });

  const badgeR = 25;

  const tree = Tree({ student: selectedStudent});

  changeStudent(selectedStudent);

  let audioIsOn = false;
  document.body.addEventListener('click', () => {
    if (!audioIsOn) {
      audioIsOn = true;
      var audio = new Audio('audio/tristram.webm');
      audio.volume = 0.2;
      audio.play();
    }
  });

  const svgContainer = SvgContainer({
    width: 1000,
    height: 1000,
    children: tree,
  });

  state.component = svgContainer;
  return state.component;
};

