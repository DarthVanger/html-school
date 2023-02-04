import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #34. Новое Начало.</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>o5 25</h2>

      ${Lety4ka()}

      <article data-timer="5">
        <section class="content">
          <p>Implement Gatling Gun</p>
          <ol>
            <li>Create new folder, and index.html file</li>
            <li>Add text "hp: 100"</li>
            <li>Add any picture below the text</li>
            <li>When the picture is clicked, hp should decrease by 10</li>
            <li>When hp is 0, show alert "game over"</li>
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
      <h2>Мержим пул реквести</h2>

      <article>
        <section class="content">
          <p>Мержим пул реквести.</p>
          <p>Полчаса не больше - бістренько!!</p>
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
      <h2>Разбиваем игру на файлы: JS МОДУЛИ</h2>

      <article>
        <section class="content">
          <p>Разбиваем игру на файлы: JS МОДУЛИ</p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Новый материал: Цикли - генерация уровней</h2>

      <article>
        <section class="content">
          <p>Делаем игру по очереди по 12.5 мин: подчищаем, удоляем лишнее, упрощаем, приводим в порядок.</p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Делаем игру по 12.5 мин</h2>

      <article>
        <section class="content">
          <p>Делаем игру по очереди по 12.5 мин: подчищаем, удоляем лишнее, упрощаем, приводим в порядок.</p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Делаем игру по 12.5 мин еще раз</h2>

      <article>
        <section class="content">
          <p>Делаем игру по очереди по 12.5 мин: подчищаем, удоляем лишнее, упрощаем, приводим в порядок.</p>
        </section>
      </article>
    </section>

  </div>
`;//.replaceAll(/([<]code[>][^<]+)[<]/g, `\$1\&lt;`).replaceAll(/([<]code[>][^>]+)[>]/g, `\$1&gt;`);

export const Lesson34 = (props) => Lesson({ html, ...props });
