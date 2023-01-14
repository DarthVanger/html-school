import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson 31. Новое Начало.</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>o5 25</h2>

      ${Lety4ka()}

      <article data-timer="5">
        <section class="content">
          <pre class="language-js"><code>
            /**
             * Implement function distance(x, y),
             * which takes (x, y) coordinates of a point,
             * and returns its distance to the Origin.
             */
            
            const d = distance(3, 4);
            console.log(\`d is \${d}\`);
            // prints "d is 5"
          </code></pre>
        </section>
      </article>

    </section>

    <section class="pomodoro">
      <h2>RuSSi4</h2>

      <article>
        <section class="content">
          <figure>
            <img src="/img/russi4.jpg" />
            <figcaption>
              Новенькие
           </figcaption>
        </section>
      </article>

      <article>
        <section class="content">
          <h2>Как переводиться Beetroot?</h2>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson31/beetroot-translate.png" />
            <figcaption>
              Beetroot = Буряк
           </figcaption>
        </section>
      </article>
      
      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson31/beetroot-images.png" />
            <figcaption>
              Beetroot кортинке
           </figcaption>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson31/beetroot-academy.png" />
            <figcaption>
              Академия... БУРЯКА
           </figcaption>
        </section>
      </article>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson31/beetroot-map.png" />
            <figcaption>
              Я там біл 4 года назад)
           </figcaption>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Gepard</h2>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson31/gepard.jpeg" />
          </figure>
         </section>
       </article>
    </section>

    <section class="pomodoro">
      <h2>Game: Objects</h2>

      <article>
        <section class="content">
          <figure>
            <img src="/img/lesson31/game-objects.jpeg" />
          </figure>
         </section>
       </article>
    </section>

    <section class="pomodoro">
      <h2>Unity</h2>

      <article>
        <section class="content">
          <figure>
            <video controls>
              <source src="/video/gamedev/unity-editor-overview.mp4" type="video/mp4" />
            </video>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <p>
            Го погнали шо-то делоем))
          </p>
        </section>
      </article>
    </section>
  </div>
`;

export const Lesson31 = (props) => Lesson({ html, ...props });
