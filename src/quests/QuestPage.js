import { Mentor } from './mentor.js';
import quests from './quests/quests.js';
import { saveCaretPosition } from './utils.js';
import { QuestStory } from './QuestStory.js';

const playground = document.createElement('div');
import { Topbar } from './Topbar.js';
import { BottomBar } from './BottomBar.js';

playground.id = 'playground';
playground.innerHTML = `
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
const getStory = () => document.querySelector('#quest-story');

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

  const editorCode = getEditor().textContent;
  code += editorCode
  console.log('[QuestPage] running code: ', editorCode);
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

let listeners = [];
const notifyListeners = () => listeners.forEach(l => l());
const addCodeRunListener = listener => {
  listeners.push(listener);
};
const clearCodeRunListeners = () => {
  listeners = [];
}

const element = document.createElement('div');
element.id = 'quest-page';
element.className = 'language-html';
export const QuestPage = ({ questId }) => {
  element.innerHTML = '';
  clearCodeRunListeners();
  console.log('quest page');
  const quest = quests[questId];
  console.log('questId: ', questId);
  element.innerHTML += `${Topbar()}`;
  console.log('quest: ', quest);
  if (quest.story) {
    element.append(QuestStory({ quest }));
  }
  setTimeout(() => {
    element.innerHTML += '<h2>Зоданее</h2>';
    element.append(playground);
    setCode(quest.code);
    element.append(Mentor({ quest, addCodeRunListener }));
    console.log('focus pocus :)');
    console.log('run button: ', getRunButton());
    getRunButton().addEventListener('click', () => {
      console.log('[QuestPage] run button clicked');
      run();
      highlight();
    });
    highlight();

    element.append(BottomBar());

    // Preserve line breaks
    // https://github.com/PrismJS/prism/issues/1764#issuecomment-467421570
    Prism.hooks.add('before-sanity-check', function (env) {
      env.code = env.element.innerText;
    });
  });

  return element;
}

const highlight = () => {
  console.debug('highlight, editor: ', getEditor());
  if (getEditor()) {
    const restoreCaretPosition = saveCaretPosition(getEditor());
    Prism.highlightElement(getEditor());
    const napaleonCodes = document.querySelectorAll('#napaleon-message code');
    napaleonCodes.forEach(c => Prism.highlightElement(c));
    restoreCaretPosition();
  }

  console.debug('highlight, story: ', getStory());
  if (getStory()) {
    const codes = getStory().querySelectorAll('code');
    codes.forEach(c => Prism.highlightElement(c));
  }
};
