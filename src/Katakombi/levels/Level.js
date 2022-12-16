import { saveCatacombsState } from '../api.js';
import { BgImg } from './BgImg.js';
import { FireCircle } from './FireCircle.js';
import { levels } from './levels.js';
export const Level = ({ state, level }) => {
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
    let testResults = Array(level.tests().length).fill(false);
    getLevelText()?.remove();
    const levelText = document.createElement('div');
    levelText.className = 'level-text';

    let f;

    const oshibke = (e) => {
      levelText.innerHTML += `<div class="oshibke">ошибке: ${e.message}</div>`;
    }

    try {
      f = eval(`(${code || "''"})`);
    } catch (e) {
      oshibke(e);
      f = () => -666;
    }

    try {
      f();
      levelText.innerHTML += `<div class="status-true">function ${level.id} is defined</div>`;
    } catch (e) {
      if (e.message.match(/f is not a function/)) {
        console.log('f is mnot a function!');
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

    el.append(levelText);

    console.log('test results', testResults);
    if (testResults.every(r => r)) {
      console.log('all tests passed');
      showArrowForward();
    } else {
      console.log('not all tests passed');
    }

    if (code) {
      saveCatacombsState({
        student: state.student,
        code,
        levelId: level.id,
      });
    }
  };

  function saveState() {
  }

  function showArrowForward() {
  }

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


