import { BgImg } from './levels/BgImg.js';
import { levels } from './levels/levels.js';
import { Level } from './levels/Level.js';

const element = document.createElement('section');
element.id = 'catacombs';
export const Katakombi = (state) => {

  element.append(BgImg());
  element.append(Level({
    state,
    level: levels[0],
    onComplete: () => { console.log('level complete!') },
  }));
  //element.append(Level1());

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
