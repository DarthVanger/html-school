import { describeArc } from './arc.js';

const skillBoxSize = 120;
const width = skillBoxSize;
const height = skillBoxSize;
let treeHeights = [];

const students = [
  'johnny',
  'tony',
  'dimon',
];

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


let skills = {
  html: [
    [
      { text: '<h1>', level: { johnny : 3, tony: 2, dimon: 3, } },
      { text: '<p>', level: { johnny : 3, tony: 2, dimon: 3, }, },
      { text: '<img>', level: { johnny : 3, tony: 2, dimon: 3, }, },
      { text: '<br>', level: { johnny : 3, tony: 1, dimon: 3, } },
      { text: '<hr>', level: { johnny : 3, tony: 1, dimon: 1, } },
    ],
    [
      { text: '<a>', level: { johnny : 2, tony: 1, dimon: 3, }, },
      { text: '<video>', level: { johnny : 3, tony: 1, dimon: 1, }, },
    ],
  ],
  css: [
    [
      { text: 'h1, p', level: { johnny : 3, tony: 2, dimon: 2, }, },
      { text: 'color', level: { johnny : 3, tony: 2, dimon: 3, }, },
      { text: 'font\nsize', level: { johnny : 1, tony: 1, dimon: 1, }, },
      { text: 'font\nfamily', level: { johnny : 0, tony: 0, dimon: 0, } },
    ],
    [
      { text: 'padding', level: { johnny : 1, tony: 1, dimon: 1, } },
      { text: 'margin', level: { johnny : 1, tony: 1, dimon: 1, } },
      { text: 'border', level: { johnny : 1, tony: 1, dimon: 1, } },
      { text: 'position', level: { johnny : 0, tony: 0, dimon: 0, } },
    ],
  ],
  js: [
    [
      { text: 'on\nclick', level: { johnny: 2, tony: 0, dimon: 1, }, },
      { text: 'style', level: { johnny: 2, tony: 0, dimon: 0, }, },
      { text: 'inner\nHTML', level: { johnny : 2, tony: 0, dimon: 1, }, },
    ],
    [
      { text: 'var\niables', level: { johnny: 0, tony: 0, dimon: 0, }, },
      { text: 'func\ntions', level: { johnny: 1, tony: 0, dimon: 1, }, },
    ],
  ]
};


const points = {};
const levels = {};
for (let student of students) {
  points[student] = 0;
  levels[student] = 0;
}

for (let category in skills) {
  let categoryLevel = {};
  for (let student of students) {
    categoryLevel[student] = 0;
  }
  for (let branch of skills[category]) {
    for (let skill of branch) {
      for (let student of students) {
        categoryLevel[student] += skill.level[student];
      }
    }
  }
  skills[category].level = categoryLevel;
}

for (let student of students) {
  for (let category in skills) {
    points[student] += skills[category].level[student];
  }
}

for (let student of students) {
  //points[student] = Math.round(points[student] / 10);
  levels[student] = Math.floor(points[student] / 10);
}

const Skill = ({ skill, x, y }) => {
  const height = skillBoxSize;
  const width = skillBoxSize;

  const Text = ({ text, x, y }) =>  {
    const texts = skill.text.split('\n');
    const fontSize = 18;
    const lineHeight = fontSize * 2;
    const numLines = texts.length;
    const textHeight = fontSize * (numLines);
    const translateY = numLines < 2 ? 0 :
      - textHeight / 2;

    let html = `
      <g transform="translate(0, ${translateY})"
      >
    `;

    texts.forEach((text, idx) => {
      const textEncoded = text.replace('>', '&gt').replace('<', '&lt');

      html += `
      <text x=${x} y=${y + idx * lineHeight}
       text-anchor="middle"
       alignment-baseline="middle"
      >
        ${textEncoded}
      </text>`;
    });

    html += '</g>';

    html += Badge({
      x,
      y,
      level: skill.level,
    });

    return html;
  };


  return `
    <g class="skill}" width="${width}" height="${height}">
     <rect x="${x}" y="${y}" width="${skillBoxSize}" height="${skillBoxSize}"></rect>
      <image
        href="img/texture-100x100.jpg"
        height="${height}"
        width="${width}"
        x="${x}"
        y="${y}"
        class="level-${skill.level[selectedStudent]} ${selectedStudent}"
        data-level-tony=${skill.level.tony}
        data-level-johnny=${skill.level.johnny}
        data-level-dimon=${skill.level.dimon}
      />
     ${Text({
       x: x + width / 2,
       y: y + height / 2,
       text: skill.text,
     })}
    </g>
 `;
};

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

const Badge = ({x, y, level, badgeR}) => {
  if (!badgeR) badgeR = 25;
  const id = `${Math.random()}-badge-clip-${x}-${y}`;
  const height = badgeR * 2;
  const width = height;
  const size = width;
  
  return `
    <defs>
      <rect id="${id}" x="${x + size / 2}" y="${y + size / 2}" width="${size}" height="${size}" rx="50%"

      class="badge-rect"
      />
      <clipPath id="clipPath-${id}">
        <use xlink:href="#${id}"/>
      </clipPath>
    </defs>

    <use xlink:href="#${id}" />
    <image
      href="img/texture-100x100.jpg"
      x="${x + height / 2}"
      y="${y + height / 2}"
      width="${size}" height="${size}"
      clip-path="url(#clipPath-${id})"
      class="badge-img level-${level[selectedStudent]}"
    />
   <text x="${x + size + 2}" y="${y + size + 2}"
    text-anchor="middle"
    alignment-baseline="middle"
    data-level-tony=${level.tony}
    data-level-johnny=${level.johnny}
    data-level-dimon=${level.dimon}
    class="badge-text"
   >
     ${level[selectedStudent]}
   </text>
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
      href="img/johnny.jpg"
      transform="translate(${-size/2 }, ${-size/2})"
      x="${x}"
      y="${y}"
      width="${size}" height="${size}"
      clip-path="url(#clip)"
    />
    <image
      class="avatar avatar-tony hide"
      href="img/tony.jpg"
      transform="translate(${-size/2 }, ${-size/2})"
      x="${x}"
      y="${y}"
      width="${size}" height="${size}"
      clip-path="url(#clip)"
    />
    <image
      class="avatar avatar-dimon hide"
      href="img/dimon4ik-close.jpg"
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

document.body.addEventListener('click', () => {
  var audio = new Audio('audio/tristram.webm');
  audio.volume = 0.3;
  audio.play();
});
