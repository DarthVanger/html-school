import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #46</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Новий Матеріал: ООП</h2>
      <article>
        <section class="content">
          <h2>Оп и нихуя</h2>
      </section>
    </section>

    <section class="pomodoro">
      <h2>LeetCode Литучка</h2>
      <article data-timer="25">
        <section class="content">
          <h2>Leetcode.com</h2>
          <p>Собсвенно как бі вот, собсвенно вот і все.</p.
        </section>
      </article>
  </section>

  <section class="pomodoro">
      <h2>Стас - Питання по минулим темам</h2>
      <article data-timer="25">
        <section class="content">
        <h2>Питання по Минулим Темам - Стас</h2>
        <p>???</p>
        </section>
      </article>
  </section>
  
  <section class="pomodoro">
    <h2>Нова ТЕМА: LocalStorage</h2>
    <article data-timer="25">
      <section class="content">
      <h2>Оп ии Ниихуя</h2>
      <p>???</p>
      </section>
    </article>
  </section>

  <section class="pomodoro">
    <h2>Нова ТЕМА: деструктуризація МАССИВІВ</h2>
    <article data-timer="25">
      <section class="content">
      <h2>Оп ии Ниихуя</h2>
      <p>???</p>
      </section>
    </article>
  </section>

</div>
`;

export const Lesson46 = () => Lesson({ html });
