
// https://stackoverflow.com/a/41034697/1657101
let range;
function createRange(node, chars, range) {
    if (!range) {
        range = document.createRange()
        range.selectNode(node);
        range.setStart(node, 0);
    }

    if (chars.count === 0) {
        range.setEnd(node, chars.count);
    } else if (node && chars.count >0) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.length < chars.count) {
                chars.count -= node.textContent.length;
            } else {
                range.setEnd(node, chars.count);
                chars.count = 0;
            }
        } else {
           for (var lp = 0; lp < node.childNodes.length; lp++) {
                range = createRange(node.childNodes[lp], chars, range);

                if (chars.count === 0) {
                    break;
                }
            }
        }
    } 

    return range;
};

function setCursor(node, chars) {
    if (chars >= 0) {
        var selection = window.getSelection();

        range = createRange(node.parentNode, { count: chars });

        if (range) {
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
};

function isChildOf(node, parentId) {
    while (node !== null) {
        if (node.id === parentId) {
            return true;
        }
        node = node.parentNode;
    }

    return false;
};

function getCurrentCursorPosition(parentId) {
    var selection = window.getSelection(),
        charCount = -1,
        node;

    if (selection.focusNode) {
        if (isChildOf(selection.focusNode, parentId)) {
            node = selection.focusNode; 
            charCount = selection.focusOffset;

            while (node) {
                if (node.id === parentId) {
                    break;
                }


                if (node.previousSibling) {
                    node = node.previousSibling;
                    let text;
                  if (node.nodeType == Node.TEXT_NODE) {
                    text = node.textContent;
                  } else {
                    text = node.innerText;
                  }
                  charCount += text.length;
                } else {
                     node = node.parentNode;
                     if (node === null) {
                         break
                     }
                }
           }
      }
   }

    return charCount;
};

const getEditorText = (editor) => {
  return editor.innerText;
};

const check = () => {
  const code = getEditorText(editor);

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
  const code = getEditorText(editor);
  console.log('set cursor at', code);
  setCursor(editor, code.length + 6);

  editor.addEventListener('keyup', check);
  check();
};

const showMentorAtCursor = (text) => {
  const currentPos = getCurrentCursorPosition('editor');
  let code = getEditorText(editor);

  code = code.trimLeft();
  code = code.replace(/[^ ] +/g, '');

  var regex = /[\n]/g;
  var newLinesNum = (code.match(regex) || []).length; 
  const linesNum = (newLinesNum / 2 - 1) || 1;
  console.debug('Current cursor position: ', currentPos);
  //const currentLine =  code.substr(0, currentPos);
  //  console.debug('Current cursor position: ', JSON.stringify(currentLine));
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
