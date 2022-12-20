

import { levels } from './levels.js';
const getSrc = i => `/src/Katakombi/img/wall-${i % 3 + 1}.jpeg`;

export const BgImg = () => {
  const img = document.createElement('img');
  const randIdx = Math.floor(Math.random() * 3);
  img.src = getSrc(randIdx);
  img.className = 'bg-img';
  return img;
};
