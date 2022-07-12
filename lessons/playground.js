import codes from './code/codes.js';

const playground = document.createElement('div');

playground.id = 'playground';
playground.innerHTML = `
  <div class="grid">
    <pre id="editor">
      <code contenteditable style="white-space: pre" class="language-html"></code>
    </pre>
    <iframe id="result"></iframe>
  </div>
  <div id="loader">Reloaded</div>
  <button type="button" id="run-button">Run</button>
`

const getRunButton = () => document.querySelector('#run-button');
const getEditor = () => document.querySelector('#editor > code');
const getIframe = () => document.querySelector('iframe');

export const run = () => {
  let code = `
    <link rel="stylesheet" href="/lessons/editor.css" />
    <script>
      const showJsError = (error) => {
        const existingError = document.querySelector('#error');
        if (existingError) existingError.remove();

        const el = document.createElement('div');
        el.id = 'error';
        el.innerHTML = '<pre><code>Error: ' + error.message + '</code></pre>';


        el.addEventListener('click', () => {
          el.remove();
        });

        document.body.append(el);
      }

      window.addEventListener('error', function(event) {
        showJsError(event.error);
      });
    </script>
  `;

  code += getEditor().textContent;
  playground.querySelector('iframe').remove();
  const iframe = document.createElement('iframe');
  iframe.id = "result";
  playground.querySelector('.grid').append(iframe);

  replaceIframeContent(getIframe(), code);

  const loader = document.querySelector('#loader');
  loader.classList.add('show');
  setTimeout(() => {
    loader.classList.remove('show');
  }, 500);
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

  getRunButton().addEventListener('click', () => {
    run();
  });
}

const lesson = location.hash.replace('#', '');
console.log(lesson);
render(document.body, codes[lesson]);
