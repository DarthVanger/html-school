import { Homework28 } from './homeworks/Homework28.js';
import { Homework29 } from './homeworks/Homework29.js';

export const Homework = (state) => {
  return `
    <h2>ДОМАШЕКА</h2>
    <div id="homework">
      ${Homework29(state)}
    </div>
  `;
};
