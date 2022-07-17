import { Quest } from './Quest.js';
import { QuestList } from './QuestList.js';

export const Level1 = () => `
  <h2>Level 1</h2>
  ${QuestList([
    Quest({
      imgSrc: 'img/alertXuy4ek.png',
      isCompleted: true,
      skills: ['&lt;script&gt;', 'alert'],
    }),
    Quest({
      imgSrc: 'img/flying.gif',
      skills: ['function', 'event'],
    }),
  ])}
`;
const lessons = [
  [
    {
      img: '<img src="img/alertXuy4ek.png" />',
      id: 'alertXuy4ek',
      title: 'Alert Xuy4ek',
    },
    {
      img: '<img src="img/innerHTML.png" />',
      id: 'innerHTML',
      title: 'innerHTML',
    },
    {
      img: '<img src="img/flying.gif" />',
      id: 'flying',
      title: 'Flying',
    },
    {
      img: '<img src="img/walls.gif" />',
      id: 'walls',
      title: 'Walls of Destiny',
    },
    {
      img: '<img src="img/walls2.gif" />',
      id: 'walls2',
      title: 'Walls Y'
    },
    {
      img: '<img src="img/walls3.gif" />',
      id: 'walls3',
      title: 'Tunnel of Fear',
    },
  ],
  [
    {
      img: '<img src="img/plasma.gif" />',
      id: 'plasma',
      title: 'Plasma Gun',
    },
    {
      img: '<img src="img/plasma2.gif" />',
      id: 'plasma2',
      title: 'Plasma Y',
    },
    {
      img: '<img src="img/plasma2.gif" />',
      id: 'svg',
      title: 'Scalable Vector Graphics',
    },
  ]
];
