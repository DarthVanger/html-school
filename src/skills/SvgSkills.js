import { Tree } from './Tree.js';
import { SvgContainer } from './SvgContainer.js';
import { Students } from './Students.js';
import { BottomBar } from '../BottomBar.js';
import { Topbar } from '../Topbar.js';

export const SvgSkills = (props) => {
  console.log('SvgSkills, props: ', props);
  let tree = Tree(props);

  console.log('skills: ', props.skills);

  tree = tree.replaceAll(/data-[^\s]*/g, '');
  //tree = tree.replaceAll(/[&]lt;/g, '<');
  //tree = tree.replaceAll(/[&]gt;/g, '>');

  //const svg = document.createElement('svg');
  //svg.height = 1000;
  //svg.width = 1000;
  //svg.viewBox = "0 0 1000 1000";

  //svg.innerHTML = tree;

  //return svg;
  return `
    <svg height="1000" width="1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      ${tree}
    </svg>
  `;
};

