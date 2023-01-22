import { levels } from './levels/levels.js';

export const KataRating = ({ catacombsState }) => {
  const element = document.createElement('article');
  element.id = 'kata-rating';

  const Row = () => {
    const el = document.createElement('div');
    el.className = 'level-row';
    return el;
  }

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

  return element;
}
