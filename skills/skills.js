import { describeArc } from './arc.js';
import { skills, students, levels, points } from './Tree.js';
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



const Path = ({x, y}) => `
   <path d="M${x} ${y} l ${0} ${skillBoxSize / 2}"></path>
 `;

let treeHeight = 0;
const Tree = ({x , y}) => {
  const htmlSkills = skills.html;
  const css = skills.css;
  const js = skills.js;

  const marginTop = 80;

  const htmlX = skillBoxSize + 20;
  const cssX = skillBoxSize + skillBoxSize * 2.65; const jsX = skillBoxSize + skillBoxSize * 7.5;
;

  let html = `${SkillsLineHeading({
    text: 'HTML',
    x: htmlX,
    y: marginTop,
    level: htmlSkills.level,
  })}`;

  html += `${SkillsLineHeading({
    text: 'CSS',
    x: cssX + skillBoxSize,
    y: marginTop,
    level: css.level,
  })}`;

  html += `${SkillsLineHeading({
    text: 'JS',
    x: jsX + skillBoxSize,
    y: marginTop,
    level: js.level,
  })}`;

  treeHeight += marginTop;

  const branchY = skillBoxSize * 3 / 2  + marginTop;

  htmlSkills.forEach((line, idx) => {
    const x = htmlX - skillBoxSize + idx * (skillBoxSize * 2);
    const y = branchY;
    html += SkillsLine({ skills: line, x, y });
  });

  css.forEach((line, idx) => {
    const x = cssX + idx * skillBoxSize * 2;
    let y = branchY;
    // space for avatar
    if (idx == 1) y += 150;
    html += SkillsLine({ skills: line, x, y });
  });

  js.forEach((line, idx) => {
    const x = jsX + idx * skillBoxSize * 2;
    const y = branchY;
    html += SkillsLine({ skills: line, x, y, });
  });

  return html;
}

const badgeR = 25;


const SkillsLineHeading = ({ text, x, y, level }) => {
  const width = skillBoxSize;
  const height = skillBoxSize;

  const path1 = `<path d="M ${x + skillBoxSize / 2} ${y + skillBoxSize} l 0 ${skillBoxSize / 4}" />`;

  const path2 = `
    <path d="
        M ${x + skillBoxSize / 2} ${y + skillBoxSize * 5 / 4}
        l ${skillBoxSize} 0
        l 0 ${skillBoxSize / 4}
      "
    />
  `;

  const path3 = `
    <path d="
        M ${x + skillBoxSize / 2} ${y + skillBoxSize * 5 / 4}
        l ${-skillBoxSize} 0
        l 0 ${skillBoxSize / 4}
      "
    />
  `;

  const isCss = text == 'CSS';

  const path2Css = `
    <path d="
        M ${x + skillBoxSize / 2} ${y + skillBoxSize * 5 / 4}
        l 0 ${skillBoxSize + skillBoxSize / 4}
        l ${skillBoxSize} 0
        l 0 ${skillBoxSize / 4}
      "
    />
  `;

  return `
    <g class="category">
      <image
        href="img/rock.jpg"
        height="${height}"
        width="${width}"
        x="${x}"
        y="${y}"
        class="category-img category-level-${level[selectedStudent]}"
        data-level-tony=${level.tony}
        data-level-johnny=${level.johnny}
        data-level-dimon=${level.dimon}
      />
     <text x="${x + width / 2}" y="${y + height / 2}"
       text-anchor="middle"
       alignment-baseline="middle"
       class="category-text"
     >
       ${text}
     </text>
     ${Badge({
       x: x + width / 2,
       y: y + height / 2,
       level,
       selectedStudent,
     })}
     ${path1}
     ${!isCss && path2}
     ${isCss && path2Css}
     ${path3}
   </g>
  `;
};

const SkillsLine = ({ skills, x, y }) => skills.map((skill, idx) => {
    const isLastBox = idx <= skills.length - 2;
    const skillY = idx * skillBoxSize * 3 / 2 + y;
    if (isLastBox) treeHeights.push(skillY + skillBoxSize * 3);
    return ` 
     ${Skill({
         skill,
         x,
         y: skillY,
         selectedStudent,
         skillBoxSize,
     })}
     ${isLastBox && Path({
       x: x + skillBoxSize / 2,
       y: skillBoxSize + skillY,
     })};
  `;
 });



const tree = Tree({ x: 0, y: 0});

const svg = `
<svg height="${Math.max(...treeHeights)}">

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
