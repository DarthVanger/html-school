import { getVolume } from './Volume.js';

export const Video = ({src}) => {
  const element = document.createElement('video');
  element.innerHTML = `
    <source src="${src}" type="video/mp4">
  `;
  element.className = 'bg-img';
  element.volume = getVolume();
  console.log('element.volume: ', element.volume);

  //setTimeout(() => {
  //  element.play();
  //});

  return element;
};
