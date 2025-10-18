export const Navbar = () => {
  const element = document.createElement('nav');
  element.id = 'navbar';

  let isMenuOpen = false;

  const menuIcon = document.createElement('div');
  menuIcon.id = 'menu-icon';

  menuIcon.innerHTML = `
    <input type="checkbox" id="navi-toggle" class="checkbox" />
    <label for="navi-toggle" class="button">
      <span class="icon">&nbsp;</span>
    </label>
    <div class="background">&nbsp;</div>
  `;

  const menu = document.createElement('div');
  menu.id = 'menu';

  menu.innerHTML = `
    <a href="/#/">Home</a>
    <div class="group">
      <a href="/#/study" class="group-header">Study</a>
      <a href="/#/lessons">Уроке</a>
      <a href="/#/quests">Зоданея</a>
      <a href="/#/skills">Древо Умений</a>
      <a href="/#/exam">Єкзамені</a>
      <a href="/#/katakombi">Катакомбі</a>
      <a href="/#/vangers">Вангеры</a>
    </div>
    <div class="group">
      <a href="/#/materiali" class="group-header">Materiali</a>
      <a href="https://docs.google.com/document/d/1J89zb6vTpfljXmxV2cEJx522XhNt-hmU/edit#" target="_blank">Словарек</a>
      <a href="/#/coursework">Курсачи</a>
      <a href="/#/resume">Резюме</a>
    </div>
  `;

  menuIcon.addEventListener('click', (e) => {
    if (e.target.tagName == "LABEL") return;
    isMenuOpen = !isMenuOpen;

    isMenuOpen && menu.classList.add('open');
    isMenuOpen && menuIcon.classList.add('open');
    !isMenuOpen && menu.classList.remove('open');
    !isMenuOpen && menuIcon.classList.remove('open');
  });

  element.append(menuIcon);
  element.append(menu);

  return element;
};
