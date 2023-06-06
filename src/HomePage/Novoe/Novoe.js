import { Homework49 } from '../../Homework/homeworks/Homework49.js';

export const Novoe = () => {
  const element = document.createElement('div');
  element.id = 'novoe';
  
  element.innerHTML = `
    <h2 class="h2">Novoe</h2>

    ${Homework49()}
  `;

  return element;
};
