import { Mentor } from './mentor.js';
import { napaleon } from './napaleon.js';
import quests from './quests/quests.js';
import { logCodeRun } from './api.js';
import { saveCaretPosition } from './utils.js';
import { QuestStory } from './QuestStory.js';

const playground = document.createElement('div');
import { Topbar } from './Topbar.js';

playground.id = 'playground';
playground.innerHTML = `
  ${Topbar()}
  <div class="grid">
    <pre id="editor">
      <code contenteditable style="white-space: pre" class="language-html" spellcheck="false"></code>
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
    <link rel="stylesheet" href="/src/quests/editor.css" />
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
  
  notifyListeners(); 
};

export const setCode = (code) => {
  getEditor().textContent = code.slice(1);
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

const listeners = [];
const notifyListeners = () => listeners.forEach(l => l());
const addCodeRunListener = listener => {
  listeners.push(listener);
};

const element = document.createElement('div');
element.id = 'quest-page';
export const QuestPage = ({ questId }) => {
  console.log('quest page');
  const quest = quests[questId];
  console.log('questId: ', questId);
  element.append(QuestStory({ quest }));
  element.append(playground);
  setTimeout(() => {
    setCode(quest.code);
    element.append(Mentor({ quest, addCodeRunListener }));
    console.log('focus pocus :)');
    getEditor().focus();
    getRunButton().addEventListener('click', () => {
      run();
      getEditor().focus();
    });
    getEditor().addEventListener('keyup', debouncedHighlight);
    highlight();

    // Preserve line breaks
    // https://github.com/PrismJS/prism/issues/1764#issuecomment-467421570
    Prism.hooks.add('before-sanity-check', function (env) {
      env.code = env.element.innerText;
    });
  });

  return element;
}

const highlight = () => {
  const restoreCaretPosition = saveCaretPosition(getEditor());
  console.log('highlight, editor: ', getEditor());
  Prism.highlightElement(getEditor());
  const napaleonCode = document.querySelector('#napaleon-message code');
  console.log('napaleonCode: ', napaleonCode);
  Prism.highlightElement(napaleonCode);
  restoreCaretPosition();
};

let timeoutId;
const debouncedHighlight = () => {
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(highlight, 1000);
};
