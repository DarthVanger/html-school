import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #35.</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Warm Up</h2>

      <article data-timer="5">
        <section class="content">
          <figure>
            <img src="/img/lesson28/za-vstre4y.jpeg" />
            <figcaption>
              За 35-е Занятие!! За УроК!1
            </figcaption>
          </figure>
        </section>
      </article>

      <article data-timer="5">
        <section class="content">
          <figure>
            <img src="/src/img/school.jpeg" />
            <figcaption>
              HTML ШКОЛА НА ВЕНИКЕ - Впечатления, мысли
            </figcaption>
          </figure>
        </section>
      </article>

      <article data-timer="5">
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
          <h2>Ретроспектива - ОНАЛез покращень спустя 5 недель</h2>
        </section>
      </article>

      <article data-timer="5">
        <section class="content">
          <figure>
            <img src="/img/lesson30/retro.png" />
            <figcaption>
              <a href="https://miro.com/welcomeonboard/ZGVKaWlucEZaT21uM3R5b2RibVJPSERWMU5PWGltZW1OWE4xaVJVaFp2NU8wOUp5Q2dFUzB4cWUzdVJXTEdyZnwzMDc0NDU3MzQ5NDM5MDU5OTU4fDI=?share_link_id=467555990444" target="_blank">Miro Invite Link</a>
           </figcaption>
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
      <h2>o5 25</h2>

      ${Lety4ka()}

      <article data-timer="5">
        <section class="content">
          <p>Implement Something :)</p>
          <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
          </ol>
        </section>
      </article>

    </section>

    <section class="pomodoro">
      <h2>Unity</h2>

      <article>
        <section class="content">
          <figure>
            <video controls>
              <source src="/video/gamedev/unity-editor-overview.mp4" type="video/mp4" />
            </video>
          </figure>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Оналез Доски: что по задачам за 2 недели.</h2>

      <article data-timer="25">
        <section class="content">
          <p>Оналез Доски: что по задачам за 2 недели.</p>
          <p>Планчік на след 2 недели</p>
          <p>Мержим пул реквести, якщо є час</p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>English Karaoke</h2>

      <article>
        <section class="content">
          <p>СНАЧАЛО ПЕРЕВОДІМ, А ПОТОМ ПОЕМ</p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Новый материал: Цикли - генерация уровней</h2>

      <article>
        <section class="content">
          <p>while...</p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Делаем игру по 12.5 мин</h2>

      <article>
        <section class="content">
          <p>Делаем игру по очереди по 12.5 мин: подчищаем, удоляем лишнее, упрощаем, приводим в порядок.</p>
          <p>Спрощуємо Дімона код для Гатлінг гану</p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Делаем игру по 12.5 мин еще раз</h2>

      <article>
        <section class="content">
          <p>Делаем игру по очереди по 12.5 мин: подчищаем, удоляем лишнее, упрощаем, приводим в порядок.</p>
          <p>Спрощуємо Дімона код для Гатлінг гану</p>
        </section>
      </article>
    </section>

  </div>
`;//.replaceAll(/([<]code[>][^<]+)[<]/g, `\$1\&lt;`).replaceAll(/([<]code[>][^>]+)[>]/g, `\$1&gt;`);

export const Lesson35 = (props) => Lesson({ html, ...props });
