import { Homework28 } from './homeworks/Homework28.js';

export const Homework = (state) => {
  return `
    <h2>ДОМАШЕКА</h2>
    <div id="homework">
      ${Homework28(state)}
    </div>
  `;
};
