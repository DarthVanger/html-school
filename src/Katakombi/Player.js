const getPlayer = () => document.querySelector('#music-player');
import { levelMusic } from './levelMusic.js';

let isPlaying = false;
let curTrackIdx = 0;
let curTrack = levelMusic[0];
let audio;
export const Player = () => {
  const element = document.createElement('div');
  audio = new Audio(curTrack.path);
  element.id = 'music-player';

  return element;
};

export const playMusic = () => {
  isPlaying = true;
  curTrack = [++curTrackIdx];
  audio.play();

  console.log('curTrack.title: ', curTrack);
  getPlayer().innerHTML = `
    ${curTrack.title}
  `;
};
