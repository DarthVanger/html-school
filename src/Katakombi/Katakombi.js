import { saveCatacombsState, getCatacombsState } from './api.js';
import { Video } from './Video.js';
import { BgImg } from './levels/BgImg.js';
import { levels } from './levels/levels.js';
import { Level } from './levels/Level.js';
import { KataHome } from './KataHome.js';
import { Timer } from './Timer.js';

let timer;

const element = document.createElement('section');
element.id = 'catacombs';
export const Katakombi = (state) => {
  let levelNum;
  let level;
  let catacombsState;

  setTimeout(async () => {
    try {
      catacombsState = await getCatacombsState();
    } catch (e) {
      console.error('Failed to fetch catacombs state: ', e);
    }

    element.append(KataHome({ catacombsState, onStartBtnClick: start }));

    render({ catacombsState });
  });


  const render = ({ catacombsState }) => {
    const studState = catacombsState[state.student];
    console.info('[Katakombi] student state', studState);
    levelNum = Object.keys(studState).length - 1;
    console.info('[Katakombi] student level num', levelNum);
    level = levels[levelNum];
  };

  const handleLevelComplete = () => {
    //sendKatakombiLevelComplete({ level, student: state.student });
    nextLevel();
  };

  const renderLevel = (level) => {
    console.info(`[Katakombi] Rendering level id ${level.id}`);
    const levelElement = Level({
      state,
      level,
      onComplete: handleLevelComplete,
    });
    element.append(levelElement);

    timer?.remove();

    timer = Timer({
      min: 5,
      id: 'katakombi-level-timer',
      className: 'task-timer',
    });

    element.append(timer);
  };

  const nextLevel = () => {
    level.remove();
    levelNum++;
    level = levels[levelNum];
    console.info(`[Katakombi] Rendering level #${levelNum}`);
    renderLevel(level);
  };

  const vidIntro = Video({ src: '/video/katakombi/zastavka-loop.mp4' });
  vidIntro.loop = true;

  const introVidDuration = 5000;
  element.append(vidIntro);

  const start = () => {
    vidIntro.remove();
    const vidLevel1 = Video({ src: '/video/katakombi/girl.mp4' });
    element.append(vidLevel1);

    setTimeout(() => {
      renderLevel(level);


      setTimeout(() => {
        vidLevel1.remove();
        const vidLevel1End = Video({ src: '/video/katakombi/girl2.mp4' });
        element.append(vidLevel1End);

      }, 5 * 60 * 1000);
    }, 23000);
  };

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
