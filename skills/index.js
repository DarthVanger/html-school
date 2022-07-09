import { App } from './App.js';

const render = () => {
  console.info('render');
  const elem = App({ render });
  document.querySelector('section').innerHTML = elem;
};

render();
