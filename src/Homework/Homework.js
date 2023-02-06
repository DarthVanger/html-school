import { Homework28 } from './homeworks/Homework28.js';
import { Homework29 } from './homeworks/Homework29.js';
import { Homework31 } from './homeworks/Homework31.js';
import { Homework32 } from './homeworks/Homework32.js';
import { Homework33 } from './homeworks/Homework33.js';
import { Homework34 } from './homeworks/Homework34.js';

export const Homework = (state) => {
  return `
    <div id="homework">
      ${Homework34(state)}
    </div>
  `;
};
