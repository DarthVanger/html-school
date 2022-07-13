import { getCurrentCursorPosition, setCursor, getInnerText } from './utils.js';

let currentStep = 0;

const getButtonText = () => {
  const answers = [
    'Понял бля',
    'Да шарю',
    'Да понял я блять!',
    'Заебал',
    'Не выебуйся',
    'Съебись',
    'Да отъебись же',
    'Пошел нахуй',
    'Да емана, отвянь!',
    'Твою же мать, отъебись!',
  ];

  //const randomIndex = Math.floor((Math.random() * answers.length));
  
  return answers[currentStep % (answers.length - 1)];
};

const getTextContent = (editor) => {
  return editor.textContent;
};

const nextStep = (step) => {
  console.log('next step', step);
  currentStep = step;
  const elem = document.querySelector('#mentor');
  elem.style.display = 'flex';
};

const check = () => {
  const code = getInnerText(editor);
  let step = 0;

  if (!/<script>/.test(code)) {
    showMentorAtCursor('Вписуй &lt;script&gt;, блять)');
    console.log('step++');
  }

  if (/<script>[\n]/.test(code)) {
    showMentorAtCursor('Красава! Теперь закрывающий &lt;/script&gt;! :)');
    step ++;
    console.log('step++ 2');
  }

  if (/<\/script>/.test(code)) {
    showMentorAtCursor('ОГОНЬ! Внутри тега пиши alert');
    step++;
  }

  if (/<script>\s*alert\s*[^<]*<\/script>/.test(code)) {
    showMentorAtCursor('Скобку круглую открывающую)');
    step++;
  }

  if (/<script>\s*alert[(]\s*[^<]*<\/script>/.test(code)) {
    showMentorAtCursor('Кавычки)');
    step++;
  }

  if (/<script>\s*alert[(]['"]\s*[^<]*<\/script>/.test(code)) {
    showMentorAtCursor('текст)');
    step++;
  }

  if (/<script>\s*alert[(]['"][^'"]+\s*[^<]*<\/script>/.test(code)) {
    showMentorAtCursor('Закрывающие кавычки)');
    step++;
  }

  if (/<script>\s*alert[(]['"][^'"]+['"]\s*[^<]*<\/script>/.test(code)) {
    showMentorAtCursor('Закрыть круглую скобку)');
    step++;
  }

  if (/<script>\s*alert[(]['"][^'"]+['"][)]\s*[^<]*<\/script>/.test(code)) {
    showMentorAtCursor('Точку с запятой блять!');
    step++;
  }

  if (/<script>\s*alert[(]['"][^'"]+['"][)];\s*<\/script>/.test(code)) {
    showMentorAtCursor(`
      <p>
        Ваще огонь ! 🔥🔥🔥
      </p>
      <p>
        Запускай йопта! Должно пахать)
      </p>
    `);
    step++;
  }
  if (/<script>\s*alert[(]['"][^'"]+['"][)];\s*[^\s]+[^<]*<\/script>/.test(code)) {
    showMentorAtCursor(`
      <p>
        Лишняя хуйня после точки с запятой
      </p>
    `);
    step++;
  }

  console.log('step: ', step);
  console.log('currentStep: ', currentStep);
  if (step !== currentStep) {
    console.log('not equal');
    nextStep(step);
  }
};

export const mentor = (editor) => {
  const code = getInnerText(editor);
  const initialCursorPos = code.length + 5;
  setCursor(editor, initialCursorPos );

  editor.addEventListener('keyup', check);
  check();
};

const showMentorAtCursor = (text) => {
  const currentPos = getCurrentCursorPosition('editor');
  let code = getInnerText(editor);

  const codeBeforeCursor = code.substr(0, currentPos );

  console.debug('Current cursor position: ', currentPos);
  let closestNewlineIndex = codeBeforeCursor.lastIndexOf('\n');
  let closestNewlinePos = closestNewlineIndex;

  if (closestNewlineIndex === -1) {
    closestNewlinePos = 0;
  }
  let posInLine = codeBeforeCursor.length - closestNewlinePos;
  if (closestNewlineIndex === 0) {
    posInLine = 0;
  }

  var regex = /[\n][\n]?/g;
  const matches = codeBeforeCursor.match(regex);
  
  let linesNum = (matches || []).length || 0; 

  console.debug('Line num: ', linesNum);

  const letterWidth = 9;
  const fontSize = 18;
  const padding = 18;
  const lineHeight = fontSize * 1.2;
  const y = lineHeight * (linesNum + 1) + padding;
  const x =  padding + posInLine * letterWidth;
  Mentor({x , y, text});
};

const Mentor = ({ x, y, text }) => {
  const element = document.querySelector('#mentor');
  element.style.left = x;
  element.style.top = y;
  element.innerHTML = `
    <img src="img/napaleon.png" />
    <div id="mentor-message">
      ${text}
    </div>
    <button type="button" id="close-mentor-button">${getButtonText()}</button>
  `;

  const closeButton = document.querySelector('#close-mentor-button');

  closeButton.addEventListener('click', () => {
    element.style.display = 'none';
  });
}
