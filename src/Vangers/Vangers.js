import { chapters } from './chapters/chapters.js';
import { VangersPlayer, resumeMusic } from './VangersPlayer.js';
import { getSavedChapter, saveChapter, setChapterrStep } from './storage.js';

export const Vangers = (state) => {
  const element = document.createElement('section');
  const student = state.student;
  let curChapterNum = getSavedChapter() || 0;
  let curChapter = chapters[curChapterNum];
  let chapterElement;

  element.id = 'vangers';

  console.info('Vangers: showing for student ', student);

  element.append(VangersPlayer());

  document.body.className = 'vangers-page';


  const nextChapter = () => {
    curChapterNum++;
    curChapter = chapters[curChapterNum];
    saveChapter(curChapterNum);
    showChapter(chapterNum);
  }

  const showChapter = (chapterNum) => {
    console.info('Vangers: Show Chapter #' + chapterNum);
    chapterElement?.remove();

    const ChapterComponent = chapters[chapterNum];
    chapterElement = ChapterComponent({ student, onChapterEnd: handleChapterEnd });
    element.append(chapterElement);
  }

  function handleChapterEnd() {
    nextChapter();
  }

  showChapter(curChapterNum);

  return element;
};
