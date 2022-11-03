import { Badge } from './Badge.js';
import { Skill } from './Skill.js';

const skillBoxSize = 120;
let treeHeights = [];
let treeWidth = 0;

const Path = ({x, y}) => `
   <path d="M${x} ${y} l ${0} ${skillBoxSize / 2}"></path>
 `;

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
        href="src/skills/img/rock.jpg"
        height="${height}"
        width="${width}"
        x="${x}"
        y="${y}"
        class="category-img category-level-${level}"
        data-level-tony=${level}
        data-level-johnny=${level}
        data-level-dimon=${level}
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
     ${!isCss && path2 || ''}
     ${isCss && path2Css || ''}
     ${path3}
   </g>
  `;
};

const SkillsLine = ({ skills, x, y, state }) => skills.map((skill, idx) => {
    const isLastBox = idx <= skills.length - 2;
    const skillY = idx * skillBoxSize * 3 / 2 + y;
    if (isLastBox) treeHeights.push(skillY + skillBoxSize * 3);
    return ` 
     ${Skill({
         skill,
         x,
         y: skillY,
         state,
         skillBoxSize,
     })}
     ${isLastBox && Path({
       x: x + skillBoxSize / 2,
       y: skillBoxSize + skillY,
     }) || ''};
  `;
 });

let treeHeight = 0;
export const Tree = (state) => {
  console.info('Tree: ', state);

  const {x=0, y=0, skills, levels, points, categoryLevels, student} = state;
  const htmlSkills = skills.html;
  const css = skills.css;
  const js = skills.js;

  const marginTop = 80;

  const htmlX = skillBoxSize + 20;
  const cssX = skillBoxSize + skillBoxSize * 2.65;
  const jsX = skillBoxSize + skillBoxSize * 7.5;

  treeWidth = jsX + skillBoxSize * 3.5; 

  let html = `${SkillsLineHeading({
    text: 'HTML',
    x: htmlX,
    y: marginTop,
    level: categoryLevels.html.level[student],
    state
  })}`;

  html += `${SkillsLineHeading({
    text: 'CSS',
    x: cssX + skillBoxSize,
    y: marginTop,
    level: categoryLevels.css.level[student],
    state
  })}`;

  html += `${SkillsLineHeading({
    text: 'JS',
    x: jsX + skillBoxSize,
    y: marginTop,
    level: categoryLevels.js.level[student],
    state,
  })}`;

  treeHeight += marginTop;

  const branchY = skillBoxSize * 3 / 2  + marginTop;

  htmlSkills.forEach((line, idx) => {
    const x = htmlX - skillBoxSize + idx * (skillBoxSize * 2);
    const y = branchY;
    html += SkillsLine({ skills: line, x, y, state });
  });

  css.forEach((line, idx) => {
    const x = cssX + idx * skillBoxSize * 2;
    let y = branchY;
    // space for avatar
    if (idx == 1) y += 150;
    html += SkillsLine({ skills: line, x, y, state });
  });

  js.forEach((line, idx) => {
    const x = jsX + idx * skillBoxSize * 2;
    const y = branchY;
    html += SkillsLine({ skills: line, x, y, state });
  });

  treeHeight = Math.max(...treeHeights);

  return html;
}

export { treeWidth, treeHeight };
