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
  return `
   <rect x="${x}" y="${y}" width="${skillBoxSize}" height="${skillBoxSize}"></rect>
   <text x="${x + 10}" y="${y + 50}" font-size="20">
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

const skillsLine = (skills) => skills.map((skill, idx) => `
   ${Skill({
       text: skill.text,
       x: 100,
       y: idx * 200,
   })}
   ${Path({
     x: 150,
     y: 100 + idx * 200,
   })};
`);

const svg = `
<svg>
${skillsLine(skills)}
</svg>
`;

document.querySelector('section').innerHTML = svg;
