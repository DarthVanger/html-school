import { Chapter1 } from './Chapter1.js';
import { ChapterNuclear } from './ChapterNuclear.js';
import { VangersPlayer, resumeMusic } from './VangersPlayer.js';

export const Vangers = (state) => {
  const element = document.createElement('section');
  const student = state.student;
  element.id = 'vangers';

  element.append(VangersPlayer());

  document.body.className = 'vangers-page';

  const introVid = document.createElement('video');
  introVid.id = 'intro-vid';
  introVid.src = '/video/vangers/open.mp4';
  const introVidDuration = 5000;
  const fadeDuration = 1000;
  setTimeout(() => {
      introVid.volume = 0;
  }, 4500);

  introVid.addEventListener('click', () => {
    introVid.play();
    setTimeout(() => {
      introVid.classList.add('fade-out-1s');
      setTimeout(() => {
        introVid.remove();
        resumeMusic();
        video.play();
      }, fadeDuration);
    }, introVidDuration);
  });
  element.append(introVid);

  element.append(Chapter1(state));
  return element;
};
