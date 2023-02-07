const getPlayer = () => document.querySelector('#music-player');
import { levelMusic } from './levelMusic.js';
import { getVolume, onVolumeChange } from './Volume.js';

let isPlaying = false;
let curTrack;
let audio;
const getRandomTrack = () => levelMusic[Math.floor(Math.random() * levelMusic.length)];

const getElement = () => document.querySelector('#music-player');
export const Player = () => {
  const element = document.createElement('div');
  curTrack = getRandomTrack();
  audio = new Audio(curTrack.path);
  audio.volume = getVolume();
  element.id = 'music-player';

  onVolumeChange(v => audio.volume = v);

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
   audio.volume = getVolume();
   console.log('set audio volume to ', getVolume());
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
  audio.volume = getVolume();

  resumeMusic();
};
