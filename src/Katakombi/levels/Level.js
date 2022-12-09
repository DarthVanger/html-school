import { BgImg } from './BgImg.js';
import { FireCircle } from './FireCircle.js';
import { levels } from './levels.js';
export const Level = (level) => {
  const el = document.createElement('article');
  el.className = 'level';
  el.append(BgImg());
  el.append(FireCircle());

  const code = document.createElement('textarea');
  //code.contentEditable = true;
  code.className = 'code';
  el.append(code);

  const getCode = () => document.querySelector('.cur .code');

  setTimeout(() => {
    getCode().focus();
    getCode().addEventListener('keypress', (event) => {
      const fire = document.createElement('img');
      fire.src = '/src/Katakombi/img/fire.gif';
      fire.className = 'fire';
      const lineHeight = 32 * 1.5;
      const l = getCode().selectionStart;
      const c = getCode().value.slice(0, l);
      const newLines = [...c.matchAll(/[\n\r]/g)];
      const newLinesNum = newLines.length;
      let newLineIdx = newLines[newLines.length - 1]?.index || 0;
      let offset = l - newLineIdx;
      if (newLineIdx > 0) {
        offset--;
      }
      const padding = 20;
      fire.style.left = offset * 24.2 + padding;
      fire.style.top = newLinesNum * lineHeight - 8 + padding;
      if (!['Enter', ' '].includes(event.key)) {
        el.append(fire);
      }
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


