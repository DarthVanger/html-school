import { Chapter1 } from './Chapter1.js';
import { Chapter2 } from './Chapter2.js';
import { ChapterNuclear } from './ChapterNuclear.js';
import { VangersPlayer, resumeMusic } from './VangersPlayer.js';
import { getSavedChapter, saveChapter, setChapterrStep } from './storage.js';

export const Vangers = (state) => {
  const element = document.createElement('section');
  const student = state.student;
  element.id = 'vangers';

  element.append(VangersPlayer());

  document.body.className = 'vangers-page';

  const chapter = getSavedChapter();
  let chapter1;

  const showChapter2 = () => {
    console.info('Vangers: Show Chapter 2');
    chapter1.remove();

    saveChapter(1);
    setChapterrStep(0);
    const chapter2 = Chapter2({ ...state, onChapterEnd: showChapter2 });
    element.append(chapter2);
  }
  
  console.log('chapter:', chapter);
  if (chapter === 0) {
    saveChapter(0);
    chapter1 = Chapter1({ ...state, onChapterEnd: showChapter2 });
    element.append(chapter1);
  }

  if (chapter === 1) {
    saveChapter(1);
    const chapter2 = Chapter2({ ...state, onChapterEnd: showChapter2 });
    element.append(chapter2);
  }


  return element;
};
