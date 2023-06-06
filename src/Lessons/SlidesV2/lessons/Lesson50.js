import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #50</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>УРОКЕ #50!!!</h2>
      <article>
        <section class="content">
          <h2>Урок №50 - обсуждения, впечатления</h2>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>function as object property</h2>
      <article>
        <section class="content">
          <h2>function as object property</h2>
          <p>Improvisation</p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Передача вкладеного обʼєкту як параметр фукції</h2>
      <article>
        <section class="content">
          <h2>Передача вкладеного обʼєкту як параметр фукції</h2>
          <p>Improvisation</p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Exam #2</h2>
      <article>
        <section class="content">
          <h2>Exam #2</h2>
          <a href="#/exam/2">Exam #2 Link</a>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Chrome Extensions Part 1</h2>
      <article>
        <section class="content">
          <h2>Tutorial from Google</h2>
          <a href="https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/">Tutorial From Google Link</a>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Chrome Extensions Part 2</h2>
      <article>
        <section class="content">
          <h2>Another tutorial ?</h2>
          <a href="https://medium.com/coding-in-simple-english/how-to-create-chrome-extension-7dd396e884ef">Medium Tutorial</a>
        </section>
      </article>
    </section>
  </div>
`;

export const Lesson50 = () => Lesson({ html });
