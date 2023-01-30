import { getCatacombsState } from './api.js';
import { KataRating } from './KataRating.js';

export const KataHome = ({ onStartBtnClick }) => {
  const element = document.createElement('div');
  element.id = 'kata-home';

  let catacombsState;

  element.innerHTML = `
    <section class="overlay" id="loading">
      ЗОГРУЗКА
    </section>
  `;

  setTimeout(async () => {
    try {
      catacombsState = await getCatacombsState();
    } catch (e) {
      console.error('Failed to fetch catacombs state: ', e);
    }

    render({ catacombsState });
  });


  const render = ({ catacombsState }) => {
    element.innerHTML = ``;

    element.append(KataRating({ catacombsState }));

    const startButton = document.createElement('button');
    startButton.id = 'start-button';
    startButton.innerHTML = 'Start';

    startButton.addEventListener('click', () => {
      startButton.remove();
      onStartBtnClick({ catacombsState });
    });

    element.append(startButton);
    
  }

  return element;
};
