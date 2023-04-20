import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #44</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Литучки</h2>

      <article>
        ${Lety4ka()}
      </article>

      <article  data-timer="7">
        <section class="content">
          <h2>SVG Литучка</h2>
          <ol>
            <li>Используйте Гугл</li>
            <li>Нарисуйте круг в верхнем левом углу</li>
            <li>Нарисуйте прямоугольник в нижнем правом угулу</li>
            <li>Нарисуйте хрестик линиями от угла к углу</li>
          </ol>
        </section>
      </article>

      <article data-timer="7">
        <section class="content">
          <h2>createElement Литучка</h2>
          <ol>
            <li>Створіть елемент "article" за допомогою <code>document.createElement()</code></li>
            <li>Дайте цьому елементу <code>className</code></li>
            <li>Дайте цьому елементу <code>innerHTML</code> - будь який текст</li>
            <li>Додайте цей елемент у ДОМ дерево, як чайлда Боді</li>
          </ol>
        </section>
      </article>

  </section>
  <section class="pomodoro">
    <h2>Делоем SPA</h2>

    <article>
      <section class="content">
        <h2>SPA = Single Page Application</h2>
        <ol type="i" style="padding-left: 2.5em">
          <li>Створюємо <code>index.html</code></li>
          <li>Створюємо <code>app.js</code>, підключаємо з <code>type="module"</code></li>
          <li>Виводимо з app.js Hello world у document.body</li>
          <li>Створюємо файл menu.js, який експортує HTML Елемент з будь-яким текстом всередині. Імпортуємо його в app.js і додаємо в body</li>
          <li>Створюємо файл portfolio.js, який експортує HTML Елемент з будь-яким текстом всередині. Імпортуємо його в app.js і додаємо в body</li>
          <li>В menu.js робимо кнопку, по натисненню на яку буде показуватися сторінка Portfolio</li>
          <li>Створюємо файл portfolio.js, який експортує HTML Елемент з будь-яким текстом всередині. Імпортуємо його в app.js і додаємо в body</li>
          <li>В menu.js робимо кнопку, по натисненню на яку буде показуватися сторінка About. А Portfolio має приховуватися коли переходимо на About</li>
          <li>В menu.js робимо кнопку, по натисненню на яку буде показуватися сторінка About. А Portfolio має приховуватися коли переходимо на About</li>
          <li>Створюємо файл pet-projects.js, який експортує HTML Елемент з будь-яким текстом всередині. Імпортуємо його в app.js і додаємо в body</li>
          <li>В menu.js робимо кнопку, по натисненню на яку буде показуватися сторінка Pet Projects. А Portfolio і About має приховуватися коли переходимо на Pet Projects</li>
          <li>Фінальний дебаг і баг фікс
            <ol type="i">
              <li>При загрузці сайту бачимо лише меню</li>
              <li>По натисненню на About кнопку бачимо лише About сторінку (інші сторінки не показуються)</li>
              <li>По натисненню на Portfolio кнопку бачимо лише Portfolio сторінку (інші сторінки не показуються)</li>
              <li>По натисненню на Pet Projects кнопку бачимо лише Portfolio сторінку (інші сторінки не показуються)</li>
            </ol>
          </li>
        </ol>
      </section>
    </article>
  </section>
</div>
`;

export const Lesson44 = () => Lesson({ html });
