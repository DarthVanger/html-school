// Encode HTML entities in a string
// https://stackoverflow.com/a/18750001/1657101
export const encodeHTMLEntities = (str => {
  const regex = /[\u00A0-\u9999<>\&]/g;
  const replacer = c => `&#${c.charCodeAt(0)};`;
  return str.replace(regex, replacer);
});


// Remove some whitespace added by contenteditable div
export const getInnerText = (element) => {
  let text = element.innerText;
  text = text.replace(/^      [\n]/, '');
  text = text.replace(/[\n]    /, '');
  return text;
};

// Save and restore caret position when highlighting code
// https://stackoverflow.com/a/38479462/1657101
export function saveCaretPosition(context){
    var selection = window.getSelection();
    if (!selection.focusNode) return () => {};

    var range = selection.getRangeAt(0);
    range.setStart(  context, 0 );
    var len = range.toString().length;

    return function restore(){
        var pos = getTextNodeAtPosition(context, len);
        selection.removeAllRanges();
        var range = new Range();
        range.setStart(pos.node ,pos.position);
        selection.addRange(range);

    }
}

function getTextNodeAtPosition(root, index){
    const NODE_TYPE = NodeFilter.SHOW_TEXT;
    var treeWalker = document.createTreeWalker(root, NODE_TYPE, function next(elem) {
        if(index > elem.textContent.length){
            index -= elem.textContent.length;
            return NodeFilter.FILTER_REJECT
        }
        return NodeFilter.FILTER_ACCEPT;
    });
    var c = treeWalker.nextNode();
    return {
        node: c? c: root,
        position: index
    };
}
