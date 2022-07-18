import { getInnerText, encodeHTMLEntities } from './utils.js';
import { logQuestComplete } from './api.js';

const getEditor = () => document.querySelector('#editor > code');

const getTextContent = (editor) => {
  return editor.textContent;
};

const getButtonText = () => 'Закройся';

const getCode = () => getInnerText(getEditor());

export const Mentor = (quest) => {
  const { steps } = quest;
  
  const element = document.createElement('div');
  element.id = 'mentor';

  const state = {
    step: 0,
    isQuestCompleted: false,
  };

  const setState = (newState) => {
    console.log('setState: ', newState);
    state.step = newState.step;
    render();
  };

  const check = () => {
    const code = getCode();
    console.log('check()');

    console.log('steps: ', steps);

    let step = 0;
    for (let s of steps) {
      console.log('testing regexp: ', s.regexp);
      if (s.regexp.test(code)) {
        step++;
      }
    }

    console.log('check() step:', step);

    const isQuestCompleted = step === steps.length;
    if (isQuestCompleted) {
      logQuestComplete({
        id: 'testid',
        student: 'tonytest',
      });
    }

    setState({
      step,
      isQuestCompleted, 
    });

  };

  let checkTimeoutId;
  const debouncedCheck = () => {
    clearTimeout(checkTimeoutId);
    checkTimeoutId = setTimeout(check, 500);
  };

  setTimeout(() => {
    const code = getInnerText(getEditor());

    editor.addEventListener('keyup', debouncedCheck);
    check();
  });

  const code = getInnerText(getEditor());

  const generateStepsHTML = () => steps.map(
    ({ task, check, regexp }) => {
      const isCompleted = regexp.test(code);
      const icon = `
        <span class="icon">${isCompleted ? '✔': '❌'}</span>`;

      const className = isCompleted ? 'is-completed' : 'not-completed';

      return `
        <div class="${className}">${icon} ${check}</div>
      `;
    },
  ).join('');

  const getStepText = () => {
    let result = '';

    if (state.step === steps.length) {
      return '';
    }

    const task = steps[state.step].task;
    result = task;
    result = result.replaceAll('|c|', '<pre><code>');
    result = result.replaceAll('|ce|', '</code></pre>');
    console.log('result', result);
    return result;
  }

  const render = () => {
    console.log('render, state: ', state);
    const imgSrc = state.isQuestCompleted ?
      'img/napaleon-4est.png'
      : 'img/napaleon.png';

    element.innerHTML = `
      <div id="napaleon">
        <img src="${imgSrc}" />
        <div id="napaleon-message">
          ${state.isQuestCompleted && (
            'Задача выполнена! Поздравляю!'
          ) || ''}
          ${getStepText()}
        </div>
      </div>
      <div id="steps-progress">
        ${generateStepsHTML()}
      </div>
    `;
  };

  render();

  return element;
}
