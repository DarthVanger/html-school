import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #57</h1>
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
      <h2>ЖАБОСКРЫБД - ОСНОВЕ</h2>
      <article>
        <section class="content">
	  <h2>ЖАБОСКРЫБД - ОСНОВЕ</h2>
          <h3>{JS} ПЕРМЕННЫЕ</h3>
          <h3>{JS} ФУКЦИИ</h3>
          <h3>{JS} ЦИКЛЕ</h3>
	</section>
      </article>

      <article>
        <section class="content">
          <h2>{JS} ПЕРМЕННЫЕ</h2>
          <figure>
            <img src="img/js-vars.png" style="max-width:100%;height:auto"/>
            <figcaption>
	      Перменные - сохраняють данные в оперативную память
            </figcaption>
          </figure>
	  <pre>
	  <code>
	    let a = "Bob";
            let xuy4ek = true;
	    let chislo_naxyu = 35;
	  </code>
	  </pre>
        </section>
      </article>

      <article>
        <section class="content">
          <h2>{JS} ВТРОЕНІЕ КОМАНДІ (ФУКЦІЇ)</h2>
          <figure>
            <img src="img/js-builtin.jpg" style="max-height: 30%; width: auto;/>
            <figcaption>
	      ВСТРОЕНІЕ ДЖС КОМАНДІ
            </figcaption>
          </figure>
        </section>
      </article>

      <article>
        <section class="content">
          <h2>{JS} ВТРОЕНІЕ КОМАНДІ (ФУКЦІЇ) - ПРЕМЕР</h2>
	  <pre>
	  <code>
	    console.log('Hello World');
	    alert('xuy4ek');
	    document.body.innerHTML = 'hello pidoras gonduras';
	  </code>
	  </pre>
        </section>
      </article>

      <article>
        <section class="content">
          <h2>{JS} ФУКЦЕЇ (СОЗДАННІЕ ПОЛЛЬЗОВАТЕЛЕМ)</h2>
          <figure>
            <img src="img/js-function.webp" style="max-height: 30%; width: auto;"/>
            <figcaption>
	      ЖАБО-ФУНКЦЕЯ - ОНОТОМЕЯ
            </figcaption>
          </figure>
	  <pre>
	  <code>
	    function ymnozhitNaDva(x) {
	      return x * 2;
	    }
	    let y = ymnozhitNaDva(2);
	    console.log(y);
	    // 4
	  </code>
	  </pre>
        </section>
      </article>
    </section>

    <section class="pomodoro">
      <h2>Lety4ka: HELLO WORLD</h2>
      <article>
        ${Lety4ka()}
      </article>

      <article>
        <section class="content">
	  <h2>Lety4ka - HELLO WoRlD</h2>
          <ol>
            <li>Создать <code>index.html</code></li>
            <li>Создать <code>app.js</code></li>
            <li>В <code>index.html</code> прописать <code>body</code> и подключить <code>script</code></li>
            <li>В app.js віполніть команду <code>console.log('hello WORLD')</code></li>
            <li>Запустить Live Server у вс коде</li>
            <li>У браузере F12, CONSOLE</li>
            <li>Увидеть hello WORLD</li>
          </ol>
        </section>
      </article>
    </section>
  </div>
`;

export const Lesson57 = () => Lesson({ html });
