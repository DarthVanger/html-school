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
    </section>
  </div>
`;

export const Lesson37 = (props) => Lesson({ html, ...props });
