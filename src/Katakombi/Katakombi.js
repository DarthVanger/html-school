import { BgImg } from './levels/BgImg.js';
import { levels } from './levels/levels.js';
import { Level } from './levels/Level.js';
import { OnlineStudents } from '../OnlineStudents/OnlineStudents.js';

const element = document.createElement('section');
element.id = 'catacombs';
export const Katakombi = (state) => {
  let levelNum = 0;
  let level;

  const handleLevelComplete = () => {
    //sendKatakombiLevelComplete({ level, student: state.student });
    nextLevel();
  };

  const nextLevel = () => {
    level.remove();
    levelNum++;
    console.log(`rendering level ${levelNum}`);
    level = Level({
      state,
      level: levels[levelNum],
      onComplete: handleLevelComplete,
    });
    element.append(level);
  };

  element.append(BgImg());
  level = Level({
    state,
    level: levels[0],
    onComplete: handleLevelComplete,
  });
  element.append(level);
  element.append(OnlineStudents(state));
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
