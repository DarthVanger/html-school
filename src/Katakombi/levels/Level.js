import { BgImg } from './BgImg.js';
import { FireCircle } from './FireCircle.js';
import { levels } from './levels.js';
export const Level = (level) => {
  const el = document.createElement('article');
  el.className = 'level';
  el.append(BgImg());
  el.append(FireCircle());

  const code = document.createElement('div');
  code.contentEditable = true;
  code.className = 'code';
  el.append(code);

  const getCode = () => document.querySelector('.cur .code');

  setTimeout(() => {
    getCode().focus();
    getCode().addEventListener('keypress', () => {
      const fire = document.createElement('img');
      fire.src = '/src/Katakombi/img/fire.gif';
      fire.className = 'fire';
      console.log('sel start: ', getCode().selectionStart);
      const s = document.getSelection();
      const offset = s.focusOffset;
      console.log('offset', offset);
      fire.style.left = offset * 19.2 - 5;
      el.append(fire);
    });
  });


  // https://www.youtube.com/watch?v=_hU_5CcF7Tg
  const video = document.createElement('video');
  video.src = '/video/smoke.mp4';
  video.setAttribute('muted', true);
  video.loop = true;
  video.addEventListener('loadstart', function () {
   this.playbackRate = 0.5;
  });
  video.setAttribute('autoplay', true);
  el.append(video);

  console.log('level: ', level);

  const levelText = document.createElement('div');
  levelText.className = 'level-text';
  el.append(levelText);

  for (let test of level.tests()) {
    levelText.innerHTML += `<div>${test.name}</div>`;
  }

  el.innerHTML += '</div>';

  return el;
};

let curLevel = 0;
export const nextLevel = () => {
  const shuffled = levels.sort( () => .5 - Math.random() );
  curLevel = (curLevel + 1) % levels.length;
  return Level(shuffled[curLevel]);
}


