import { Homework38 } from './homeworks/Homework38.js';

export const CurrentHomework = (state) => {
  return `
    <div id="homework">
      ${Homework38(state)}
    </div>
  `;
};
