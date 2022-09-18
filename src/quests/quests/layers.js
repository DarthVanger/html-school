const id = 'layers';

const story = `
  <h2>Слои</h2>
  <figure>
    <video controls>
      <source src="/video/game-layers-example.mp4" type="video/mp4" />
    </video>
    <figcaption>
      Премер как слои в игре) Димон нашел)
      <a href="https://www.youtube.com/watch?v=U8lhUkWVvfc">
        https://www.youtube.com/watch?v=U8lhUkWVvfc
      </a>
    </figcaption>
  </figure>
`;

const code = `
<style>
</style>

<img id="moscow" src="/img/moscow.png">
<img id="water" src="/img/water.png">
<img id="spaceship" src="/img/spaceship.png">
`;

export const steps = [
  {
    task: `
<p>Ноченаем с того что у нас есть 3 кортинке</p>
<p>На даный момент они отображаются дефолтно - друг под другом, и в оригинальном размере.</p>
<p>Наша цель - отобразить кортинке друг ПОВЕРХ друга - т.е. СЛОЯМИ</p>
<p>Для этого в style уписуем:</p>
<pre><code>
img {
  position: absolute;
}
</code></pre>
`,
    check: `Уписано <code>img { position: absolute; }</code> в <code>&lt;style&gt;</code>`,
    regexp: /<style>[^<]*img\s*{[^}]*position:\s*absolute;[^}]*}[^<]*<[/]style>/,
  },
  {
    task: `
<p>Изменилось что-то?</p>
<p>Попробуй еще раз без <code>position: absolute;</code>, и снова с ним - что меняется?</p>
<p>Пояснение:
<ol>
<li>ДО ЭТОГО картинки рисовались друг ПОД другом</li>
<li>ТЕПЕРТЬ кортинке рисуются друг ПОВЕРХ друга</li>
<li>ПЕРВЫМ рисуется ПЕРВЫЙ <code>&lt;img&gt;</code> в докУменте</li>
<li>Следующие <code>&lt;img&gt;</code> рисуются ПОВЕРХ ПРЕДЫДУЩИХ</li>
<li>ПОЭТОМУ мы видим SPACESHIP поверх всех остальных картинок - он в докУменте последний, поэтому поверх всего.</li>
</ol>
</p>
<p>
  Теперь довай делать движение)
</p>
<p>Сделаем анимацию через css <code>@keyframes</code></p>
<p>Уписуй :) в <code>&lt;style&gt;</code> пустой кифреймс</p>
<pre><code>
&lt;style&gt;
@keyframes motion {}
img {
  position: absolute;
}
&lt;/style&gt;
</code></pre>
`,
    check: `Уписано <code>@keyframes motion {}</code> в <code>&lt;style&gt;</code>`,
    regexp: /<style>[^<]*@keyframes\s+motion\s*{[^}]*}[^<]*<[/]style>/,
  },
  {
    task: `
<p>Поскольку наш <code>@keyframes motion {}</code> пустой - ничего не поменялось, ничего не происходит.</p>
<p>Пока что мы просто объявили анимацию под названием <code>motion</code></p>
<p>Далее внутри кифреймов пишем что именно даная анимация будет делать.</p>
<p>Для этого нужно описать минимум 2 состояния: <code>0% {}</code> и <code>100% {}</code></p>
<p>В каждом состоянии мы пишем КАКИЕ стили должны быть в НАЧАЛЕ анимации в КОНЦЕ анимации (ноль и сто процентов)</p>
<p>Итак, вписуем что будет в НАЧАЛЕ анимации - <code>0% {}</code></p>
<p>Вначале мы хотим отступ слева ноль - как щас у нас и есть по дефолту</p>
<pre><code class="language-css">
@keyframes motion {
  0% {
    left: 0;
  }
}
img {
  position: absolute;
}
</code></pre>
`,
    check: `Уписано <code>0% { left: 0 }</code> в <code>@keyframes</code>`,
    regexp: /0%\s+{\s*left:\s*\d+\s*[^}]*}/,
  },
  {
    task: `
<p>Теперь вписуем 100% - что должно быть В КОНЦЕ анимации</p>
<pre><code class="language-css">
@keyframes motion {
  0% {
    left: 0;
  }
  100% {
    left: -300;
  }
}
img {
  position: absolute;
}
</code></pre>
`,
    check: `Уписано <code>100% { left: -300 }</code> в <code>@keyframes</code>`,
    regexp: /100%\s+{\s*left:\s*-\s*300\s*[^}]*}/,
  },
  {
    task: `
<p>Хорош! Анимация готова!</p>
<p>Хотя по-прежнему еще ничего не происходит)</p>
<p>Последний шаг: юзаем анимацию для нашего фона</p>
<p>В <code>&lt;style&gt;</code> уписуем еще для <code>#moscow</code> нашу анимацию <code>animation: motion 5s;</code></p>
<pre><code class="language-css">
@keyframes motion {
  0% {
    left: 0;
  }
  100% {
    left: -300;
  }
}

#moscow {
  animation: motion 5s;
}
</code></pre>
`,
    check: `Уписано <code>#moscow { animation: motion 5s; }</code> в <code>&lt;style&gt;</code>`,
    regexp: /#moscow\s*{[^}]*animation:\s*motion\s+5s[^;]*;[^}]*}/,
  },
  {
    task: `
<p>Урааа! Москва полетела!!1 :)</p>
<p>Лайхак: дописываем еще к анимации <code>infinite alternate</code></p>
<p><code>infinite</code> - англ. бесконечно - зациклить анимацию бесконечно.</p>
<p><code>alternate</code> - лат. "alternis" - "туда-сюда" - при зацикливании запускаем анимацию сначала вперед, а затем назад, потом снова вперед, потом назад... :)</p>
<pre><code class="language-css">
#moscow {
  animation: motion 5s infinite alternate;
}
</code></pre>
`,
    check: `Уписано <code>#moscow { animation: motion 5s; }</code> в <code>&lt;style&gt;</code>`,
    regexp: /#moscow\s*{[^}]*animation:\s*motion\s+5s infinite alternate[^;]*;[^}]*}/,
  },
  {
    task: `
<p>Теперь Москва должна летать туда-сюда каждые 5 сек - есть токое??))</p>
<p>Далее анимируем все остальное!</p>
<p>Но, с другой скоростью!</p>
<p>Представь как в Поезде тудух-тудух - деревья быстра едут, а вдали хуйня - медлеено - задни й план.</p>
<p>Так и тут - Москва - самый Задний План - анимируется 5 сек.</p>
<p>А остальное сделаем быстрее - 3 сек допустем)</p>
<pre><code class="language-css">
#water {
  animation: motion 3s infinite alternate;
}
#moscow {
  animation: motion 5s infinite alternate;
}
</code></pre>
`,
    check: `Уписано <code>#water { animation: motion 3s; }</code> в <code>&lt;style&gt;</code>`,
    regexp: /#water\s*{[^}]*animation:\s*motion\s+3s infinite alternate[^;]*;[^}]*}/,
  },
  {
    task: `
<p>Ну шо, ебенится и Москва, и Вода - Туда - Суда?? 🤣</p>
<p>Наконец, анимируем Корабель!</p>
<p>Хай летит в течении 6 сек!</p>
<p>НО: Кортинке у нас летят в МИНУС 300 (отсоси у тракториста ;)</p>
<p>А Корабель должен лететь в ПЛЮС (вправо - отступ left должен быть положительный)</p>

<p>Поэтому нам нужно сделать новую онемацею Т_Т</p>
<p>Т.е. новый <code>@keyframes {}</code>, который будет анимировать кортинке не в ММИНУС, а в ПЛЮС</p>
<p>Уписуем...</p>
<pre><code class="language-css">
@keyframes motion-right {
  0% {
    left: 0;
  }
  100% {
    left: 333;
  }
}
</code></pre>
`,
    check: `Уписано <code>@keyframes motion-right { 0% { ... } 100% { ... } }</code> в <code>&lt;style&gt;</code>`,
    regexp: /@keyframes\s+motion-right\s*{\s*0%\s*{\s*left:\s*0;\s*}\s*100%\s*{\s*left:\s*\s*333\s*[^}]*}/,
  },
  {
    task: `
<p>Юзаем нашу новую онемацию под нозванеем <code>motion-right</code></p>
<p>Уписуем...</p>
<pre><code class="language-css">
#spaceship {
  animation: motion-right 6s infinite alternate;
}
</code></pre>
`,
    check: `Уписано <code>#spaceship { animation: motion-right 6s infinite alternate; }</code> в <code>&lt;style&gt;</code>`,
    regexp: /#spaceship\s*{[^}]*animation:\s*motion-right\s+6s infinite alternate[^;]*;[^}]*}/,
  },
];

const skills = ['position-absolute', 'css-img', 'css', 'animation', '@keyframes'];

export default {
  story,
  code,
  steps,
  skills,
  id,
  status: 'homework',
};
