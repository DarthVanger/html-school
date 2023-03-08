import { Homework28 } from './homeworks/Homework28.js';
import { Homework29 } from './homeworks/Homework29.js';
import { Homework31 } from './homeworks/Homework31.js';
import { Homework32 } from './homeworks/Homework32.js';
import { Homework33 } from './homeworks/Homework33.js';
import { Homework34 } from './homeworks/Homework34.js';
import { Homework35 } from './homeworks/Homework35.js';
import { Homework36 } from './homeworks/Homework36.js';
import { Homework37 } from './homeworks/Homework37.js';
import { Homework38 } from './homeworks/Homework38.js';
import { Topbar } from '../Topbar.js';

export const Homework = (state) => {
  const element = document.createElement('div');
  element.id = 'homework';
  element.innerHTML = `
    <div id="homework">
      ${Topbar({ backUrl: '/#', surface: 'black' })}
      ${Homework38(state)}
      ${Homework37(state)}
      ${Homework36(state)}
      ${Homework35(state)}
      ${Homework34(state)}
      ${Homework33(state)}
      ${Homework32(state)}
      ${Homework31(state)}
      ${Homework29(state)}
      ${Homework28(state)}
    </div>
  `;

  return element;
};
