import { getCurrentCursorPosition, setCursor, getInnerText } from './utils.js';

const getTextContent = (editor) => {
  return editor.textContent;
};

const check = () => {
  const code = getInnerText(editor);

  if (!/<script>$/.test(code)) {
    showMentorAtCursor('Вписуй &lt;script&gt;, блять)');
  }
  if (/<script>$/.test(code)) {
    showMentorAtCursor('Энтер, блять )');
  }

  if (/<script>[\n]/.test(code)) {
    showMentorAtCursor('Красава! Теперь закрывающий &lt;/script&gt;! :)');
  }

  if (/<\/script>/.test(code)) {
    showMentorAtCursor('ОГОНЬ! Внутри тега пиши alert');
  }

  if (/<script>\s*alert\s*<\/script>/.test(code)) {
    showMentorAtCursor('Скобку круглую открывающую)');
  }

  if (/<script>\s*alert[(]\s*<\/script>/.test(code)) {
    showMentorAtCursor('Кавычки)');
  }

  if (/<script>\s*alert[(]['"]\s*<\/script>/.test(code)) {
    showMentorAtCursor('текст)');
  }

  if (/<script>\s*alert[(]['"][^'"]+\s*<\/script>/.test(code)) {
    showMentorAtCursor('Закрывающие кавычки)');
  }

  if (/<script>\s*alert[(]['"][^'"]+['"]\s*<\/script>/.test(code)) {
    showMentorAtCursor('Закрыть круглую скобку)');
  }

  if (/<script>\s*alert[(]['"][^'"]+['"][)]\s*<\/script>/.test(code)) {
    showMentorAtCursor('Точку с запятой блять!');
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
  }
};

export const mentor = (editor) => {
  const code = getInnerText(editor);
  const initialCursorPos = code.length + 5;
  console.debug('code: ', JSON.stringify(code));
  console.debug('code.length: ', code.length);
  console.debug('Set inital cursor at ', initialCursorPos);
  setCursor(editor, initialCursorPos );

  editor.addEventListener('keyup', check);
  check();
};

const showMentorAtCursor = (text) => {
  const currentPos = getCurrentCursorPosition('editor');
  let code = getInnerText(editor);

  const codeBeforeCursor = code.substr(0, currentPos );
  console.debug('Code before cursor: ', JSON.stringify(codeBeforeCursor));

  console.debug('Current cursor position: ', currentPos);
  let closestNewlineIndex = codeBeforeCursor.lastIndexOf('\n');
  let closestNewlinePos = closestNewlineIndex;

  if (closestNewlineIndex === -1) {
    closestNewlinePos = 0;
  }
  console.debug('closestNewlinePos: ', closestNewlinePos);
  let posInLine = codeBeforeCursor.length - closestNewlinePos;
  if (closestNewlineIndex === 0) {
    posInLine = 0;
  }

  console.debug('posInLine: ', posInLine);

  console.debug('code: ', JSON.stringify(code));
  var regex = /[\n][\n]?/g;
  const matches = codeBeforeCursor.match(regex);
  console.debug('matches: ', matches);
  
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
  `;
}
