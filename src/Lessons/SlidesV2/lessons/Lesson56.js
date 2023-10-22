import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #56</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Stand UP!</h2>
      <article>
        <section class="content">
          <figure>
            <img src="img/standup.jpg" />
            <figcaption>
              Хто шо делал на этой неделе? А на след шо будешь делать??
            </figcaption>
          </figure>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Exam #2</h2>
      <article>
        ${Lety4ka()}
      </article>
    </section>

    <section class="pomodoro">
      <h2>Lety4ka: fetch</h2>
      <article>
        ${Lety4ka()}
      </article>

      <article>
        <section class="content">
          <ol>
            <li>Создать index.html и about.html</li>
            <li>На главной странице сделать запрос на файл about.html</li>
            <li>Отобразить код about.html внутри главной страницы</li>
          </ol>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Lety4ka: filesystem</h2>
      <article>
        ${Lety4ka()}
      </article>

      <article>
        <section class="content">
          <ol>
            <li>Сделать npm init</li>
            <li>указать в package.json "type": "module"</li>
            <li><code>import fs from 'fs/promises'</code></li>
            <li><code>const fileContent = await fs.readFile('about.html')</code></li>
            <li><code>await fs.writeFile('contact.html', '&lt;h1&gt;KONTAKTI&lt;/h1&gt;')</code></li>
            <li><code>await fs.appendFile('contact.html', '&lt;p&gt;phone: 666&lt;l/p&gt;')</code></li>
          </ol>
        </section>
      </article>
    </section>
    
    <section class="pomodoro">
      <h2>Lety4ka: express</h2>
      <article>
        ${Lety4ka()}
      </article>

      <article>
        <section class="content">
          <ol>
            <li><code>npm install express</code></li>
            <li>Google: express, copy hello world code :)</li>
            <li><code>npx nodemon app.js</code></li>
            <li>перевіряєм чи работає</li>
            <li><code>app.get('/hello')</code></li>
            <li>возвращаем любой текст</li>
            <li>делаем запрос с фронтенда через fetch</li>
            <li><code>app.get('/bye')</code></li>
            <li>возвращаем любой текст</li>
            <li>делаем запрос с фронтенда через fetch</li>
            <li><code>app.post('/hello')</code></li>
            <li>возвращаем любой текст</li>
            <li>делаем запрос с фронтенда через fetch</li>
            <li><code>app.delete('/hello')</code></li>
            <li>возвращаем любой текст</li>
            <li>делаем запрос с фронтенда через fetch</li>
          </ol>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Робимо CMS</h2>
      <article>
        <section class="content">
          <h2>Napaleon: Improvisation</h2>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Hellgamer: REST</h2>
      <article>
        <section class="content">
          <h2>Hellgamer: dopovid</h2>
          <p>Improvisation</p>
        </section>
      </article>
    </section>


  </div>
`;

export const Lesson56 = () => Lesson({ html });
