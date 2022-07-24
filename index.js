import { App } from './src/App.js';

const container = document.querySelector('body');

const run = () => {
  container.append(App());
};

run();
