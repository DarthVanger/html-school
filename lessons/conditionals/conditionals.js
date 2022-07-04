import playground, { setCode, run, getEditor } from '../playground.js';
import code from './code.js';

console.log('playgorund', playground);


const page = document.querySelector("#conditionals-lesson");

page.append(playground);

setCode(code);

getEditor().addEventListener('keyup', (event) => {
  run(event.target.value);
});
