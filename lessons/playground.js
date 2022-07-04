const playground = document.createElement('div');

playground.id = 'playground';
playground.innerHTML = `
  <textarea id="editor"></textarea>
  <div id="result"></div>
`

const getEditor = () => document.querySelector('#editor');
const getResult = () => document.querySelector('#result');

export const run = code => {
    getResult().innerHTML = code;

    const newScript = document.createElement('script');
    newScript.id = "adin";

    const script = getResult().querySelector('script');

    if (script) {
      newScript.innerHTML = script.innerHTML;
      document.head.appendChild(newScript);
    }
};

export const setCode = (code) => {
  getEditor().value = code;
  run(code);
}

export default playground;
