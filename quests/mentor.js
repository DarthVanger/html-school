import { getInnerText, encodeHTMLEntities } from './utils.js';
import { logQuestComplete } from './api.js';
import { getStudent } from '../session.js';

const getEditor = () => document.querySelector('#editor > code');

const getTextContent = (editor) => {
  return editor.textContent;
};

const getCode = () => getInnerText(getEditor());

const parseCode = str => {
  let result = str;
  result = result.replaceAll('|c|', '<pre><code>');
  result = result.replaceAll('|ce|', '</code></pre>');
  return result;
}


const MentorMessage = ({ state, quest }) => `
  ${state.isQuestCompleted && Congrats({ quest }) || ''}
  ${getStepText({ state, quest })}
`;
 
const getStepText = ({ state, quest }) => {
  if (state.step === quest.steps.length) {
    return '';
  }

  const task = quest.steps[state.step].task;
  return parseCode(task);
}

const Congrats = ({ quest }) => `
  <div>
    <span>Принято</span>
    <span class="icon">✔</span>
    Прокачаны скилы:
  </div>
  <div class="achievements">
    ${quest?.skills?.map(skill => `
      <div class="achievement">
        <img src="img/medal.png" />
        ${skill}
      </div>
    `).join('')}
  </div>
`;

export const Mentor = ({ quest, addCodeRunListener }) => {
  const { steps } = quest;
  
  const element = document.createElement('div');
  element.id = 'mentor';
  const getElement = () => document.querySelector('#mentor');

  const state = {
    step: 0,
    isQuestCompleted: false,
  };

  const setState = (newState) => {
    state.step = newState.step;
    state.isQuestCompleted = newState.isQuestCompleted;
    update();
  };

  const check = () => {
    const code = getCode();

    let step = 0;
    for (let s of steps) {
      if (s.regexp.test(code)) {
        step++;
      }
    }

    console.info('Checked code. Current step:', step);

    const isQuestCompleted = step === steps.length;

    if (isQuestCompleted) {
      logQuestComplete({
        id: quest.id,
        student: getStudent(),
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

  addCodeRunListener(debouncedCheck);

  const generateStepsHTML = () => {
    const code = getInnerText(getEditor());

    return steps.map(
      ({ task, check, regexp }) => {
        const isCompleted = regexp.test(code);
        const icon = `
          <span class="icon">${isCompleted ? '✔': '❌'}</span>`;

        const className = isCompleted ? 'is-completed' : 'not-completed';

        return `
          <div class="${className}">${icon} ${parseCode(check)}</div>
        `;
      },
    ).join('');
  };

  const render = () => {
    console.log('render, state: ', state);
    const imgSrc = state.isQuestCompleted ?
      'img/napaleon-4est.png'
      : 'img/napaleon.png';

    element.innerHTML = `
      <div id="napaleon">
        <img id="napaleon-img" src="${imgSrc}" />
          <div id="napaleon-message">
            ${MentorMessage({ state, quest })}
          </div>
      </div>
      <div id="steps-progress">
        ${generateStepsHTML()}
      </div>
    `;
  };

  const update = () => {
    document.querySelector('#napaleon-message').innerHTML = `
      ${MentorMessage({ state, quest })}
    `;
    document.querySelector('#steps-progress').innerHTML = `
      ${generateStepsHTML()}
    `;
  };

  render();

  return element;
}
