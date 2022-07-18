import { getInnerText, encodeHTMLEntities } from './utils.js';
import { logQuestComplete } from './api.js';

const getEditor = () => document.querySelector('#editor > code');

const getTextContent = (editor) => {
  return editor.textContent;
};

const getButtonText = () => 'Закройся';

const getCode = () => getInnerText(getEditor());

const check = () => {
  const code = getCode();
  console.log('code: ', code);

  logQuestComplete({
    id: 'testid',
    student: 'tonytest',
  });

  if (false) {
    logCodeRun({ code, lesson, step, stepsNum, isTaskDone });
  }
};

let checkTimeoutId;
const debouncedCheck = () => {
  clearTimeout(checkTimeoutId);
  checkTimeoutId = setTimeout(check, 500);
};

let mentorRef;
export const Mentor = (quest) => {
  const { steps } = quest;
  
  const step = 0;

  const element = document.createElement('div');
  element.id = 'mentor';

  const state = {
    text: encodeHTMLEntities(steps[0].task), 
    buttonText: 'закройся',
  };

  setTimeout(() => {
    const code = getInnerText(getEditor());

    editor.addEventListener('keyup', debouncedCheck);
    check();
  });

  if (!mentorRef) {
    mentorRef = element;
    element.innerHTML = `
      <img src="img/napaleon.png" />
      <div id="mentor-message">
        ${state.text}
      </div>
      <button type="button" id="close-mentor-button">${getButtonText()}</button>
    `;

    setTimeout(() => {
      const closeButton = document.querySelector('#close-mentor-button');

      closeButton.addEventListener('click', () => {
        element.style.display = 'none';
        getEditor().focus();
      });
    });
  } else if (state.text !== text) {
    state.text = text;
    state.buttonText = getButtonText();
    mentorRef.querySelector('#mentor-message').innerHTML = text;
    mentorRef.querySelector('button').innerHTML = getButtonText();
  }

  return element;
}
