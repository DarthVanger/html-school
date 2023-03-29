import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #31. Новое Начало.</h1>
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

    <article>
      <h2>Code<h2>
      <section class="content">
        <p>
          <big><b>
            <a href="/gepard/index.html">ССылке на коде</a>
          </b></big>
        </p>

        <pre class="language-html"><code>
// File: index.html

&lt;html&gt;

  &lt;head&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
  &lt;head&gt;

  &lt;body>
    &lt;div id="graph"&gt;
      &lt;div id="xuy4ek"&gt;&lt;div&gt;
      &lt;div id="bullet"&gt;b&lt;div&gt;
    &lt;div&gt;
  &lt;body&gt;

  &lt;script src="app.js"&gt;&lt;script&gt;
&lt;/html&gt;

        </code></pre>

        <pre class="language-css"><code>
// File: style.css

body {
  margin: 0;
  padding: 30px;
}

#graph {
  position: relative;
  border: solid red 1px;
  background: gray;
}

#bullet {
  position: absolute;
  top: -30px;
  left: -30px;
  background: black;
  width: 30px;
  height: 30px;
}

#xuy4ek {
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 400px;
  background: aqua;
}
        </code></pre>

        <pre class="language-css"><code>
// File: app.js
          
console.log('app.js xuyyyyyyyy');

fps = 1;

const bullet = document.querySelector('#bullet');

let bulletX = 0;
let bulletY = 0;
let bulletWidth = 30;
let bulletHeight = 30;

// 10px per fps
const Va = 10;

// 50px per fps or
const Vx = 30;
const Vy = 40;

const point = {
  x: 300,
  y: 400,
};

// Math.hypot = Sqrt(x^2 + y^2)
const dlina = Math.hypot(point.x, point.y);
const px = point.x / dlina;
const py = point.y / dlina;

console.log(\`px is: \${px}, py is: \${py} \`);

console.log('screen with is : ', screen.width);
console.log('steps : ', point.x / Vx);
console.log('time : ', 10 / fps + 'sec');

function step() {
  bulletX += Vx;
  bulletY += Vy;
  const bottomRightCornerX = bulletX - bulletWidth;
  const bottomRightCornerY = bulletY - bulletHeight;
  bullet.style.left = bottomRightCornerX + 'px';
  bullet.style.top = bottomRightCornerY + 'px';
}

setInterval(step, 1000 / fps);


        </code></pre>
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
`;//.replaceAll(/([<]code[>][^<]+)[<]/g, `\$1\&lt;`).replaceAll(/([<]code[>][^>]+)[>]/g, `\$1&gt;`);

export const Lesson31 = (props) => Lesson({ html, ...props });
