import { Homework47 } from '../../Homework/homeworks/Homework47.js';

export const Novoe = () => {
  const element = document.createElement('div');
  element.id = 'novoe';
  
  element.innerHTML = `
    <h2 class="h2">Novoe</h2>

    ${Homework47()}
  `;

  return element;
};
