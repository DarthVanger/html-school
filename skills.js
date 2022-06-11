const width = 200;
const height = 200;
const padding = 50;

const avatar = ({ x, href }) => `
<image href="${href}" height="${height}" width="${width}" x="${x}" />`;

const avatars = `
  <g>
       ${avatar({ x: padding + 0, href: "img/kertis.jpg" })}
       ${avatar({ x: 2 * padding + 200, href: "img/johnny.jpg" })}
       ${avatar({ x: 3 * padding + 400, href: "img/tony.jpg" })}
       ${avatar({ x: 4 * padding + 600, href: "img/dimon4ik.jpg" })}
  </g>`;

const skillBoxSize = 100;

const Skill = ({ text, x, y }) => {
  const height = skillBoxSize;
  const width = skillBoxSize;
  return `
   <rect x="${x}" y="${y}" width="${skillBoxSize}" height="${skillBoxSize}"></rect>
    <image href="img/texture-100x100.jpg" height="${height}" width="${width}" x="${x}" y="${y}" />
   <text x="${x + 10}" y="${y + 50}" font-size="20" >
     ${text.replace('>', '&gt').replace('<', '&lt')}
    </text>
 `;
};

const skills = [
  { text: '<h1>' },
  { text: '<p>' },
  { text: '<img>' },
  { text: '<a>' },
  { text: '<br>' },
];

const Path = ({x, y}) => `
   <path d="M${x} ${y} l ${0} ${skillBoxSize}"></path>
 `;


const lineLength = 150;
const skillsLine = ({ skills, x, y }) =>skills.map((skill, idx) => {
    const skillY = idx * lineLength + y;
    return ` 
     ${Skill({
         text: skill.text,
         x,
         y: skillY,
     })}
     ${Path({
       x: x + 50,
       y: 100 + skillY,
     })};
  `;
 });

const skillsLineHeading = ({ text, x, y }) => `
  <rect x="${x}" y="${y}" width="${skillBoxSize}" height="${skillBoxSize}"></rect>
  <text x=${x + 25} y=${y + 50}>${text}</text>
`;

const svg = `
<svg>
${skillsLineHeading({ text: 'HTML', x: 50, y: 20})}

${skillsLine({ skills, x: 50, y: 150 })}
</svg>
`;

document.querySelector('section').innerHTML = svg;
