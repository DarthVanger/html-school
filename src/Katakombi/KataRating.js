import { levels } from './levels/levels.js';

export const getStudLevelNum = (studState) => {
  console.info('[Katakombi] student state', studState);
  if (!studState) return 0;
  const completed = Object.keys(studState).filter(x => studState[x].isComplete);
  return completed.length;
};

export const KataRating = ({ state, catacombsState }) => {
  const element = document.createElement('article');
  element.id = 'kata-rating';
  element.style.gridTemplateColumns = `repeat(${Object.keys(catacombsState).length + 1}, 1fr)`;

  const studLvlNum = getStudLevelNum(catacombsState[state.student]);

  let lvlIdx = 0;
  for (let level of levels) {
    const cell = document.createElement('div');
    cell.innerHTML = `№${lvlIdx}`
    element.append(cell);
    if (lvlIdx == studLvlNum) {
      cell.classList.add('next-lvl');
    }

    for (let student in catacombsState) {
      const ava = `
        <figure class="student student-ava">
          <img src="/img/${student}.jpg" />
        </figure>
      `;

      const isComplete = catacombsState[student] ? catacombsState[student][level.id]?.isComplete : false;

      if (isComplete && lvlIdx == studLvlNum - 1) {
        element.innerHTML += ava;
      } else if (isComplete) {
        element.innerHTML += `<div>.</div>`;
      } else {
        element.innerHTML += `<div>x</div>`;
      }

    }

    lvlIdx++;
  }

  return element;
}
