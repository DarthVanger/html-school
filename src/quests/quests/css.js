const id = 'css';

const story = `
  <h2>ШО ТАКЭ CSS?</h2>
  <p>CSS = Cascading Style Sheet. По русски - "Каскадное Стиле-Дерьмо", или КСД.</p>
  <p>Дефолтные HTML стили 90-х конечно охуенные - базару нет.</p>
  <figure>
    <img src="src/quests/Css/yahoo-1996.png" />
    <figcaption>
      Сайт Яху - несколько месяцев до изобретения CSS в декабре 1996.
    </figcation>
  </figure>
  </p>
  <p>
  Но с коммерциализацией Интернета, все-таки захотелось не такой всратый дизайн.
  </p>
  <p>
  <em>CSS Изобретен в 1996 году</em> <a href="https://en.wikipedia.org/wiki/World_Wide_Web_Consortium">Комитетом Всемирной Паутины</a> (англ. - <em>World Wide Web Consortium</em> = <em>W3C</em>).</p>
  <p>
  <figure>
    <video controls>
      <source type="video/mp4" src="src/quests/Css/jeff-bezos.mp4" />
    </video>
    <figcaption>
      Интервью с Jeff Bezos старое: <q>Я случайно узнал что Интернет растет на 2300% в год.</q>
      </p>
      <p>
      <q>Я подумал как можно заработать на Интернете, и первым продуктом для продажи онлайн я выбрал <b>Книги</b>.
        </q>
        </p>
    </figcaption>
  </figure>

  <h2>ТО ШО ВОНО РОБЭ?</h2>
  <p>ЦСС позволяет задать "стили", т.е. дизайн элементов ХТМЛ документа.</p>
  <p>Нопремер: задать зоголовку синиий цвет. Сделать текст крупнее. Задать рамку, отступы.</p>
  <p>CSS пишется внутри тэга &lt;style&gt;, и у него свой синтаксис: к КАКОМУ ХТМЛ Тегу, применить какой СТИЛЬ.</p>

  <figure>
    <img src="src/quests/Css/css-syntax.png" />
  <figcaption>
    Синтаксис ЦСС
  </figcaption>
  </figure>

 <p>
   СТИЛЬ указывается в фигурных скобке после названия тега
 </p>

 <pre><code class="language-html">
   &lt;style&gt;
     h1 {
        color: red;
        font-size: 100px;
     }
   &lt;/style&gt;
 </code></pre>

<p>
  Каждая строка в { } - это имя свойства, и значение свойства. Синтаксис простой: всего 2 знака используется :). Двоеточие после имени свойства, точка запятой - в конце строки. Все)) <code class="language-css">свойство: значение;</code>
</p>
<p>
  Если по-русски
</p>

 <pre><code class="language-html">
   &lt;стиль&gt;
    заголовокУровня1 {
      цвет: красный;
      размер-шрифта: 100пикс;
    }
  &lt;/стиль&gt;
 </code></pre>

<p>
  И если снова по-англицки )
<p>
<figure>
  <img src="src/quests/Css/css-selectors.png" />
  <figcaption>
    CSS селекторы / синтаксис / поебота
  </figcaption>
</figure>

<p>Что ж, довай пробовадь! :)</p>
`;

const code = `
<h1>CSS = Cascading Style Sheet</h1>
`;

export const steps = [
  {
    task: `
<p>
  Унас есть зоголовок :) Уписуй &lt;style&gt;&lt;/style&gt; :)
</p>
<pre><code class="language-html">
&lt;h1&gt;CSS = Cascading Style Sheet&lt;/h1&gt;

&lt;style&gt;&lt;/style&gt;
</code></pre>
`,
    check: "Уписано &lt;style&gt;&lt;/style&gt; после зоголовка",
    regexp: /<\/h1>\s+<style>[^<]*<\/style>/,
  },
  {
    task: `
<p>
  Молодца %)
</p>
<p>
  Унутри тега <code>style</code> пиши <code>h1 {}</code>
</p>
<pre><code class="language-html">
&lt;h1&gt;CSS = Cascading Style Sheet&lt;/h1&gt;

&lt;style&gt;
  h1 {}
&lt;/style&gt;
</code></pre>
`,
    check: "Уписано h1 {} унутри style",
    regexp: /<style>\s*h1\s*{[^}]*}/,
  },
  {
    task: `
<p>
  Наконец, внутри фугирныъ скбоке пишем <code>color: red;</code>
</p>
<pre><code class="language-html">
&lt;h1&gt;CSS = Cascading Style Sheet&lt;/h1&gt;

&lt;style&gt;
  h1 {
    color: red;
  }
&lt;/style&gt;
</code></pre>
`,
    check: "Уписано h1 { color: red; } унутри style",
    regexp: /<style>\s*h1\s*{\s*color:\s*red;\s*[^}]*}[^<]*<\/style>/,
  },
  {
    task: `
<p>
  Ну что, стал зоголовок красныМ??*)
</p>
<p>
  Теперь довай менять размер текста )
</p>
<p>
  Аналогично <code>color: red;</code> вписываем в новой сстроке <code>font-size: 100px;</code>.
</p>
<pre><code class="language-html">
&lt;style&gt;
  h1 {
    color: red;
    font-size: 100px;
  }
&lt;/style&gt;
</code></pre>
`,
    check: "Уписано h1 { color: red; font-size: 100px; }",
    regexp: /h1\s*{\s*color:\s*red;\s*font-size:\s*100px;[^}]*}/,
  },
  {
    task: `
<p>
  Поменялсо размер зоголовека?)
</p>
<p>
  Теперь давай сделаем Рамку! Это немного сложнее, но попробуем!
</p>
<p>
  Дописуй третьей строкой внутри <code class="language-css">h1 {}</code> такой код <code class="language-css">border: black 1px solid;</code>
</p>
<pre><code class="language-html">
&lt;style&gt;
  h1 {
    color: red;
    font-size: 100px;
    border: black 1px solid;
  }
&lt;/style&gt;
</code></pre>
`,
    check: "Уписано h1 { ... border: black 1px solid; }",
    regexp: /h1\s*{[^}]*border:\s*black 1px solid;[^}]*}/,
  },
  {
    task: `
<p>
  Б-б-божественно!
</p>
<p>
  Последний маленький штришок!
</p>
<p>
  Выставим зоголвеку ширину!
</p>
<p>
  Четвертым css правилом для <code class="css">h1</code> дописуй <code class="language-css">width: 200px;</code>
</p>
<pre><code class="language-html">
&lt;style&gt;
  h1 {
    color: red;
    font-size: 100px;
    border: black 1px solid;
    width: 200px;
  }
&lt;/style&gt;
</code></pre>
`,
    check: "Уписано h1 { ... width: 200px; }",
    regexp: /h1\s*{[^}]*width:\s*200px;[^}]*}/,
  },
];

const skills = ['css-h1-p', 'css-color', 'css-font-size', 'css-border', 'css-width', 'css-height'];

export default {
  story,
  code,
  steps,
  skills,
  id,
};
