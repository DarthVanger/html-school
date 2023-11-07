import { Avatar } from '../../Avatar.js';

export const StudentCard = (state) => {
  const element = document.createElement('article');

  element.innerHTML = `
    <h2>Studetn card</h2>
    ${state.student}
  `;

  return element;
};
