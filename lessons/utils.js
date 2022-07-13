// https://stackoverflow.com/a/41034697/1657101
//
export const getInnerText = (element) => {
  let text = element.innerText;
  text = text.replace(/^      [\n]/, '');
  text = text.replace(/[\n][\n]    /, '');
  return text;
};

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

export function setCursor(node, chars) {
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


export function getCurrentCursorPosition(parentId) {
    let firstIteration = true;
    var selection = window.getSelection(),
        charCount = -1,
        node;

    if (selection.focusNode) {
        console.log('selection: ', selection);
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

                    if (text === "      " && firstIteration) {
                      firstIteration = false;
                      text = '';
                    }
                  } else {
                    text = node.innerText;
                  }
                  console.log('text: ', JSON.stringify(text));
                  console.log('charCount before: ', charCount);
                  charCount += text.length;
                  console.log('charCount: ', charCount);
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

