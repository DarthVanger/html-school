export const Date = ({ date }) => {
  const element = document.createElement('span');
  element.className = 'date';
  element.innerHTML= `
    Date: ${date}
  `;
  return element;
};
