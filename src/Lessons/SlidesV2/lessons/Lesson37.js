import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #37.</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Warm Up</h2>

      <article>
        ${Lety4ka()}
      </article>

      <article data-timer="7">
        <section class="content">
          <p>
            Написать функцию say, которая принимает текст и печатает его в документ. Вызвать эту фукнцию 3 раза с разным текстом.
          </p>
        </section>
      </article>

      <article>
        ${Lety4ka()}
      </article>

      <article data-timer="7">
        <section class="content">
          <p>
            Создать переменную, и присвоить ей число. Написать условие: если эта переменная больше 25, печатаем текст "много". Если меньше или равно 25 - печатаем текст "мало".
          </p>
        </section>
      </article>

      <article>
        ${Lety4ka()}
      </article>

      <article data-timer="7">
        <section class="content">
          <p>
            С помощью цикла while вывести на экран числа по порядку от 1000 до 0.
          </p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Ысторыя Ынтэрэнетов</h2>

      <article>
        <section class="content">
          <figure>
            <video controls>
              <source src="/video/lesson37/atnt.webm" type="video/webm" />
            </video>
            <figcaption>
              Реклама AT&T хз какого года :)
              <a href="https://www.youtube.com/watch?v=2kfIFDX9kE4" target="_blank">(YouTube)</a>
            </figcaption>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson37/brendan-eich.jpeg" />
            <figcaption>
              Хто это?
            </figcaption>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson37/wiki.png" />
            <figcaption>
              Хто это?
            </figcaption>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
            <p>На что Javascript больше похож - на Java или на C?</p>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <video controls>
              <source src="/video/lesson37/interview.mp4" type="video/mp4" />
            </video>
            <figcaption>
              Brendan Eich - Inventor of JavaScript <a href="https://www.coursera.org/learn/internet-history/lecture/BMfdW/brendan-eich-inventor-of-javascript" target="_blank">(Coursera)</a>
            </figcaption>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson37/brave.png" />
            <figcaption>
              Brave Browser <a href="https://en.wikipedia.org/wiki/Brave_(web_browser)">Wiki</a>
            </figcaption>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson37/chromium-chem.png" />
            <figcaption>
              Chromium
            </figcaption>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson37/chromium.png" />
            <figcaption>
              Chromium <a href="https://en.wikipedia.org/wiki/Chromium_(web_browser)">Wiki</a>
            </figcaption>
          </figure>
        </section>
      </article>

    </section>

    <section class="pomodoro">
      <h2>Синтоксис</h2>

      <article>
        ${Lety4ka()}
      </article>

      <article data-timer="7">
        <section class="content">
          <ol>
            <li>Написать пустую фукнцию</li>
            <li>Написать пустой if</li>
            <li>Написать пустой while</li>
          </ol>
        </section>
      </article>

      <article>
        <section class="content">
          <p>В чем разница в синтоксисе функции, if, и while?
        </section>
      </article>

      <article>
        <section class="content">
          <a href="/#/quiz">Экзамен</a>
        </section>
      </article>
    </section>
  </div>
`;

export const Lesson37 = (props) => Lesson({ html, ...props });
