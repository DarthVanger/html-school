import { BackButton } from './BackButton.js'
export const BottomBar = () => {
  const element = document.createElement('div');
  element.id = 'quests-bottom-bar';
  element.innerHTML = `
    ${BackButton()}
  `;

  return element;
}

