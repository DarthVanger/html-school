import { Levels } from './Levels/Levels.js';
import { Story } from './Story.js';

const element = document.createElement('div');
element.id = 'main-page';
export const MainPage = () => {
  element.innerHTML = `
    ${Story()}
  `;

  element.append(Levels());

  return element;
};
