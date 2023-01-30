import { Video } from './Video.js';
import { BgImg } from './levels/BgImg.js';
import { levels } from './levels/levels.js';
import { Level } from './levels/Level.js';
import { KataHome, getStudLevelNum } from './KataHome.js';
import { Timer } from './Timer.js';
import { levelVideos } from './levelVideos.js';

let timer;

const wait = async (t) => new Promise(resolve => setTimeout(resolve, t));

export const Katakombi = (state) => {
  const element = document.createElement('section');
  element.id = 'catacombs';

  const startImg = document.createElement('img');
  startImg.src = '/img/napaleon.jpg';
  startImg.id = 'kata-start-image';

  startImg.addEventListener('click', () => {
    startImg.remove();
    renderKataHome();
  });

  element.append(startImg);

  let catacombsState;
  let introVid;
  let levelNum = 0;
  let level;
  let levelVid;
  let levelVidElement;
  let kataHome;
  let levelElement;

  const renderKataHome = () => {
    introVid = Video({ src: '/video/katakombi/zastavka-loop.mp4' });
    introVid.loop = true;
    element.append(introVid);
    introVid.play();

    kataHome = KataHome({ state, onStartBtnClick: handleStartGameClick });
    element.append(kataHome);
  };

  const handleLevelComplete = async () => {
    console.info(`[Katakombi] handleLevelComplete for level #${levelNum}, id ${level.id}`);
    //sendKatakombiLevelComplete({ level, student: state.student });

    levelVidElement.remove();
    levelElement.remove();
    levelNum++;
    level = levels[levelNum];

    renderLevel(level);
  };

  const renderLevel = async (level) => {
    console.info(`[Katakombi] Rendering level id ${level.id}, num=${levelNum}`);

    timer?.remove();

    levelElement = Level({
      state,
      level,
      onComplete: handleLevelComplete,
    });

    levelVid = levelVideos[levelNum];
    levelVidElement = Video({ src: levelVid.src });
    levelVidElement.classList.add('fade-in');

    element.append(levelVidElement);
    levelVidElement.play();

    await wait(levelVid.duration * 1000);

    element.append(levelElement);

    timer = Timer({
      min: 5,
      id: 'katakombi-level-timer',
      className: 'task-timer',
    });

    element.append(timer);
  };

  const handleStartGameClick = ({ catacombsState: cs }) => {
    catacombsState = cs;
    kataHome.classList.add('fade-out');
    introVid.classList.add('fade-out');
    const fadeDuration = 2000;

    setTimeout(() => {
      kataHome.remove();
      introVid.remove();

      console.info('[Katakombi] Start level num', levelNum);
      renderLevel(level);
    }, fadeDuration);

    levelNum = getStudLevelNum(catacombsState[state.student]);
    level = levels[levelNum];

  };


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
