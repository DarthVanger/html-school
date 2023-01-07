import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Banki } from '../../Banki/Banki.js';

export const Lesson = ({ state, html, lessonName }) => {
  const el = document.createElement('div');
  el.className = "lesson";
  let curSection;
  let curSlideIdx;
  el.innerHTML = html;

  const sections = el.querySelectorAll('section.pomodoro');
  sections.forEach((section, idx) => {
    const h2 = section.querySelector('h2');
    const articles = section.querySelectorAll('article');
    articles.forEach(article => {
      article.style.display = 'none';
    });
    section.querySelector('h2').addEventListener('click', () => showSection(section, idx));
  });

  function renderCurSlide() {
    const articles = curSection.querySelectorAll('article');
    articles.forEach((article, idx) => {
      if (idx == curSlideIdx) {
        article.style.display = 'block';
        const min = parseInt(article.getAttribute('data-timer'));
        if (min) {
          article.innerHTML += Timer({ id: 'task-1', min , className: 'task-timer'});
        }
      } else {
        article.style.display = 'none';
      }
    });
  }

  function showSection(sectionEl, idx) {
    sectionEl.innerHTML += Timer({ id: `section-${idx}`, min: 25, className: 'pomodoro-timer'});
    curSection = sectionEl;
    curSlideIdx = 0;
    sections.forEach(section => section.style.display = 'none');
    sectionEl.style.display = 'block';
    const h1 = el.querySelector('h1');
    h1.style.display = 'none';
    const h2 = sectionEl.querySelector('h2');
    h2.style.display = 'none';
    el?.querySelector('.lesson-sections')?.classList?.remove('lesson-sections');
    renderCurSlide();
  }

  document.addEventListener('keydown', (e) => {
    if (e.key == 'n') {
      nextSlide();
    }
    if (e.key == 'p') {
      prevSlide();
    }
  });

  function nextSlide() {
    curSlideIdx++;
    renderCurSlide();
  }

  function prevSlide() {
    curSlideIdx--;
    renderCurSlide();
  }

  el.append(Banki({state, lessonName}));

  return el;
}
