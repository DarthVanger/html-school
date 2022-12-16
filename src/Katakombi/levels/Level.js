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
    console.log('code check. code:', code);

    renderTests(code);
  };

  const getLevelText = () => el.querySelector('.level-text');

  const renderTests = (code) => {
    getLevelText()?.remove();
    const levelText = document.createElement('div');
    levelText.className = 'level-text';

    let f;
    console.log('code: ', `(${code || "''"})`);

    const oshibke = (e) => {
      levelText.innerHTML += `<div class="oshibke">${e.message}</div>`;
    }

    try {
      f = eval(`(${code || "''"})`);
    } catch (e) {
      oshibke(e);
      f = () => -666;
    }

    try {
      f();
    } catch (e) {
      if (e.message.match(/f is not a function/)) {
        console.log('f is mnot a function!');
        levelText.innerHTML += `<div class="status-false">function is defined</div>`;
      } else {
        oshibke(e);
      }
      f = () => -666;
    }

    for (let test of level.tests(f)) {
      let testResult = false;
      try {
        testResult = test.test();
      } catch (e) {
        oshibke(e);
      }
      levelText.innerHTML += `<div class="status-${testResult}">${test.name}</div>`;
      console.log('opendo!', levelText.innerHTML);
    }

    el.append(levelText);
  };

  renderTests('');

  el.innerHTML += '</div>';

  return el;
};

let curLevel = 0;
export const nextLevel = () => {
  const shuffled = levels.sort( () => .5 - Math.random() );
  curLevel = (curLevel + 1) % levels.length;
  return Level(shuffled[curLevel]);
}


