import { Chapter1 } from './Chapter1.js';
import { Chapter2 } from './Chapter2.js';
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
  //element.append(introVid);
  
  const showChapter2 = () => {
    const chapter2 = Chapter2({ ...state, onChapterEnd: showChapter2 });
    element.append(chapter2);
  }

  const chapter1 = Chapter1({ ...state, onChapterEnd: showChapter2 });
  element.append(chapter1);

  return element;
};
