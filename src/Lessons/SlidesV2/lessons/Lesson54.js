import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #54</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Stand UP!</h2>
      <article>
        <section class="content">
          <h2>Stand UP!</h2>
          <p>Хто шо делал на этой неделе? А на след шо будешь делать??</p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Lety4ka: http requests</h2>
      <article>
        ${Lety4ka()}
      </article>

      <article>
        <section class="content">
          <ol>
            <li>Написать текстом простейший HTTP запрос на любой сайт</li>
            <li>Написать текстом простейший HTTP ответ</li>
            <li>Сделать HTTP запрос с помощью <code>curl</code> на IP 142.93.238.74</li>
            <li>Сделать HTTP запрос с помощью <code>Javascript</code> на IP 142.93.238.74</li>
          </ol>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Tina: Promise, async await</h2>
      <article>
        <section class="content">
          <h2>TIna: dopovid</h2>
          <p>Improvisation</p>
        </section>
      </article>
    </section>


  </div>
`;

export const Lesson54 = () => Lesson({ html });
