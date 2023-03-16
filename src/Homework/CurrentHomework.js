import { Homework39 } from './homeworks/Homework38.js';

export const CurrentHomework = (state) => {
  return `
    <div id="homework">
      ${Homework39(state)}
    </div>
  `;
};
