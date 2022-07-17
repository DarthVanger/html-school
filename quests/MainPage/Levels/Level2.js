import { Quest } from './Quest.js';
import { QuestList } from './QuestList.js';

export const Level2 = () => `
  <h2>Level 2</h2>
  ${QuestList([
    Quest({
      imgSrc: 'img/alertXuy4ek.png',
      id: 'alertXuy4ek',
      skill: 'alert',
    }),
    Quest({
      imgSrc: 'img/flying.gif',
    }),
  ])}
`;
