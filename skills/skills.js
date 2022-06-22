import { describeArc } from './arc.js';
import { skills, students, levels, points } from './Tree.js';
import { Skill } from './Skill.js';
import { Badge } from './Badge.js';

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

const ProgressArc = ({x, y, r, points}) => {
  const levelProgress = points[selectedStudent] % 10 / 10;
  const angle = 360 * levelProgress;

  return `
    <path
      d="${describeArc(x, y, r, 0, angle)}"
      class="student-level-path progress-arc"
      data-x="${x}"
      data-y="${y}"
      data-r="${r}"
    />
  `;
}

const StudentLevelBadge = ({text, x, y, level}) => {
  const badgeR = 30;
  const height = badgeR * 2;
  const width = height;
  const size = width;

  const levelProgress = points[selectedStudent] % 10 / 10;
  const angle = 1 * Math.PI * levelProgress;

  return `
    <g class="student-level">
     ${Badge({
       x: x - size,
       y: y - size,
       level,
       badgeR: 30,
       selectedStudent,
     })};
      <circle cx="${x}" cy="${y}" r="${badgeR}" stroke="black" stroke-width="10" fill="transparent" />
     ${ProgressArc({
       x,
       y,
       r: badgeR,
       points,
     })}
      <text
          x="${x}" y="${y + size - 10}"
          text-anchor="middle"
          alignment-baseline="middle"
          class="student-level-text"
        >
          Level
     </text>
      <text
          x="${x}" y="${y + size + 8}"
          text-anchor="middle"
          alignment-baseline="middle"
          class="exp-text"
        >
          Exp: ${points[selectedStudent]}
     </text>
   </g>
 `;
};


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


const avatar = ({ level, points }) => {
  const size = 270;
  const screenWidth = window.screen.width;
  const x = screenWidth / 2;
  const y = 220;

  const levelProgress = points[selectedStudent] % 10 / 10;
  const angle = 2 * Math.PI * levelProgress;

  return `
  <defs>
    <rect id="rect" x="${x}" y="${y}" width="${size}" height="${size}" rx="50%"

    />
    <clipPath id="clip">
      <use xlink:href="#rect"/>
    </clipPath>
  </defs>

    <use xlink:href="#rect" stroke-width="2" stroke="black"/>
    <image
      class="avatar avatar-johnny"
      href="../img/johnny.jpg"
      transform="translate(${-size/2 }, ${-size/2})"
      x="${x}"
      y="${y}"
      width="${size}" height="${size}"
      clip-path="url(#clip)"
    />
    <image
      class="avatar avatar-tony hide"
      href="../img/tony.jpg"
      transform="translate(${-size/2 }, ${-size/2})"
      x="${x}"
      y="${y}"
      width="${size}" height="${size}"
      clip-path="url(#clip)"
    />
    <image
      class="avatar avatar-dimon hide"
      href="../img/dimon4ik-close.jpg"
      transform="translate(${-size/2 }, ${-size/2})"
      x="${x}"
      y="${y}"
      width="${size}" height="${size}"
      clip-path="url(#clip)"
    />
    <circle stroke-width="2px" stroke="black" fill="transparent" cx="${x}" cy="${y}" r="${size / 2}" />
    ${StudentLevelBadge({
      x: x,
      y: y + 50,
      level: levels,
    })}
  `;
};

const tree = Tree({ x: 0, y: 0});

const svg = `
<svg height="${Math.max(...treeHeights)}">

${avatar({ level: levels, points, })}

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
