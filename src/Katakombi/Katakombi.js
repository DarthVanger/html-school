import { saveCatacombsState, getCatacombsState } from './api.js';
import { Video } from './Video.js';
import { BgImg } from './levels/BgImg.js';
import { levels } from './levels/levels.js';
import { Level } from './levels/Level.js';
import { KataHome } from './KataHome.js';
import { Timer } from './Timer.js';
import { levelVideos } from './levelVideos.js';

//const fadeDuration = 5000;
const fadeDuration = 1000;

let timer;

const element = document.createElement('section');
element.id = 'catacombs';
export const Katakombi = (state) => {
  let levelNum = 0;
  let level;
  let levelVid;
  let catacombsState;
  let kataHome;
  let levelElement;

  const introVid = Video({ src: '/video/katakombi/zastavka-loop.mp4' });
  introVid.loop = true;
  element.append(introVid);

  setTimeout(async () => {
    try {
      catacombsState = await getCatacombsState();
    } catch (e) {
      console.error('Failed to fetch catacombs state: ', e);
    }

    kataHome = KataHome({ catacombsState, onStartBtnClick: start });
    element.append(kataHome);

    render({ catacombsState });
  });

  const getStudLevelNum = () => {
    const studState = catacombsState[state.student];
    console.info('[Katakombi] student state', studState);
    if (!studState) return 0;
    const completed = Object.keys(studState).filter(x => studState[x].isComplete);
    return completed.length;
  };

  const render = ({ catacombsState }) => {
    levelNum = getStudLevelNum();
    console.info('[Katakombi] student level num', levelNum);
    level = levels[levelNum];
  };

  const handleLevelComplete = async () => {
    //sendKatakombiLevelComplete({ level, student: state.student });


    levelVid.remove();

    const vid = Video({ src: levelVideos[levelNum] });
    vid.classList.add('fade-in');
    element.append(vid);
    await wait(levelVideos[levelNum].endVid.duration - 5000);
    vid.classList.add('fade-out');
    await wait(fadeDuration);
    nextLevel();
  };

  const wait = async (t) => new Promise(resolve => setTimeout(resolve, t));

  const renderLevel = async (level) => {
    console.info(`[Katakombi] Rendering level id ${level.id}`);

    timer?.remove();

    levelElement = Level({
      state,
      level,
      onComplete: handleLevelComplete,
    });

    if (kataHome) {
      kataHome.classList.add('fade-out');
      setTimeout(() => {
        kataHome.remove();
      }, fadeDuration);
    }

    if (levelNum === 0) {
      introVid.classList.add('fade-out');
      await wait(fadeDuration);
      introVid.remove();
    }

    levelVid = Video({ src: levelVideos[levelNum].startVid.src });

    element.append(levelVid);
    levelVid.classList.add('fade-in');
    levelVid.play();

    await wait(levelVideos[levelNum].startVid.duration);

    element.append(levelElement);

    timer = Timer({
      min: 5,
      id: 'katakombi-level-timer',
      className: 'task-timer',
    });

    element.append(timer);
  };

  const nextLevel = () => {
    levelElement.remove();
    levelNum++;
    level = levels[levelNum];

    console.info(`[Katakombi] Rendering level #${levelNum}`);
    renderLevel(level);
  };


  const start = async () => {
    renderLevel(level);
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
