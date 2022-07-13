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
};

export const mentor = (editor) => {
  const code = getInnerText(editor);
  const initialCursorPos = code.length;
  console.debug('code: ', JSON.stringify(code));
  console.debug('code.length: ', code.length);
  console.debug('Set inital cursor at ', initialCursorPos);
  setCursor(editor, initialCursorPos);

  editor.addEventListener('keyup', check);
  check();
};

const showMentorAtCursor = (text) => {
  const currentPos = getCurrentCursorPosition('editor');
  let code = getInnerText(editor);

  var regex = /[\n]/g;
  var newLinesNum = (code.match(regex) || []).length; 
  const linesNum = (newLinesNum / 2 - 1) || 1;
  console.debug('Current cursor position: ', currentPos);
  const currentLine =  code.substr(0, currentPos + 1);
    console.debug('Current line: ', JSON.stringify(currentLine));
  const posInLine = currentPos;

  const letterWidth = 9;
  const fontSize = 18;
  const padding = 18;
  const lineHeight = fontSize * 1.2;
  const y = lineHeight * linesNum + padding;
  const x =  padding + posInLine * letterWidth;
  //Mentor({x , y, text});
};

const Mentor = ({ x, y, text }) => {
  const element = document.querySelector('#mentor');
  element.style.left = x;
  element.style.top = y;
  element.innerHTML = `
    <pre><code>${text}</code></pre>`;
}
