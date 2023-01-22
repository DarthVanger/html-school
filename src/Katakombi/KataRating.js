import { saveCatacombsState, getCatacombsState } from './api.js';
import { levels } from './levels/levels.js';

export const KataRating = () => {

  setTimeout(async () => {
    let catacombsState;
    try {
      catacombsState = await getCatacombsState();
    } catch (e) {
      console.log('Failed to fetch catacombs state: ', e);
    }

    render({ catacombsState })
  });

  const Row = () => {
    const el = document.createElement('div');
    el.className = 'level-row';
    return el;
  }


  function render({ catacombsState }) {
    for (let level of levels) {
      element.innerHTML += `<div>${level.id}</div>`;
      //const row = Row();
      //element.append(row);

      for (let student in catacombsState) {
        const ava = `
          <figure class="student student-ava">
            <img src="/img/${student}.jpg" />
          </figure>
        `;

        const completionDate = catacombsState[student] ? catacombsState[student][level.id] : null;

        if (completionDate) {
          element.innerHTML += ava;
        } else {
          element.innerHTML += `<div>xuy</div>`;
        }

      }
    }
  };

  const element = document.createElement('div');
  element.id = 'kata-rating';
  return element;
}
