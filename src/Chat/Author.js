export const Author = ({ author }) => {
  const element = document.createElement('div'); 
  element.className = 'author';
  element.innerHTML = `
    Author: ${author}
  `;
  return element;
};
