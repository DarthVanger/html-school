import { BgImg } from './BgImg.js';
import { FireCircle } from './FireCircle.js';
import { levels } from './levels.js';
export const Level = (level) => {
  const el = document.createElement('article');
  el.className = 'level';
  el.append(BgImg());

  const code = document.createElement('textarea');
  code.className = 'code';
  el.append(code);

  const getCode = () => el.querySelector('.code');

  setTimeout(() => {
    getCode().focus();

      console.log('add ev lis');
    getCode().addEventListener('keyup', (event) => {
      debouncedCodeCheck(level);
    });
  });

  let debounceTimeoutId;
  const debouncedCodeCheck = (level) => {
    if (debounceTimeoutId) clearTimeout(debounceTimeoutId);
    debounceTimeoutId = setTimeout(() => codeCheck(level), 1000);
  };

  console.log('level: ', level);

  const codeCheck = (level) => {
    const code = getCode(0).value;
    console.log('code check. leveL;', level);
    console.log('code check. code:', code);
    const f = eval(code);
    console.log('f: ', f);
  };

  const levelText = document.createElement('div');
  levelText.className = 'level-text';
  el.append(levelText);

  for (let test of level.tests()) {
    levelText.innerHTML += `<div>${test.name}</div>`;
  }

  el.innerHTML += '</div>';

  return el;
};

let curLevel = 0;
export const nextLevel = () => {
  const shuffled = levels.sort( () => .5 - Math.random() );
  curLevel = (curLevel + 1) % levels.length;
  return Level(shuffled[curLevel]);
}


