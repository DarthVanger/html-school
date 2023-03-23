const getPlayer = () => document.querySelector('#music-player');
import { Volume, getVolume, onVolumeChange } from './Volume.js';

let isPlaying = false;
let curTrack;
let audio;

const getTrackElement = () => document.querySelector('#music-player #track');
export const Player = ({ playlist } ) => {
  const getRandomTrack = () => playlist[Math.floor(Math.random() * playlist.length)];
  const element = document.createElement('div');
  const trackElement = document.createElement('div');
  trackElement.id = 'track';
  element.append(Volume());
  element.append(trackElement);
  curTrack = getRandomTrack();

  audio = new Audio(curTrack.path);
  audio.volume = getVolume();
  element.id = 'music-player';

  onVolumeChange(v => {
    audio.volume = v;
    document.querySelector('#volume input[type="range"]').value = v;
  });

  trackElement.addEventListener('click', () => {
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

  trackElement.innerHTML = `
     🎵<marquee>${curTrack.title}</marquee>▶️
  `;
  
  return element;
};

export const pauseMusic = () => {
  console.log(`Player: pause track: "${curTrack.title}"`);
  audio.pause();
  isPlaying = false;
  getTrackElement().innerHTML = `
     🎵<marquee>${curTrack.title}</marquee>▶️
  `;
};

export const resumeMusic = () => {
   console.log(`Player: resume track: "${curTrack.title}"`);
   audio.volume = getVolume();
   console.log('set audio volume to ', getVolume());
   audio.play();
   isPlaying = true;

   getTrackElement().innerHTML = `
      🎵<marquee>${curTrack.title}</marquee>⏸︎
   `;
};

export const playRandomTrack = () => {
  curTrack = getRandomTrack();
  console.log(`Player: change track to`, curTrack);
  audio.src = curTrack.path;
  audio.volume = getVolume();

  resumeMusic();
};
