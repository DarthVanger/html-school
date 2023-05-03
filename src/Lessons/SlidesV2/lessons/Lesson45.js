import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #45</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>document.cretateElement() / SPA Литучка</h2>
      <article  data-timer="25">
        <section class="content">
        <h2>document.cretateElement() / SPA Литучка</h2>
          <ol>
            <li>
              Создать новую папку: <code>mkdir lesson45</code>
            </li>
            <li>
              Добавить Квадратную кнопку ПЛЮС ( + )
            </li>
            <li>
              Коли кнопка клік - додати зліва від кнопки СЛОВО (будь-яке, напр. 'хуг4ек')
            </li>
            <li>
              Кнопку ПЛЮС можна натискати Багато Разів (10 або 20 напр.).
            </li>
            <li>
              Якщо натиснути на слово - в нього змінюється бекграунд-колор (фоновий колір)
            </li>
            <li>
              При наведенні на слово, курсор перетворюється на pointer (тобто Палець такий)
            </li>
          </ol>
        </section>
      </article>
  </section>

  <section class="pomodoro">
      <h2>React Литучка</h2>
      <article  data-timer="25">
        <section class="content">
        <h2>React Литучка</h2>
          <ol>
            <li>
              Создать новое Реакт приложение: <code>npx create-react-app lesson45-react</code>
            </li>
            <li>
              Добавить Квадратную кнопку ПЛЮС ( + )
            </li>
            <li>
              Коли кнопка клік - додати зліва від кнопки СЛОВО (будь-яке, напр. 'хуг4ек')
            </li>
            <li>
              Кнопку ПЛЮС можна натискати Багато Разів (10 або 20 напр.).
            </li>
            <li>
              Якщо натиснути на слово - в нього змінюється бекграунд-колор (фоновий колір)
            </li>
            <li>
              При наведенні на слово, курсор перетворюється на pointer (тобто Палець такий)
            </li>
          </ol>
        </section>
      </article>
  </section>

</div>
`;

export const Lesson45 = () => Lesson({ html });
