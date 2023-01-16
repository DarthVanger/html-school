import { BgImg } from './levels/BgImg.js';
import { levels } from './levels/levels.js';
import { Level, nextLevel } from './levels/Level.js';

const element = document.createElement('article');
element.id = 'catacombs';
export const Katakombi = (state) => {

  element.append(BgImg());

  //music();

  return element;
}

let isMusicPlaying = false;
function music() {
  if (!isMusicPlaying) {
    isMusicPlaying = true;
    const audio = new Audio('/video/catacombs.mp3');
    audio.play();
  }
}
