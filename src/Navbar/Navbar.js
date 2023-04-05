export const Navbar = () => {
  const element = document.createElement('nav');
  element.id = 'navbar';

  let isMenuOpen = false;

  const menuIcon = document.createElement('div');
  menuIcon.id = 'menu-icon';

  menuIcon.innerHTML = `
   <label>
      <span></span>
      <span></span>
      <span></span>
    </label>
  `;

  const menu = document.createElement('div');
  menu.id = 'menu';

  menu.innerHTML = `
    <a href="/#/">Home</a>
    <a href="/#/chat">Chat</a>
    <a href="/#/study">Study</a>
    <a href="/#/materiali">Materiali</a>
    <a href="/#/online-log">Online Log</a>
  `;

  console.log('add eventl is');
  menuIcon.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    console.log('isMenuOpen: ', isMenuOpen);
    isMenuOpen && menu.classList.add('open');
    isMenuOpen && menuIcon.classList.add('open');
    !isMenuOpen && menu.classList.remove('open');
    !isMenuOpen && menuIcon.classList.remove('open');
  });

  element.append(menuIcon);
  element.append(menu);

  return element;
};
