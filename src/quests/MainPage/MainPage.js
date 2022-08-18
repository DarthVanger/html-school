import { Levels } from './Levels/Levels.js';
import { Story } from './Story.js';
import { Topbar } from '../../Topbar.js';

const element = document.createElement('div');
element.id = 'main-page';
export const MainPage = (state) => {
  element.innerHTML = `
    ${Topbar({ backUrl: '/#/', surface: 'black' })}
    ${Story(state)}
  `;

  element.append(Levels(state));

  return element;
};
