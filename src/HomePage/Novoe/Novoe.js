import { Homework43 } from '../../Homework/homeworks/Homework43.js';

export const Novoe = () => {
  const element = document.createElement('div');
  element.id = 'novoe';
  
  element.innerHTML = `
    <h2 class="h2">Novoe</h2>

    ${Homework43()}
  `;

  return element;
};
