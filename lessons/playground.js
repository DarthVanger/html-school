import codes from './code/codes.js';

const playground = document.createElement('div');

playground.id = 'playground';
playground.innerHTML = `
  <pre id="editor">
    <code contenteditable style="white-space: pre" class="language-html"></code>
  </pre>
  <iframe id="result"></iframe>
`

const getEditor = () => document.querySelector('#editor > code');
const getIframe = () => document.querySelector('iframe');

export const run = () => {
  const code = getEditor().textContent;
  playground.querySelector('iframe').remove();
  const iframe = document.createElement('iframe');
  iframe.id = "result";
  playground.append(iframe);
  replaceIframeContent(getIframe(), code);
};

export const setCode = (code) => {
  getEditor().textContent = code;
  run();
}

export default playground;
export { getEditor };

// https://stackoverflow.com/a/51167233/1657101
function replaceIframeContent(iframeElement, newHTML)
{
    iframeElement.src = "about:blank";
    iframeElement.contentWindow.document.open();
    iframeElement.contentWindow.document.write(newHTML);
    iframeElement.contentWindow.document.close();
}

export const render = (container, code) => {
  container.append(playground);

  setCode(code);

  getEditor().addEventListener('keyup', (event) => {
    run(event.target.value);
  });
}

const lesson = location.hash.replace('#', '');
console.log(lesson);
render(document.body, codes[lesson]);
