import { getCatacombsState } from './api.js';
import { KataRating } from './KataRating.js';

export const getStudLevelNum = (studState) => {
  console.info('[Katakombi] student state', studState);
  if (!studState) return 0;
  const completed = Object.keys(studState).filter(x => studState[x].isComplete);
  return completed.length;
};

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

    element.append(KataRating({ catacombsState }));

    const startButton = document.createElement('div');
    startButton.id = 'start-button';
    startButton.innerHTML = `/7O4ATU 3ABDAHH9| №${getStudLevelNum(catacombsState[state.student])}`;

    startButton.addEventListener('click', () => {
      startButton.remove();
      onStartBtnClick({ catacombsState });
    });

    element.append(startButton);
    
  }

  return element;
};
