import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson 30 !!1</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Retrospective</h2>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson28/za-vstre4y.jpeg" />
            <figcaption>
              За 30-е Занятие!! За УроК!1
            </figcaption>
          </figure>
        </section>
      </article>
    </section>
  </div>
`;

export const Lesson29 = () => Lesson({ html });
