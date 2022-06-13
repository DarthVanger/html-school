const skillBoxSize = 120;
const width = skillBoxSize;
const height = skillBoxSize;
let treeHeights = [];

const students = [
  'johnny',
  'tony',
  'dimon',
];

let studentIdx = 0;
let student = 'johnny';

document.body.addEventListener('click', () => {
  let prevStudent = student;
  studentIdx++;
  if (studentIdx > students.length) studentIdx = 0;

  student = students[studentIdx];
  document.querySelectorAll('[class^=level-]').forEach(el => {
    const prevLevel = el.getAttribute(`data-level-${prevStudent}`);
    const level = el.getAttribute(`data-level-${student}`);
    el.classList.remove(`level-${prevLevel}`);
    el.classList.remove(`${prevStudent}`);
    el.classList.add(`level-${level}`);
    el.classList.add(`${student}`);
  });

  document.querySelector(`.avatar-${prevStudent}`).classList.add('hide');
  document.querySelector(`.avatar-${student}`).classList.remove('hide');
});

   //= `img/${student}.jpg`;

const skills = {
  html: [
    [
      { text: '<h1>', level: { johnny : 3, tony: 2, dimon: 3, } },
      { text: '<p>', level: { johnny : 3, tony: 2, dimon: 3, }, },
      { text: '<img>', level: { johnny : 3, tony: 2, dimon: 3, }, },
      { text: '<br>', level: { johnny : 3, tony: 2, dimon: 3, } },
      { text: '<hr>', level: { johnny : 3, tony: 2, dimon: 1, } },
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
      { text: 'on\nclick', level: { johnny : 2, tony: 0, dimon: 1, }, },
      { text: 'style', level: { johnny : 2, tony: 0, dimon: 0, }, },
      { text: 'inner\nHTML', level: 1, },
    ],
    [
      { text: 'var\niables', level: { johnny : 0, tony: 0, dimon: 0, }, },
      { text: 'func\ntions', level: { johnny : 1, tony: 0, dimon: 1, }, },
    ],
  ]
};



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
      console.log('text', text);
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
        class="level-${skill.level[student]} ${student}"
        data-level-tony=${skill.level.tony}
        data-level-johnny=${skill.level.johnny}
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

  const marginTop = 50;

  const htmlX = skillBoxSize + skillBoxSize / 2;
  const cssX = skillBoxSize + skillBoxSize * 3;
  const jsX = skillBoxSize + skillBoxSize * 7;
;

  let html = `${SkillsLineHeading({
    text: 'HTML',
    x: htmlX,
    y: marginTop,
  })}`;

  html += `${SkillsLineHeading({
    text: 'CSS',
    x: cssX + skillBoxSize,
    y: marginTop,
  })}`;

  html += `${SkillsLineHeading({
    text: 'JS',
    x: jsX + skillBoxSize,
    y: marginTop,
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

const SkillsLineHeading = ({ text, x, y }) => {
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
    <image
      href="img/rock.jpg"
      height="${height}"
      width="${width}"
      x="${x}"
      y="${y}"
    />
   <text x="${x + width / 2}" y="${y + height / 2}"
     text-anchor="middle"
     alignment-baseline="middle"
   >
     ${text}
   </text>
   ${path1}
   ${!isCss && path2}
   ${isCss && path2Css}
   ${path3}
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


const avatar = () => {
  const size = 270;
  const x = '50%';
  const y = 220;

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
  `;
};

const tree = Tree({ x: 0, y: 0});

console.log('treeHeights: ', treeHeights);

const svg = `
<svg height="${Math.max(...treeHeights)}">

${avatar()}

${tree}

</svg>

`;

document.querySelector('section').innerHTML = svg;
