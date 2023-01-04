import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #New #Year #2023 ** !!</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>С Новым Годом!!</h2>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson28/za-vstre4y.jpeg" />
            <figcaption>
              За ВстречУ! За УроК! За Новый Год!
            </figcaption>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <p>Что приозошло за этот год?</p>
        </section>
      </article>

      <article>
        <section class="content">
          <h2>
            HTML ШКОЛА
          </h2>
          <figure>
            <img src="/src/img/school.jpeg" />
            <figcaption>
              НА ВЕНИКЕ
            </figcaption>
          </figure>
        </section>
      </article>


      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson28/za-vstre4y.jpeg" />
            <figcaption>
              Еще по одной??
            </figcaption>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
        <h2>
          МОТИВАЦИЯ
        </h2>
        <figure>
          <img src="/src/img/it-cloud.png" />
          <figcaption>
            ТВОРЧЕСТВО, СОЗДАНИЕ ХУЙНИ
          </figcaption>
        </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <h2>Всем спасибо - План хороший!</h2>
        </section>
      </article>


      <article>
        <section class="content">
        <h2>
          НА ОСТРИЕ РАЗВИТИЯ
        </h2>
        <figure>
          <img src="/src/img/future.jpeg" />
          <figcaption>
            БУДУЩЕЕ ЗА ЭТИМ ДЕРЬМОМ - ДРОНЫ, ХУЕНЫ
          </figcaption>
        </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <h2>
            ЧТО ДЛЯ ЭТОГО НУЖНО
          </h2>
          <figure>
            <img src="/src/img/dro4ka.jpeg" />
            <figcaption>
              ЗАДРОТСВО
            </figcaption>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/src/img/courses.png" />
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/src/img/cplusplus.jpg" />
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/src/img/cplusplus-2.jpg" />
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson28/za-vstre4y.jpeg" />
            <figcaption>
              Еще по одной??
            </figcaption>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <h2>Expectation / Reality</h2>
          <p>
            <a href="/#/expectation-reality">ССЫЛКЕ</a>
          </p>
          <p>
            МЫСЛЕ
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
      <h2>Joystick</h2>
      <article>
        <section class="content">
          <h2>Палочка удовольстивия</h2>
          <p>Joy Stick :)</p>
        </section>
      </article>

      <article data-timer="5">
        <section class="content">
          <pre><code>
            window.addEventListener("gamepadconnected", (event) => {
              alert('Подключился хуесос №' + event.gamepad.index);
            });
          </code></pre>
        </section>
      </article>

      <article>
        <h2>Cat Dog Game</h2>
        <section class="content">
          <p>
            60 раз в сек считываем значение курка, и двигаем кортинке соответсвенно
          </p>
          <p>
            <a href="/catdog">ССЫЛКЕ на КІТ ПЕС ГРУ :)</a>
          </p>
          <p>
            Код для скачки
          </p>
          <p>
            <ul>
              <li>
                <a href="/catdog/index.html">index.html</a>
              </li>
              <li>
                <a href="/catdog/app.js">app.js</a>
              </li>
              <li>
                <a href="/catdog/cat.js">app.js</a>
              </li>
            </ul>
          </p>
        </section>
      </article>

    </section>

    <section class="pomodoro">
      <h2>English speaking club</h2>
      <article>
        <section class="content">
          <figure>
            <video controls>
              <source src="/video/carol-nato.mp4" type="video/mp4" />
            </video>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <h2>Discussion</h2>
          <p>So this is are our allies... NATO POWER...</p>
          <p>Thoughts? :)</p>
        </section>
      </article>

      <article>
        <section class="content">
            <img src="/img/lesson-new-year/new-years-resolutions.jpeg" />
            <figcaption>
              New Year's Resolutions
            </figcaption>
          </figure>
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

export const Lesson29 = () => Lesson({ html });
