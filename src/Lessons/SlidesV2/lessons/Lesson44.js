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
  </div>
`;

export const Lesson44 = () => Lesson({ html });
