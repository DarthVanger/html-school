import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #53</h1>
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
      <h2>Lety4ka: chrome extension</h2>
      <article>
        ${Lety4ka()}
      </article>

      <article>
        <section class="content">
          <figure>
            <figcaption>
              Create Chrome Extension that removes suggested videos on youtube  main page
            </figcaption>
            <img src="/img/lesson53/lety4ka.png" />
          </figure>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Tina: що відбувається?..</h2>
      <article>
        <section class="content">
          <h2>TIna: dopovid</h2>
          <p>Improvisation</p>
        </section>
      </article>
    </section>
    
    <section class="pomodoro">
      <h2>The Internet Game</h2>

      <article>
         <section class="content">
           <h2>The Internet Game</h2>
           <ol>
             <li>Візьміть стопку А4</li>
             <li>Розподіліть Ролі:</li>
             <ol>
               <li>Browser Rendering Engine</li>
               <li>Browser</li>
               <li>Server</li>
               <li>Filesystem</li>
             </ol>
             <li>Уявіть що ви - Інторенет!</li>
           </ol>
         </section>
 p     </article>

       <article>
         <section class="content">
           <figure>
             <figcaption>
               Так Виглядає СПРАВЖНІЙ ХТТП РЕКВЕСТ
             </figcaption>
             <img src="/img/lesson53/http2.png" />
           </figure>
         </section>
 p     </article>

       <article>
        <section class="content">
          <figure>
            <figcaption>
              Приклад ХТТП Реквесту
            </figcaption>
            <img src="/img/lesson53/http-example.png" />
          </figure>
        </section>
 p     </article>

       <article>
         <section class="content">
           <figure>
             <figcaption>
               Структура ХТТП Реквесту
             </figcaption>
             <img src="/img/lesson53/http-request-structure-simple.png" />
           </figure>
         </section>
       </article>

       <article>
         <section class="content">
           <figure>
             <figcaption>
               Структура ХТТП РЕквесту.
             </figcaption>
             <img src="/img/lesson53/http-request-structure.jpeg" />
           </figure>
         </section>
       </article>

       <article>
         <section class="content">
            <h2>
                Робимо ХТТП Запит через <code>curl</code> - у Терміналі
            </h2>
            <p>
              <pre></code>
                curl -v google.com
              </code></pre>
              <p>
                Виписуєм ХТТП запит на листочок
              </p>
            </p>
         </section>
       </article>

       <article>
         <section class="content">
           <figure>
             <figcaption>
               ХТТП РЕСПОНСЕ - ВІДПОВІДЬ
             </figcaption>
             <img src="/img/lesson53/http-response-example.png" />
           </figure>
         </section>
       </article>

       <article>
         <section class="content">
           <figure>
             <figcaption>
               ХТТП РЕСПОНСЕ - Стуректура.
             </figcaption>
             <img src="/img/lesson53/http-request-response.jpeg" />
           </figure>
         </section>
       </article>

       <article>
         <section class="content">
            <h2>
                Робимо ХТТП Запит через <code>curl</code> - у Терміналі
            </h2>
            <p>
              <pre></code>
                curl -v google.com
              </code></pre>
              <p>
                Виписуєм ХТТП RESPONSE на листочок
              </p>
            </p>
         </section>
       </article>

       <article>
         <section class="content">
            <h2>
              Граємся - робимо по 5-100 запитів і відповідей
            </h2>
         </section>
       </article>

       <article>
         <section class="content">
            <h2>
                Робимо ХТТП Запит через <code>javascript</code> - у Консолі напалеон.спайс
            </h2>
            <p>
              <pre></code>
                response = await fetch('/')
                console.log(response.status)
              </code></pre>
              <p>
                Смотрим єтот запрос в Network вкладке
              </p>
            </p>
         </section>
       </article>

       <article>
         <section class="content">
            <h2>
                Робимо ХТТП Запит через <code>javascript</code> - у Консолі напалеон.спайс
            </h2>
            <p>
              <pre></code>
                response = await fetch('/ni4ogo')
                console.log(response.status)
              </code></pre>
              <p>
                Смотрим єтот запрос в Network вкладке
              </p>
            </p>
         </section>
       </article>

       <article>
         <section class="content">
            <h2>POST запит - через <code>curl</code></h2>
            <p>
              <pre></code>
                 curl -X POST https://reqbin.com/echo/post/json \\
                  -H 'Content-Type: application/json' \\
                  -d '{"login":"my_login","password":"my_password"}'
              </code></pre>
            </p>
       </article>

       <article>
         <section class="content">
            <h2>POST запит - через <code>JS</code></h2>
            <p>
              <pre></code>
                response = await fetch('https://reqbin.com/echo/post/json', { 
                  method: 'POST',
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    login: "my_login",
                    password: "my_password"
                  }),
                })

                responseData = await response.json()

                console.log('responseData:', responseData)

                console.log('response status:', response.status)
              </code></pre>
            </p>
       </article>

       <article>
         <section class="content">
            <h2>ВСЕ.</h2>
            <p>
              Все.
            </p>
          </section>
       </article>
    </section>


    <section class="pomodoro">
      <h2>Ivan: getters setters</h2>
      <article>
        <section class="content">
          <h2>Hellgamer: dopovid</h2>
          <p>Improvisation</p>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Diomn: Figma?..</h2>
      <article>
        <section class="content">
          <h2>Diomn: dopovid</h2>
          <p>Improvisation</p>
        </section>
      </article>
    </section>


  </div>
`;

export const Lesson53 = () => Lesson({ html });
