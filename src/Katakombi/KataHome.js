import { KataRating } from './KataRating.js';

export const KataHome = ({ onStartBtnClick, catacombsState }) => {
  const element = document.createElement('div');
  element.id = 'kata-home';

  const handleStartBtnClick = () => {
    startButton.remove();
    onStartBtnClick();
  }

  element.append(KataRating({ catacombsState }));

  const startButton = document.createElement('button');
  startButton.id = 'start-button';
  startButton.innerHTML = 'Start';
  startButton.addEventListener('click', handleStartBtnClick);

  element.append(startButton);



  return element;
};
