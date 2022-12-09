import { levels } from './levels.js';
const getSrc = i => `/src/Katakombi/img/catacombs-${i % 6 + 1}.jpeg`;

export const BgImg = () => {
  const img = document.createElement('img');
  const randIdx = Math.floor(Math.random() * levels.length);
  img.src = getSrc(randIdx);
  img.className = 'bg-img';
  return img;
};
