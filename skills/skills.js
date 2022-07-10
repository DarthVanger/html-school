import { describeArc } from './arc.js';
import { Tree, treeWidth, treeHeight } from './Tree.js';
import { Skill } from './Skill.js';
import { Badge } from './Badge.js';
import { Avatar } from './Avatar.js';
import { SvgContainer } from './SvgContainer.js';

const skillBoxSize = 120;
const width = skillBoxSize;
const height = skillBoxSize;

export const Skills = (state) => {
  console.info('Skills');

  const tree = Tree(state);

  const svgContainer = SvgContainer({
    width: 1000,
    height: 1000,
    children: tree,
  });

  return svgContainer;
};
