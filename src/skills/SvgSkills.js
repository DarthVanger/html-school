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
    <svg height="2000" width="2000" viewBox="-100 0 2000 2000" xmlns="http://www.w3.org/2000/svg">
      <style>

    /* HomeworkBadge.css */

    .homework-badge text {
      fill: black;
      stroke: black;
    }

    /* QuestBadge.css */

    .quest-badge-background {
      fill: #74c6fa;
    }

    .quest-badge-text-background {
      fill: #333;
      opacity: 0.7;
    }

    .quest-badge-text {
      fill: #eee!important;
      stroke: #eee!important;
    }
  

    /* skills.css */

    text {
      stroke: black;
      fill: black;
      letter-spacing: 3px;
      font-family: monospace;
      text-align: center;
      font-size: 18px;
    }

    path {
      stroke: #fbecab;
      stroke-width: 4px;
      fill: transparent;
    }

    rect {
      fill: pink;
    }

    g.skill {
      
    }

    #rect {
      opacity: 0;
    }

    [class*="level-"], .badge-img[class^="level-"] {
      opacity: 1;
      filter: invert(1) sepia(1) saturate(7) hue-rotate(356deg);
    }

    .level-1 {
      filter: invert(1) sepia(1) saturate(3) hue-rotate(320deg);
    }

     .level-2 {
      filter: invert(1) sepia(1) saturate(5) hue-rotate(322deg);
    }

    .level-3 {
      opacity: 1;
      filter: invert(1) sepia(1) saturate(7) hue-rotate(326deg);
    }

    .badge-rect {
      stroke-width: 4px;
      stroke: black;
    }

    .badge-img {
      opacity: 0.8;
    }

    .student-level image {
      filter: invert(1) sepia(1) saturate(5) hue-rotate(200deg);
    }

    .student-level .badge-text {
      fill: white;
      stroke: white;
      font-size: 2em;
      stroke: black;
      stroke-width: 1px;
      font-weight: bold;
    }

    .student-level-text {
      fill: white;
      font-size: 1.5em;
      font-weight: bold;
    }

    .student-level image {
      filter: invert(1) sepia(1) saturate(5) hue-rotate(200deg);
    }

    .student-level-path {
      fill: transparent;
      stroke: #83d3ff;
      stroke: white;
    }

    .exp-text {
      font-size: 0.8rem;
      fill: white;
      stroke: white;
      font-weight: normal;
      font-family: sans-serif;
    }

    .category-img, .category image {
      filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);
    }

    .category-img.category-level-0 {
      filter: none;
    }

    .category-text {
      stroke: black;
      fill: black;
      font-weight: bold;
      font-family: monospace;
      font-size: 2em;
    }

    #skills-page svg image.level-0 {
      filter: none;
    }

    .johnny, .tony {
      transition: all 1s ease-out;
    }

    @keyframes avatar {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    .avatar {
      border-radius: 50%;
      overflow: hidden;
      opacity: 0.5;
      transition: all 1s ease-out;
    }

    .avatar:not(.hide) {
      animation: avatar 5s infinite alternate linear;
    }

    .avatar.hide {
      opacity: 0;
    }

    circle.level {
      fill: black;
    }

      </style>

      ${tree}
    </svg>
  `;
};

