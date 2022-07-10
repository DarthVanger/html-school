import { App } from './App.js';
import { subscribe } from './state.js';

const render = () => {
  console.info('render');
  const elem = App({ render });
  document.querySelector('section').innerHTML = elem;
};

render();

subscribe(render);
