import { Avatar } from '../Avatar.js';

export const Author = ({ author }) => {
  const element = document.createElement('div'); 
  element.className = 'author';
  element.innerHTML = `
    ${Avatar({ student: author })}
  `;

  return element;
};
