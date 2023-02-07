const getPlayer = () => document.querySelector('#music-player');
import { levelMusic } from './levelMusic.js';

let isPlaying = false;
let curTrack;
let audio;
const getRandomTrack = () => levelMusic[Math.floor(Math.random() * levelMusic.length)];

export const Player = () => {
  const element = document.createElement('div');
  curTrack = getRandomTrack();
  audio = new Audio(curTrack.path);
  element.id = 'music-player';
  audio.load();

  return element;
};

export const playMusic = () => {
  isPlaying = true;
  console.log(`Player: playing track: "${curTrack.title}"`);
  audio.play();

  getPlayer().innerHTML = `
    ${curTrack.title}
  `;
};
