import { describeArc } from './arc.js';
import { skills, students, levels, points } from './levels.js';
import { Tree, treeWidth, treeHeight } from './Tree.js';
import { Skill } from './Skill.js';
import { Badge } from './Badge.js';
import { Avatar } from './Avatar.js';

const skillBoxSize = 120;
const width = skillBoxSize;
const height = skillBoxSize;
let treeHeights = [];

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

const changeStudent = newStudent => {
  let prevStudent = selectedStudent;
  selectedStudent = newStudent;

  updateProgressArc();

  document.querySelectorAll('[class^=level-]').forEach(el => {
    const prevLevel = el.getAttribute(`data-level-${prevStudent}`);
    const level = el.getAttribute(`data-level-${selectedStudent}`);
    el.classList.remove(`level-${prevLevel}`);
    el.classList.remove(`${prevStudent}`);
    el.classList.add(`level-${level}`);
    el.classList.add(`${selectedStudent}`);
  });

  document.querySelectorAll('[class*=category-level-]').forEach(el => {
    const prevLevel = el.getAttribute(`data-level-${prevStudent}`);
    const level = el.getAttribute(`data-level-${selectedStudent}`);
    el.classList.remove(`category-level-${prevLevel}`);
    el.classList.remove(`${prevStudent}`);
    el.classList.add(`category-level-${level}`);
    el.classList.add(`${selectedStudent}`);
  });

  document.querySelectorAll('.badge-text').forEach(el => {
    el.innerHTML = el.getAttribute(`data-level-${selectedStudent}`);
  });

  document.querySelectorAll('.exp-text').forEach(el => {
    el.innerHTML = `Exp: ${points[selectedStudent]}`;
  });

  document.querySelector(`.avatar-${prevStudent}`).classList.add('hide');
  document.querySelector(`.avatar-${selectedStudent}`).classList.remove('hide');

  document.querySelector(`a[href="#${prevStudent}"]`).classList.remove('selected');
  document.querySelector(`a[href="#${selectedStudent}"]`).classList.add('selected');
};

const header = document.querySelector('header');
const links = header.querySelectorAll('a');

links.forEach(link => {
  const student = link.href.replace(/[^#]*[#]/, '');
  link.addEventListener('click', () => changeStudent(student));
});



const badgeR = 25;




const tree = Tree({ x: 0, y: 0, selectedStudent});

const svg = `
<svg height="${treeHeight}" viewBox="0 0 ${treeWidth} ${treeHeight}">

${Avatar({ levels, points, selectedStudent })}

${tree}

</svg>

`;

document.querySelector('section').innerHTML = svg;

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
