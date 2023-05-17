import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #48</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Johnny - Go, Go Johnny Go</h2>
      <article data-timer="25">
        <section class="content">
          <h2>Johnny - Go, Go Johnny Go</h2>
          <p>Johnny be good</p>
        </section>
      </article>
    </section>
  </div>
`;

export const Lesson48 = () => Lesson({ html });
