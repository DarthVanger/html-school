const id = 'conditionals';

const code = `
<h1>Conditionals</h1>

<script>
  
</script>
`;

const story = `
  <h2>УС-ЛОВЕЯ (ЛО-ГЕКА)</h2>

  <figure>
    <video controls>
      <source type="video/mp4" src="/video/conditionals-lecture.mp4" />
    </video>
    <figcaption>
      Твоя Бабуля объясняет как в JavaScript делается Decision Making - т.е. <code>if { ... } else { ...} </code>
    </figcaption>
  </figure>

  <h3>Как это объяснить хз)) - Ну Логека, Условея...</h3>

  <figure>
    <img src="src/quests/img/conditionals.jpeg" />
    <figcaption>
      Ну смысл вот собсно)
    </figcaption>
  </figure>

  <h3>Главное - правильно расставить СКОБКЕ )</h3>

  <figure>
    <img src="src/slides/img/js-conditionals-syntax.png" />
    <figcaption>
      СКОБКЕ Главное правильно поставить) - СИНТОКСИС так скозать )
    </figcaption>
  </figure>
`;

export const steps = [
  {
    task: `
    <p>
      Для ночала создоем перменную
    </p>
    <pre><code class="language-js">
      let xuy = 0;
    </code></pre>
    `,
    check: "Уписано <code>let xuy = 0;</code>",
    regexp: /let\s+xuy\s*=\s*0;/,
  },
  {
    task: `
    <p>
      Теперь довай выведем что-то у докУмент.
    </p>
    <pre><code class="language-js">
      let xuy = 0;
      document.body.innerHTML = '4to-to';
    </code></pre>
    `,
    check: "Уписано <code>document.body.innerHTML = '4to-to';</code>",
    regexp: /document[.]body[.]innerHTML\s*=\s*['"][^'"]+['"];/,
  },
  {
    task: `
    <p>
      Наконец, довай писать условее :)
    </p>
    <p>
      Мы хотим выводить <code>'4to-to'</code> у докУмент, только когда <code>xuy > 15</code>.
    </p>
    <p>
      Для этого "оборачиваем" ту строку кода, которая должна выполняться ТОЛЬКО при условии <code>xuy > 15</code>.
    </p>
    <pre><code class="language-js">
      let xuy = 0;

      if (xuy > 15) {
        document.body.innerHTML = '4to-to';
      }
    </code></pre>
    <p>
      Выведется ли что-то теперь на экран? :)
    </p>
    <p>
      <code>'4to-to'</code> выведется на экран только при выполнении условея.
    </p>
    <p>
      У нас щас <code>xuy</code> равен нулю.
    </p>
    <p>
      Ноль нихуя не больше 15 как-бе, еси чо)
    </p>
    <p>
      Соответсвенно на экран выведется..... пам-парам-пам .... Нихуя)
    </p>
    `,
    check: "Уписано <code>if (xuy > 15) { document...; }</code>",
    regexp: /if\s*\(\s*xuy\s*>\s*15\s*\)\s*{[^}]*document[.]body[.]innerHTML\s*=\s*['"][^['"]+['"];[^}]*}/,
  },
  {
    task: `
    <p>
      Ну и теперя <code>else</code> :)
    </p>
    <p>
      Т.е. "в противном случае".
    </p>
    <pre><code class="language-js">
      let xuy = 0;

      if (xuy > 15) {
        document.body.innerHTML = '4to-to';
      } else {
        document.body.innerHTML = 'nixy9';
      }
    </code></pre>
    <p>
      Если <code>xuy</code> больше <code>15</code> - вывести в докУмент текст <code>'4to-to'</code>.
    </p>
    <p>
      У ПРОТИВНОМ СЛУЧАЕ (англ. - <em>else</em>) - вывести у докУмент текст <code>'nixy9'</code>.
    </p>
    <p>
      Что выведет наш код остается на раздумие для самых эрудированых Мира Сего.
    </p>
    `,
    check: "Уписано <code>if (xuy > 15) { ... } else { ... }</code>",
    regexp: /if\s*\(\s*xuy\s*>\s*15\s*\)\s*{[^}]*}\s*else\s*{[^}]*}/,
  },
];

const skills = ['if-else', 'innerHTML'];

export default {
  story,
  code,
  steps,
  skills,
  id,
  status: 'new',
};
