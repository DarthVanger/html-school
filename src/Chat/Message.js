export const Message = ({ message }) => {
  const element = document.createElement('div'); 
  element.className = 'message';
  element.innerHTML = `
    Message: ${message}
  `;
  return element;
};
