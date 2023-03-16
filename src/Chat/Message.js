export const Message = ({ message }) => {
  const element = document.createElement('div'); 
  element.className = 'message';
  element.innerHTML = `${message}`;
  return element;
};
