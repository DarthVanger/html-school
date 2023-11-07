import { Homework51 } from '../../Homework/homeworks/Homework51.js';

export const Novoe = () => {
  const element = document.createElement('div');
  element.id = 'novoe';
  
  element.innerHTML = `
    <h2 class="h2">Novoe</h2>

    ${Homework51()}
  `;

  return element;
};
