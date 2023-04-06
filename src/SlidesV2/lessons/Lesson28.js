import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
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
      <h2>Codeacedemy</h2>
      <article>
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
      <article>
        <section class="content">
          <p>Фидек за занятие и годд</p>
        </section>
      </article>
    </section>
  </div>
`;

export const Lesson28 = () => Lesson({ html });
