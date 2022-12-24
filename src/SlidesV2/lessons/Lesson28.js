import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';

export const Lesson28 = () => {
  const el = document.createElement('div');
  el.className = "lesson";
  let curSection;
  let curSlideIdx;
  el.innerHTML = `
    <h1>Lesson #28</h1>
    <div class="lesson-sections">
      <section class="pomodoro">
        <h2>Objects</h2>

        <article>
          <section class="content">
            <figure>
              <img src="/img/lesson28/za-vstre4y.jpeg" />
              <figcaption>
                За ВстречУ! За УроК!
              </figcaption>
            </figure>
          </section>
        </article>

        <article>
          ${Lety4ka()}
        </article>

        <article data-timer="5">
          <section class="content">
            <ol>
              <li>Create two variables: x and y, and assign any numbers to them.</li>
              <li>Print text "x:" on the screen</li>
              <li>Print the value of variable x on the screen</li>
              <li>Print "&lt;br /&gt;" on the screen</li>
              <li>Print text "y:" on the screen</li>
              <li>Print the value of variable y on the screen</li>
            </ol>
          </section>
        </article>
      </section>

      <section class="pomodoro">
        <h2>Codeacedemy</h2>
      </section>

      <section class="pomodoro">
        <h2>Game #1</h2>
      </section>

      <section class="pomodoro">
        <h2>Game #2</h2>
      </section>

      <section class="pomodoro">
        <h2>Unity</h2>
      </section>
      
      <section class="pomodoro">
        <h2>Feedback</h2>
      </section>
    </div>
  `;

  const sections = el.querySelectorAll('section.pomodoro');
  sections.forEach(section => {
    const h2 = section.querySelector('h2');
    const articles = section.querySelectorAll('article');
    articles.forEach(article => {
      article.style.display = 'none';
    });
    section.addEventListener('click', () => showSection(section));
  });

  function renderCurSlide() {
    const articles = curSection.querySelectorAll('article');
    articles.forEach((article, idx) => {
      if (idx == curSlideIdx) {
        article.style.display = 'block';
        const min = parseInt(article.getAttribute('data-timer'));
        if (min) {
          article.innerHTML += Timer({ id: 'task-1', min });
        }
      } else {
        article.style.display = 'none';
      }
    });
  }

  function showSection(sectionEl) {
    curSection = sectionEl;
    curSlideIdx = 0;
    sections.forEach(section => section.style.display = 'none');
    sectionEl.style.display = 'block';
    console.log('section El: ', sectionEl);
    const h1 = el.querySelector('h1');
    h1.style.display = 'none';
    const h2 = sectionEl.querySelector('h2');
    h2.style.display = 'none';
    el.querySelector('.lesson-sections').classList.remove('lesson-sections');
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

  return el;
}
