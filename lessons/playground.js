const playground = document.createElement('div');

playground.id = 'playground';
playground.innerHTML = `
  <pre id="editor">
    <code contenteditable class="language-html"></code>
  </pre>
  <iframe id="result"></iframe>
`

const getEditor = () => document.querySelector('#editor > code');
const getIframe = () => document.querySelector('iframe');

const setResult = (code) => {
  playground.querySelector('iframe').remove();
  const iframe = document.createElement('iframe');
  iframe.id = "result";
  playground.append(iframe);
  replaceIframeContent(getIframe(), code);
};

export const run = code => {
    setResult(code);
    //const script = `<script>${code</script>`;
    //const script = getResult().querySelector('script');

    //const newScript = document.createElement('script');
    //newScript.id = "playground-script";

};

export const setCode = (code) => {
  getEditor().textContent = code;
  run(code);
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
