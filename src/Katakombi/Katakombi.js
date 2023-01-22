import { Video } from './Video.js';
import { BgImg } from './levels/BgImg.js';
import { levels } from './levels/levels.js';
import { Level } from './levels/Level.js';
import { OnlineStudents } from '../OnlineStudents/OnlineStudents.js';
import { KataHome } from './KataHome.js';
import { Timer } from './Timer.js';

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

  level = Level({
    state,
    level: levels[0],
    onComplete: handleLevelComplete,
  });

  element.append(OnlineStudents(state));

  const start = () => {
    const vidIntro = Video({ src: '/video/katakombi/zastavka.mp4' });
    element.append(vidIntro);
    setTimeout(() => {
      vidIntro.remove();
      const vidLevel1 = Video({ src: '/video/katakombi/girl.mp4' });
      element.append(vidLevel1);

      setTimeout(() => {
        element.append(level);

        element.append(Timer({
          min: 5,
          id: 'level-1-timer',
          className: 'task-timer',
        }));


        setTimeout(() => {
          vidLevel1.remove();
          const vidLevel1End = Video({ src: '/video/katakombi/girl2.mp4' });
          element.append(vidLevel1End);
        }, 5 * 60 * 1000);
      }, 23000);

    }, 5000);
  };

  element.append(KataHome({ onStartBtnClick: start }));
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
