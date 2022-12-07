const element = document.createElement('article');
element.id = 'catacombs';
export const Katakombi = () => {
  const getSrc = i => `/src/Katakombi/img/catacombs-${i % 6 + 1}.jpeg`;

  const Level = (i) => {
    const el = document.createElement('div');
    el.className = 'level';
    const img = document.createElement('img');
    el.append(`Level ${i}`);
    el.append(img);
    img.src = getSrc(i);
    return el;
  }

  const levels = document.createElement('div');
  levels.className = 'levels';
  element.append(levels);

  let images = [];
  let curLevel = 1;
  for (let i=1; i<=9; i++) {
    const level = Level(i);
    levels.append(level);
    if (i == curLevel + 1) {
      //level.className = 'cur';
    }
    images.push(level);
  }

  music();

  function nextLevel() {
    console.log('next level');
    levels.classList.remove(`p-${curLevel}`);
    curLevel++;
    levels.classList.add(`p-${curLevel}`);
  }

  function getCurImg() {
    return images[i];
  }

  document.body.addEventListener('click', nextLevel);

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
