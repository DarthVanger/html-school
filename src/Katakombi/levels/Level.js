import { saveCatacombsState, getCatacombsState } from '../api.js';
import { BgImg } from './BgImg.js';
import { FireCircle } from './FireCircle.js';
import { levels } from './levels.js';
export const Level = ({ state, level, onComplete }) => {
  const el = document.createElement('article');
  el.className = 'level';

  const code = document.createElement('textarea');
  code.spellcheck = false;
  code.className = 'code fade-in';
  el.append(code);

  const getCode = () => el.querySelector('.code');

  let levelText;

  setTimeout(async () => {
    try {
      const catacombsState = await getCatacombsState();
      console.log('cata state: ', catacombsState);
      getCode().value = catacombsState[state.student][level.id].code || '';
    } catch (e) {
      console.log('Failed to fetch catacombs state: ', e);
    }

    getCode().addEventListener('keyup', (event) => {
      debouncedCodeCheck(level);
    });
    codeCheck(level);

    setTimeout(() => {
      getCode().focus();
    }, 3000);
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
    levelText = document.createElement('div');
    let f;
    levelText.className = 'level-text';

    el.append(levelText);

    const oshibke = (e) => {
      levelText.innerHTML += `<div class="oshibke">ERROR: ${e.message}</div>`;
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

    let isTaskComplete;
    if (testResults.every(r => r)) {
      console.info('Level: all tests passed');
      isTaskComplete = true;
      onComplete();
    } else {
      isTaskComplete = false;
      console.debug('Level: Not all tests passed');
    }

    if (code) {
      saveCatacombsState({
        student: state.student,
        code,
        levelId: level.id,
        isComplete: isTaskComplete,
      });
    }

  };

  renderTests('');

  el.innerHTML += '</div>';

  el.innerHTML +=`<p class="kata-hint">Press H to hide the task</p> `;

  let isTaskShown = true;
  document.addEventListener('keydown', (e) => {
    if (e.key == 'h' || e.key == 'H') {
      if (isTaskShown) {
        levelText.style.display = 'none'; 
        isTaskShown = false;
        document.querySelector('.kata-hint').innerHTML = `Press H to show the task`;

      } else {
        levelText.style.display = 'block'; 
        isTaskShown = true;
        document.querySelector('.kata-hint').innerHTML = `Press H to hide the task`;
      }
    }
  });

  return el;
};

let curLevel = 1;
export const nextLevel = () => {
  //const shuffled = levels.sort( () => .5 - Math.random() );
  curLevel = (curLevel + 1) % levels.length;
  return Level(levels[curLevel]);
}


