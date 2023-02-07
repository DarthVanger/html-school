const getPlayer = () => document.querySelector('#music-player');
import { levelMusic } from './levelMusic.js';

let isPlaying = false;
let curTrack;
let audio;
const getRandomTrack = () => levelMusic[Math.floor(Math.random() * levelMusic.length)];

const getElement = () => document.querySelector('#music-player');
export const Player = () => {
  const element = document.createElement('div');
  curTrack = getRandomTrack();
  audio = new Audio(curTrack.path);
  audio.volume = 0.5;
  element.id = 'music-player';
  audio.load();

  element.addEventListener('click', () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      resumeMusic();
    }
  });

  audio.addEventListener('ended', () => {
    console.log('audio ended, playing next one');
    playRandomTrack();
  });
  
  return element;
};

export const pauseMusic = () => {
   console.log(`Player: pause track: "${curTrack.title}"`);
  audio.pause();
  isPlaying = false;
  getElement().innerHTML = `
     🎵<marquee>${curTrack.title}</marquee>▶️
  `;
};

export const resumeMusic = () => {
   console.log(`Player: resume track: "${curTrack.title}"`);
   audio.play();
   isPlaying = true;

   getElement().innerHTML = `
      🎵<marquee>${curTrack.title}</marquee>⏸︎
   `;
};

export const playRandomTrack = () => {
  console.log(`Player: change track to a random one`);
  curTrack = getRandomTrack();
  audio.src = curTrack.path;

  resumeMusic();
};
