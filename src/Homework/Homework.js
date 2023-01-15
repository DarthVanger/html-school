import { Homework28 } from './homeworks/Homework28.js';
import { Homework29 } from './homeworks/Homework29.js';
import { Homework31 } from './homeworks/Homework31.js';

export const Homework = (state) => {
  return `
    <div id="homework">
      ${Homework31(state)}
    </div>
  `;
};
