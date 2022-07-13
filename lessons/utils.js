// https://stackoverflow.com/a/41034697/1657101
//
export const getInnerText = (element) => {
  let text = element.innerText;
  text = text.replace(/^      [\n]/, '');
  text = text.replace(/[\n]    /, '');
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

    let nodeCount = 0;
    let previousNodes = [];

    if (selection.focusNode) {
        console.log('selection: ', selection);
        if (isChildOf(selection.focusNode, parentId)) {
            node = selection.focusNode; 
            charCount = selection.focusOffset;

            console.log('focus node', node);
            if (node.nodeName === 'DIV') {
              charCount += 1;
            }

            while (node) {
                if (node.id === parentId) {
                    break;
                }


                if (node.previousSibling) {
                    node = node.previousSibling;
                    previousNodes.push(node);
                    let text;
                  if (node.nodeType == Node.TEXT_NODE) {
                    text = node.textContent;

                    if (text === "      " && firstIteration) {
                      firstIteration = false;
                      text = '';
                    }
                    console.debug(nodeCount, 'Text node: ', node.data);
                  } else {
                    text = node.innerText;
                    if (node.nodeName === 'DIV') {
                      charCount += 1;
                    }
                    console.debug(node, 'non-text node: ', node);
                  }
                  charCount += text.length;
                  nodeCount++;  
                } else {
                     node = node.parentNode;
                     if (node === null) {
                         break
                     }
                }
           }
      }
   }

  console.log('previousNodes: ', previousNodes);
    return charCount;
};

