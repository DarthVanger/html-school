import { Levels } from './Levels/Levels.js';
import { Story } from './Story.js';

const element = document.createElement('div');
element.id = 'main-page';
export const MainPage = (state) => {
  element.innerHTML = `
    ${Story(state)}
  `;

  element.append(Levels(state));

  return element;
};
