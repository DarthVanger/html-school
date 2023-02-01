import { getCatacombsState } from './api.js';
import { KataRating, getStudLevelNum } from './KataRating.js';
import { fadeOut } from './fade.js';

export const KataHome = ({ state, onStartBtnClick }) => {
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

    element.append(KataRating({ state, catacombsState }));

    const startButton = document.createElement('div');
    startButton.id = 'start-button';
    startButton.innerHTML = `/7O4ATU 3ABDAHH9| №${getStudLevelNum(catacombsState[state.student])}`;

    startButton.addEventListener('click', () => {
      fadeOut(startButton)
      onStartBtnClick({ catacombsState });
    });

    element.append(startButton);
    
  }

  return element;
};
