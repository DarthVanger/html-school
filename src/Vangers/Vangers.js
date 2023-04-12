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
  const vangersRoute = '#/vangers';
  let route = getRoute();

  const showChapter = (chapterNum) => {
    console.info('Vangers: Show Chapter #' + chapterNum);

    const chapter = chapters[chapterNum];
    const chapterElement = Chapter({ chapter, onChapterEnd: handleChapterEnd });
    pageContainer.append(chapterElement);
  }

  const handleChapterClick = (chapter) => {
    const chapterNum = chapters.indexOf(chapter);
    setRoute('/chapter/' + chapterNum);
    showChapter(chapterNum);
  }

  const pageContainer = document.createElement('page-container');
  element.append(pageContainer);

  showPage(route);

  function setRoute(r) {
    route = r;
    location.hash = vangersRoute + route;
  }

  function getRoute() {
    return location.hash.replace(vangersRoute, '') || '/';
  }

  element.append(VangersPlayer());
  console.info('Vangers: show route', route);

  element.id = 'vangers';

  function showPage(route) {
    pageContainer.innerHTML = '';
    const chapterRouteRegexp = /chapter\/(\d+)/;

    if (route === '/') {
      console.info('Vangers: show home page');
      pageContainer.append(VangersHome({ onChapterClick: handleChapterClick }));
    }

    if (chapterRouteRegexp.test(route)) {
      const urlChapterNum = route.match(chapterRouteRegexp)[1];
      showChapter(urlChapterNum);
    }
  }

  console.info('Vangers: showing for student ', student);

  document.body.className = 'vangers-page';

  const nextChapter = () => {
    curChapterNum++;
    curChapter = chapters[curChapterNum];
    saveChapter(curChapterNum);
    showChapter(curChapterNum);
  }


  function handleChapterEnd() {
    nextChapter();
  }

  return element;
};
