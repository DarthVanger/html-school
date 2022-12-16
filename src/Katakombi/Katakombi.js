import { levels } from './levels/levels.js';
import { Level, nextLevel } from './levels/Level.js';

const element = document.createElement('article');
element.id = 'catacombs';
export const Katakombi = (state) => {
  const levelsElem = document.createElement('div');
  levelsElem.className = 'levels';
  element.append(levelsElem);

  const buttons = document.createElement('div');
  buttons.className = 'buttons';

  const btnUp = document.createElement('button');
  btnUp.className = 'btn btn-up';
  btnUp.innerHTML = 'up';
  buttons.append(btnUp);
  const btnDown = document.createElement('button');
  btnDown.className = 'btn btn-down';
  btnDown.innerHTML = 'down';
  buttons.append(btnDown);
  const btnRight = document.createElement('button');
  btnRight.className = 'btn btn-right';
  btnRight.innerHTML = 'right';
  buttons.append(btnRight);
  const btnLeft = document.createElement('button');
  btnLeft.className = 'btn btn-left';
  btnLeft.innerHTML = 'left';
  buttons.append(btnLeft);

  btnUp.addEventListener('click', moveUp);
  btnDown.addEventListener('click', moveDown);
  btnRight.addEventListener('click', moveRight);
  btnLeft.addEventListener('click', moveLeft);


  element.append(buttons);

  const animTime = 2000;
  let lx = 0;
  let ly = 0;

  function moveDown () {
    let lcur = ly;
    ly = (ly + 1) % 3;
    levelElems[lcur].classList.add('cur-down');
    levelElems[ly].classList.add('top-down');
    levelElems[ly].classList.add('cur');
    setTimeout(() => {
      levelElems[lcur].classList.remove('cur');
      levelElems[lcur].classList.remove('cur-down');
      levelElems[ly].classList.remove('top-down');
    }, animTime);
  }

  function moveUp () {
    let lcur = ly;
    ly = (ly + 1) % 3;
    levelElems[ly].classList.add('bottom-up');
    levelElems[ly].classList.add('cur');
    levelElems[lcur].classList.add('cur-up');
    setTimeout(() => {
      levelElems[lcur].classList.remove('cur');
      levelElems[lcur].classList.remove('cur-up');
      levelElems[ly].classList.remove('bottom-up');
    }, animTime);
  }

  function moveRight () {
    let lcur = ly;
    ly = (ly + 1) % 3;
    levelElems[ly].classList.add('left-right');
    levelElems[lcur].classList.add('cur-right');
  }

  function moveLeft () {
    let lcur = ly;
    ly = (ly + 1) % 3;
    levelElems[ly].classList.add('righ-left');
    levelElems[lcur].classList.add('cur-left');
  }

  let levelElems = [];
  for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
      const level = Level({ state, level: levels[0] });
      console.log('level: ', level);
      levelsElem.append(level);
      levelElems.push(level);
    }
  }
  levelElems[0].classList.add('cur');

  music();

  return element;
}

function music() {
  let isMusicPlaying = false;
  document.body.addEventListener('click', () => {
    if (!isMusicPlaying) {
      isMusicPlaying = true;
      const audio = new Audio('/video/catacombs.mp3');
      audio.play();
    }
  });
}
