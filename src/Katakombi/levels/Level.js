import { BgImg } from './BgImg.js';
import { levels } from './levels.js';
export const Level = (level) => {
  const el = document.createElement('article');
  el.className = 'level';
  el.append(BgImg());

  console.log('level: ', level);
  for (let test of level.tests()) {
    console.log('test: ', test);
    el.innerHTML += `<div>${test.name}</div>`;
  }

  return el;
};

let curLevel = 0;
export const nextLevel = () => {
  const shuffled = levels.sort( () => .5 - Math.random() );
  curLevel = (curLevel + 1) % levels.length;
  return Level(shuffled[curLevel]);
}

