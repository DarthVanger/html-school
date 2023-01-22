import { saveCatacombsState, getCatacombsState } from '../api.js';
import { BgImg } from './BgImg.js';
import { FireCircle } from './FireCircle.js';
import { levels } from './levels.js';
export const Level = ({ state, level, onComplete }) => {
  const el = document.createElement('article');
  el.className = 'level';

  const code = document.createElement('textarea');
  code.className = 'code';
  el.append(code);

  const getCode = () => el.querySelector('.code');

  setTimeout(async () => {
    try {
      const catacombsState = await getCatacombsState();
      console.log('cata state: ', catacombsState);
      getCode().value = catacombsState[state.student][level.id].code || '';
    } catch (e) {
      console.log('Failed to fetch catacombs state: ', e);
    }
    getCode().focus();

    getCode().addEventListener('keyup', (event) => {
      debouncedCodeCheck(level);
    });
    codeCheck(level);
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
    let testResults = Array(level.tests().length).fill(false);
    getLevelText()?.remove();
    const levelText = document.createElement('div');
    let f;

    if (code) {
      saveCatacombsState({
        student: state.student,
        code,
        levelId: level.id,
      });
    }

    levelText.className = 'level-text';

    el.append(levelText);

    const oshibke = (e) => {
      levelText.innerHTML += `<div class="oshibke">ошибке: ${e.message}</div>`;
    }

    try {
      eval(code || '');
      f = eval(`(${code || "''"})`);
    } catch (e) {
      oshibke(e);
    }

    try {
      f();
      levelText.innerHTML += `<div class="status-true">function ${level.id} is defined</div>`;
    } catch (e) {
      if (e.message.match(/f is not a function/)) {
        console.debug('Level code check: f is not a function!');
        levelText.innerHTML += `<div class="status-false">function ${level.id} is defined</div>`;
      } else {
        oshibke(e);
      }
      f = () => -666;
    }

    let i = 0;
    for (let test of level.tests(f)) {
      let testResult = false;
      try {
        testResult = test.test();
        testResults[i] = testResult;
      } catch (e) {
        oshibke(e);
      }
      levelText.innerHTML += `<div class="status-${testResult}">${test.name}</div>`;
      i++;
    }

    if (testResults.every(r => r)) {
      console.info('Level: all tests passed');
      onComplete();
    } else {
      console.debug('Level: Not all tests passed');
    }
  };

  renderTests('');

  el.innerHTML += '</div>';

  return el;
};

let curLevel = 1;
export const nextLevel = () => {
  //const shuffled = levels.sort( () => .5 - Math.random() );
  curLevel = (curLevel + 1) % levels.length;
  return Level(levels[curLevel]);
}


