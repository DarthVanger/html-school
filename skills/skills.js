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

const updateProgressArc = () => {
  const levelProgress = points[selectedStudent] % 10 / 10;
  const angle = Math.round(360 * levelProgress);

  const arc = document.querySelector('.progress-arc');
  const x = Number(arc.getAttribute('data-x'));
  const y = Number(arc.getAttribute('data-y'));
  const r = Number(arc.getAttribute('data-r'));
  arc.setAttribute('d', describeArc(x, y, r, 0, angle));
};

const render = () => {
  console.log('render()');
  const tree = Tree({ selectedStudent });
  const svg = SvgContainer({
    width: 1000,
    height: 1000,
    children: tree,
  });
  document.querySelector('section').innerHTML = svg;
};

const changeStudent = student => {
  console.log('change student: ', student);
  selectedStudent = student;
  render();
};

const header = document.querySelector('header');
const links = header.querySelectorAll('a');

links.forEach(link => {
  const student = link.href.replace(/[^#]*[#]/, '');
  link.addEventListener('click', () => changeStudent(student));
});



const badgeR = 25;


const tree = Tree({ student: selectedStudent});
render(tree);


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
