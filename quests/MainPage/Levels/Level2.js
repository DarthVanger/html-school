import { Quest } from './Quest.js';
import { QuestList } from './QuestList.js';

export const Level2 = () => `
  ${QuestList([
    Quest({
      imgSrc: 'img/alertXuy4ek.png',
    }),
    Quest({
      imgSrc: 'img/flying.gif',
    }),
  ])}
`;
