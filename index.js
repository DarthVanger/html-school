import { App } from './src/app.js';

const container = document.querySelector('body');

const run = () => {
  container.append(App());
};

run();
