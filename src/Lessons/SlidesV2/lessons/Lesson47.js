import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #47</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Lety4ka: create array of 10 images and show them on the screen</h2>
      <article data-timer="25">
        <section class="content">
          <h2>Lety4ka</h2>
          <p>Lety4ka: create array of 10 images and show them on the screen</p>
        </section>
      </article>
  </section>

  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Lety4ka: create array of 3 words, and print them using loop</h2>
      <article data-timer="25">
        <section class="content">
          <h2>Lety4ka</h2>
          <p>Lety4ka: create array of 3 words, and print them using loop</p>
        </section>
      </article>
  </section>

  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Lety4ka: print word on screen, on click</h2>
      <article data-timer="25">
        <section class="content">
          <h2>Lety4ka</h2>
          <p>Lety4ka: print word on screen, on click</p>
        </section>
      </article>
  </section>

  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Lety4ka: print 10 words using loop (without array)</h2>
      <article data-timer="25">
        <section class="content">
          <h2>Lety4ka</h2>
          <p>Lety4ka: print 10 words using loop (without array)</p>
        </section>
      </article>
  </section>
</div>
`;

export const Lesson47 = () => Lesson({ html });
