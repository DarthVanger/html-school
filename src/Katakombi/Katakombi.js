import { Video } from './Video.js';
import { BgImg } from './levels/BgImg.js';
import { levels } from './levels/levels.js';
import { Level } from './levels/Level.js';
import { KataHome } from './KataHome.js';
import { getStudLevelNum } from './KataRating.js';
import { Timer } from './Timer.js';
import { levelVideos } from './levelVideos.js';
import { levelMusic } from './levelMusic.js';
import { StartScreen } from './StartScreen.js';
import { Player, playRandomTrack, pauseMusic } from './Player.js';

let timer;

const wait = async (t) => new Promise(resolve => setTimeout(resolve, t));

const fadeDuration = 2000;

export const Katakombi = (state) => {
  const element = document.createElement('section');
  element.id = 'catacombs';

  let kataHome;
  let wasStartGameClicked = false;

  const introVidDuration = 5000;
  const introVid = Video({ src: '/video/katakombi/zastavka.mp4' });
  const wallsVid = Video({ src: '/video/katakombi/building-footage.mp4' });

  element.append(introVid);
  element.append(Player());

  const showKataHome = () => {
    console.log('showKataHome');
    if (kataHome) return;

    startScreen.classList.add('fade-out');
    setTimeout(() => {
      startScreen.classList.add('fade-out');
      setTimeout(() => startScreen.remove(), fadeDuration);
    }, fadeDuration);
    introVid.play();
    setTimeout(() => {
      if (wasStartGameClicked) {
        console.log('[Katakombi] NOT Playing building footage video, as "start game" was already clicked');
        return;
      } 
      console.log('[Katakombi] Play building footage video');
      introVid.classList.add('fade-out');
      setTimeout(() => introVid.remove(), fadeDuration);
      element.append(wallsVid);
      wallsVid.classList.add('fade-in');
      wallsVid.loop = true;
      wallsVid.play();
    }, introVidDuration);

    renderKataHome();
  };

  const startScreen = StartScreen({ onClick: showKataHome });
  element.append(startScreen);

  let catacombsState;
  let levelNum = 0;
  let level;
  let levelVid;
  let levelMus;
  let levelVidElement;
  let levelElement;

  const renderKataHome = () => {
    kataHome = KataHome({ state, onStartBtnClick: handleStartGameClick });
    element.append(kataHome);
  };

  const handleLevelComplete = async () => {
    console.info(`[Katakombi] handleLevelComplete for level #${levelNum}, id ${level.id}`);
    //sendKatakombiLevelComplete({ level, student: state.student });

    levelVidElement.remove();
    levelElement.remove();
    pauseMusic();
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

    let isTaskShown = false;
    const showTask = () => {
      console.info('[Katakombi] showTask');
      isTaskShown = true;
      hint.remove();

      element.append(levelElement);
      levelElement.classList.add('fade-in');

      timer = Timer({
        min: 5,
        id: `katakombi-level-timer-${level.id}`,
        className: 'task-timer fade-in',
      });

      element.append(timer);

      setTimeout(playRandomTrack, 3000);
    };

    const showTaskTimeoutId = setTimeout(showTask, levelVid.duration * 1000);

    let hint = document.createElement('p');
    hint.className = 'kata-hint';
    hint.innerHTML = `Press S to skip the video`;
    element.append(hint);

    document.addEventListener('keydown', function handleSkipVideoClick(e) {
      if (e.key == 's' || e.key == 'S') {
        if (!isTaskShown) {
          clearTimeout(showTaskTimeoutId);
          showTask();
        }
      }
    });
  };

  const handleStartGameClick = ({ catacombsState: cs }) => {
    wasStartGameClicked = true;
    catacombsState = cs;
    kataHome.classList.add('fade-out');
    introVid.classList.add('fade-out');
    wallsVid.classList.add('fade-out');

    setTimeout(() => {
      kataHome.remove();
      introVid.remove();
      wallsVid.remove();

      console.info('[Katakombi] Start level num', levelNum);
      renderLevel(level);
    }, fadeDuration);

    levelNum = getStudLevelNum(catacombsState[state.student]);
    level = levels[levelNum];

  };

  return element;
}
