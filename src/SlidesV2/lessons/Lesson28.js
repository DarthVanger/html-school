import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';

export const Lesson28 = () => {
  const el = document.createElement('div');
  let curSection;
  let curSlideIdx;
  el.innerHTML = `
    <section class="pomodoro">
      <h2>Objects</h2>

      <article>
        <h1>Уроке #28</h1>
        <section class="content">
          <h2>Погенали )</h2>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson28/za-vstre4y.jpeg" />
          </figure>
          <figcaption>
            За ВстречУ! За УроК!
          </figcaption>
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
      <h2>Game</h2>
    </section>

    <section class="pomodoro">
      <h2>Game</h2>
    </section>

    <section class="pomodoro">
      <h2>Unity</h2>
    </section>

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
        const timer = parseInt(article.getAttribute('data-timer'));
        if (timer) {
          article.innerHTML += Timer(timer);
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
    const h2 = sectionEl.querySelector('h2');
    h2.style.display = 'none';
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
