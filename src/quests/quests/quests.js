import htmlTags from './htmlTags.js';
import css from './css.js';
import alertXuy4ek from './alertXuy4ek.js';
import flying from './flying.js';
import walls from './walls.js';
import walls2 from './walls2.js';
import walls3 from './walls3.js';
import plasma from './plasma.js';
import plasma2 from './plasma2.js';
import innerHTML from './innerHTML.js';
import functions from './functions.js';
import variables from './variables.js';
import functionParameters from './functionParameters.js';
import conditionals from './conditionals.js';
import velocity from './Velocity.js';
import htmlImg from './htmlImg.js';
import shipMotion from './shipMotion.js';
import keyboard from './keyboard.js';
import layers from './layers.js';
import whileLoop from './whileLoop.js';
import svg from './svg.js';
import createElement from './createElement.js';

const quests = {
  layers,
  keyboard,
  shipMotion,
  htmlImg,
  velocity,
  conditionals,
  css,
  htmlTags,
  functionParameters,
  variables,
  innerHTML,
  alertXuy4ek,
  flying,
  walls,
  walls2,
  walls3,
  plasma,
  plasma2,
  functions,
  whileLoop,
  svg,
  createElement,
};

export const getQuestSkills = (questId) => {
  const quest = quests[questId];
  return quest.skills;
};

export default quests;

