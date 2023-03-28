export const Navbar = () => {
  const element = document.createElement('nav');
  element.id = 'navbar';

  element.innerHTML = `
    <a href="/#/">Home</a>
    <a href="/#/chat">Chat</a>
    <a href="/#/study">Study</a>
    <a href="/#/materiali">Materiali</a>
    <a href="/#/online-log">Online Log</a>
  `;

  return element;
};
