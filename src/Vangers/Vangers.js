import { Chapter } from './Chapter/Chapter.js';
import { VangersHome } from './VangersHome/VangersHome.js';
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

  const handleChapterClick = () => {
    showChapter(curChapterNum);
  }

  const vangersHomeElement = VangersHome({ onChapterClick: handleChapterClick });
  element.append(vangersHomeElement);
  element.append(VangersPlayer());

  document.body.className = 'vangers-page';


  const nextChapter = () => {
    curChapterNum++;
    curChapter = chapters[curChapterNum];
    saveChapter(curChapterNum);
    showChapter(chapterNum);
  }

  const showChapter = (chapterNum) => {
    vangersHomeElement.remove();
    console.info('Vangers: Show Chapter #' + chapterNum);
    chapterElement?.remove();

    const ChapterComponent = chapters[chapterNum];
    chapterElement = Chapter({ chapter: curChapter, onChapterEnd: handleChapterEnd });
    element.append(chapterElement);
  }

  function handleChapterEnd() {
    nextChapter();
  }

  //showChapter(curChapterNum);

  return element;
};
