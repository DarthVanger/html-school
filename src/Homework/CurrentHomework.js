import { Homework39 } from './homeworks/Homework39.js';

export const CurrentHomework = (state) => {
  return `
    <div id="homework">
      ${Homework39(state)}
    </div>
  `;
};
