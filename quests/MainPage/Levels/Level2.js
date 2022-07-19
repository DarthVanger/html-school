import { Quest } from './Quest.js';
import { QuestList } from './QuestList.js';

export const Level2 = () => `
  <h2>Перемещение Корабля</h2>
  ${QuestList([
    Quest({
      imgSrc: 'img/flying.gif',
      id: 'flying',
      skills: ['on click', 'event'],
    }),
  ])}
`;
