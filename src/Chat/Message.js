export const Message = ({ message }) => {
  const element = document.createElement('div'); 
  element.className = 'message';
  let parsedMessage = message.replace(/[!]\[[^\]]*\][(]([^)]*[.]mp4)[)]/, '<video controls src="$1" />');
  parsedMessage = parsedMessage.replace(/[!]\[[^\]]*\][(]([^)]*)[)]/, '<img src="$1" />');
  element.innerHTML = `${parsedMessage}`;
  return element;
};
