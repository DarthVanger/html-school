import { levels } from './levels/levels.js';
import { Level, nextLevel } from './levels/Level.js';
import {
  TopLeftCorner,
  TopEnd,
  TopRightCorner,
  LeftEnd,
  Empty,
  RightEnd,
  BottomLeftCorner,
  BottomEnd,
  BottomRightCorner,
} from './map.js';

const element = document.createElement('article');
element.id = 'catacombs';
export const Katakombi = (state) => {
  const levelsElem = document.createElement('div');
  levelsElem.className = 'levels';
  element.append(levelsElem);

  const buttons = document.createElement('div');
  buttons.className = 'buttons';

  const btnForward = document.createElement('button');
  btnForward.className = 'btn btn-forward';
  btnForward.innerHTML = 'forward';
  buttons.append(btnForward);
  const btnRight = document.createElement('button');
  btnRight.className = 'btn btn-right';
  btnRight.innerHTML = 'right';
  buttons.append(btnRight);
  const btnLeft = document.createElement('button');
  btnLeft.className = 'btn btn-left';
  btnLeft.innerHTML = 'left';
  buttons.append(btnLeft);

  btnForward.addEventListener('click', moveForward);
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

  function moveForward () {
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

  function onComplete () {
    btnForward.classList.add('show');
  }

  const map = [
    [ TopLeftCorner(), TopEnd(), TopEnd(), TopEnd(), TopRightCorner() ],
    [ LeftEnd(), Empty(), Empty(), Empty(), RightEnd() ],
    [ LeftEnd(), Empty(), Empty(), Empty(), RightEnd() ],
    [ LeftEnd(), Empty(), Empty(), Empty(), RightEnd() ],
    [ BottomLeftCorner(), BottomEnd(), BottomEnd(), BottomEnd(), BottomRightCorner() ],
  ];


  let levelElems = [];
  const cell = map[0][0];
  levelsElem.append(cell.left);
  levelsElem.append(cell.right);
  levelsElem.append(cell.front);
  levelsElem.append(cell.back);
  /*
  for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
      //const level = Level({ state, level: levels[0], onComplete });
      const level = map[i][j].left;
      console.log('level: ', level);
      levelsElem.append(level);
      levelElems.push(level);
    }
  }
  levelElems[0].classList.add('cur');
  */

  cell.front.classList.add('cur');

  music();

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
