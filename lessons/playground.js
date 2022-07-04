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
    newScript.id = "playground-script";

    const script = getResult().querySelector('script');

    if (script) {
      newScript.innerHTML = script.innerHTML;

      const existingScript = document.querySelector('#playground-script');

      if (existingScript) existingScript.remove();
      document.head.appendChild(newScript);
    }
};

export const setCode = (code) => {
  getEditor().value = code;
  run(code);
}

export default playground;
export { getEditor };
