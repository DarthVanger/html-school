export const Message = ({ message }) => {
  const element = document.createElement('div'); 
  element.className = 'message';
  let parsedMessage = message.replace(/[!]\[[^\]]*\][(]([^)]*)[)]/, '<img src="$1" />');
  element.innerHTML = `${parsedMessage}`;
  return element;
};
