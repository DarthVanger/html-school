import { App } from './App.js';

const render = (elem) => {
  console.info('render');
  document.querySelector('section').innerHTML = elem;
};

render(App());
