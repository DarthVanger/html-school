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

  
  const codeBeforeCursor = code.substr(0, currentPos + 1);
  console.debug('Code before cursor: ', JSON.stringify(codeBeforeCursor));

  console.debug('Current cursor position: ', currentPos);
  let closestNewlinePos = codeBeforeCursor.lastIndexOf('\n');
  if (/[\n]$/.test(codeBeforeCursor)) {
    closestNewlinePos = codeBeforeCursor.slice(0, -1).lastIndexOf('\n');
  }
  if (closestNewlinePos === -1) {
    closestNewlinePos = 0;
  }
  console.debug('closestNewlinePos: ', closestNewlinePos);
  const posInLine = codeBeforeCursor.length - closestNewlinePos;
  console.debug('posInLine: ', posInLine);

  console.debug('code: ', JSON.stringify(code));
  var regex = /[\n][\n]?/g;
  const matches = codeBeforeCursor.match(regex);
  console.debug('matches: ', matches);
  
  let linesNum = (matches || []).length || 0; 
  if (matches?.length === 1) {
    if (/[\n]$/.test(codeBeforeCursor)) {
      console.log('here');
      linesNum = 0;
    } 
    if (/[\n][\n]$/.test(codeBeforeCursor)) {
      linesNum = 1;
    }
  }

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
    <pre><code>${text}</code></pre>`;
}
