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

        <article data-timer="5">
          <section class="content">
            <ol>
              <li>Create object named "point", which has two properties: x and y. Assign any numbers to point.x and point.y</li>
              <li>Print text "point.x" on the screen</li>
              <li>Print the value of point.x on the screen</li>
              <li>Print "<br />" on the screen</li>
              <li>Print text "point.y:" on the screen</li>
              <li>Print the value of point.y on the screen</li>
            </ol>
          </section>
        </article>

        <article data-timer="5">
          <h2>ОНАЛЕЗ</h2>
          <section class="content">
            <p>
              Сравниваем коды.
            </p>
            <p>
              В чем разница?
            </p>
          </section>
        </article>

        <article data-timer="5">
          <h2>Добавляем height, width</h2>
          <section class="content">
            <p>
              Добавляем в первое зоданее height, width.
            </p>
            <p>
              Во второе задание добавляем point.height, point.width.
            </p>
          </section>
        </article>

        <article data-timer="5">
          <h2>Добавляем вторую точку</h2>
          <section class="content">
            <p>
              Добавляем в первое зоданее еще 4 переенных для второй точки.
            </p>
            <p>
              Во второе задание добавляем обьект point2, с координатами и розмером.
            </p>
          </section>
        </article>

        <article data-timer="5">
          <h2>ОНАЛЕЗ</h2>
          <section class="content">
            <p>
              Сравниваем коды.
            </p>
            <p>
              В чем разница?
            </p>
          </section>
        </article>

        <article>
          <section class="content">
            <p>
              Все нахуй короч)
            </p>
          </section>
        </article>
      </section>

      <section class="pomodoro">
        <article>
          <h2>Codeacedemy</h2>
          <section class="content">
            <p>
              Go домашку :)
            </p>
          </section>
        </article>
      </section>

      <section class="pomodoro">
        <h2>Game #1</h2>
        <article>
          <section class="content">
            <p>
              Игра го)
            </p>
            <p>
              renderEnemy делает 1 функцию вместо 3
            </p>
          </section>
        </article>
      </section>

      <section class="pomodoro">
        <h2>Game #2</h2>
        <article>
          <section class="content">
            <p>
              Го погнали шо-то делоем))
            </p>
          </section>
        </article>
      </section>

      <section class="pomodoro">
        <h2>Unity</h2>
        <figure>
          <video>
            <source src="/video/gamedev/unity-editor-overview.mp4" type="video/mp4" />
          </video>
          <figcaption>
            За ВстречУ! За УроК!
          </figcaption>
        </figure>
        <article>
          <section class="content">
            <p>
              Го погнали шо-то делоем))
            </p>
          </section>
        </article>
      </section>
      
      <section class="pomodoro">
        <h2>Feedback</h2>
      </section>
    </div>
  `;

  const sections = el.querySelectorAll('section.pomodoro');
  sections.forEach((section, idx) => {
    const h2 = section.querySelector('h2');
    const articles = section.querySelectorAll('article');
    articles.forEach(article => {
      article.style.display = 'none';
    });
    section.addEventListener('click', () => showSection(section, idx));
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

  function prevSlide() {
    curSlideIdx--;
    renderCurSlide();
  }

  return el;
}
