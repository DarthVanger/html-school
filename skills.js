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

const Skill = ({ skill, x, y }) => {
  const height = skillBoxSize;
  const width = skillBoxSize;
  return `
    <g class="skill}" width="${width}" height="${height}">
     <rect x="${x}" y="${y}" width="${skillBoxSize}" height="${skillBoxSize}"></rect>
      <image
        href="img/texture-100x100.jpg"
        height="${height}"
        width="${width}"
        x="${x}"
        y="${y}"
        class="level-${skill.level}"
      />
     <text x="${x + width / 2}" y="${y + height / 2}"
       text-anchor="middle"
       alignment-baseline="middle"
     >
       ${skill.text.replace('>', '&gt').replace('<', '&lt')}
      </text>
    </g>
 `;
};

const skills = [
  { text: '<h1>', level: 3, },
  { text: '<p>', level: 3, },
  { text: '<img>', level: 1, },
  { text: '<br>', level: 2 },
  { text: '<a>', level: 0 },
];

const Path = ({x, y}) => `
   <path d="M${x} ${y} l ${0} ${skillBoxSize}"></path>
 `;


const lineLength = 150;
const skillsLine = ({ skills, x, y }) =>skills.map((skill, idx) => {
    const isLastBox = idx <= skills.length - 2;
    const skillY = idx * lineLength + y;
    return ` 
     ${Skill({
         skill,
         x,
         y: skillY,
     })}
     ${isLastBox && Path({
       x: x + 50,
       y: 100 + skillY,
     })};
  `;
 });

const skillsLineHeading = ({ text, x, y }) => {
  const width = skillBoxSize;
  const height = skillBoxSize;

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
  `;
}

const svg = `
<svg>
${skillsLineHeading({ text: 'HTML', x: 50, y: 20})}

${skillsLine({ skills, x: 50, y: 150 })}
</svg>
`;

document.querySelector('section').innerHTML = svg;
