const width = 200;
const height = 200;
const padding = 50;

//const avatar = ({ x, href }) => `
//<image href="${href}" height="${height}" width="${width}" x="${x}" />`;
//
//const avatars = `
//  <g>
//       ${avatar({ x: padding + 0, href: "img/kertis.jpg" })}
//       ${avatar({ x: 2 * padding + 200, href: "img/johnny.jpg" })}
//       ${avatar({ x: 3 * padding + 400, href: "img/tony.jpg" })}
//       ${avatar({ x: 4 * padding + 600, href: "img/dimon4ik.jpg" })}
//  </g>`;

const skillBoxSize = 100;

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
        class="level-${skill.level}"
      />
     ${Text({
       x: x + width / 2,
       y: y + height / 2,
       text: skill.text,
     })}
    </g>
 `;
};

const skills = {
  html: [
    [
      { text: '<h1>', level: 3, },
      { text: '<p>', level: 3, },
      { text: '<img>', level: 1, },
      { text: '<br>', level: 2 },
      { text: '<hr>', level: 1 },
    ],
    [
      { text: '<a>', level: 1, },
      { text: '<video>', level: 2, },
    ],
  ],
  css: [
    [
      { text: 'h1, p', level: 3, },
      { text: 'color', level: 3, },
      { text: 'font\nsize', level: 2, },
    ],
    [
      { text: 'padding', level: 1 },
      { text: 'margin', level: 1 },
      { text: 'border', level: 1 },
    ],
  ],
  js: [
    [
      { text: 'on click', level: 2, },
      { text: 'style', level: 1, },
      { text: 'innerHTML', level: 1, },
    ],
    [
      { text: 'variables', level: 0, },
      { text: 'functions', level: 0, },
    ],
  ]
};

const pathWidth = 10;
const Path = ({x, y}) => `
   <path d="M${x} ${y} l ${0} ${skillBoxSize}"></path>
 `;

const lineLength = 150;
const tree = ({x , y}) => {
  const htmlSkills = skills.html;
  const css = skills.css;
  const js = skills.js;
  let html = `${skillsLineHeading({
    text: 'HTML',
    x: 200,
    y: 50,
  })}`;

  const cssX = 450;
  const jsX = 1050;

  htmlSkills.forEach((line, idx) => {
    const x = 100 + idx * 200;
    const y = 200;
    html += skillsLine({ skills: line, x, y, });
  });

  html += `${skillsLineHeading({
    text: 'CSS',
    x: cssX + 100,
    y: 50,
  })}`;

  html += `${skillsLineHeading({
    text: 'JS',
    x: jsX + 100,
    y: 50,
  })}`;

  css.forEach((line, idx) => {
    const x = cssX + idx * 200;
    const y = 200;
    html += skillsLine({ skills: line, x, y, });
  });

  js.forEach((line, idx) => {
    const x = jsX + idx * 200;
    const y = 200;
    html += skillsLine({ skills: line, x, y, });
  });

  return html;
}

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
   ${path2}
   ${path3}
  `;
}

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
      class="avatar"
      href="img/johnny.jpg"
      transform="translate(${-size/2 + 50}, ${-size/2})"
      x="${x}"
      y="${y}"
      width="${size}" height="${size}"
      clip-path="url(#clip)"
    />
  `;
};

const svg = `
<svg>

${avatar()}

${tree({ x: 0, y: 0})}

</svg>

`;

document.querySelector('section').innerHTML = svg;
