import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson 30 !!1</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Warm Up</h2>

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

      <article>
        <section class="content">
          <figure>
            <video controls>
              <source src="/video/carol-nato.mp4" type="video/mp4" />
            <figcaption>
              С Рождеством от НАТО
            </figcaption>
            </video>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <h2>Discussion</h2>
          <p>So this is are our allies... NATO POWER...</p>
          <p>Thoughts? :)</p>
          <p>And yeah, Merry Christmas!!</p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Retrospective</h2>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson30/retro.png" />
            <figcaption>
              <a href="https://miro.com/welcomeonboard/ZGVKaWlucEZaT21uM3R5b2RibVJPSERWMU5PWGltZW1OWE4xaVJVaFp2NU8wOUp5Q2dFUzB4cWUzdVJXTEdyZnwzMDc0NDU3MzQ5NDM5MDU5OTU4fDI=?share_link_id=467555990444" target="_blank">Miro Invite Link</a>
           </figcaption>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Gepard</h2>
    </section>

    <section class="pomodoro">
      <h2>Game: Objects</h2>
    </section>
  </div>
`;

export const Lesson30 = () => Lesson({ html });
