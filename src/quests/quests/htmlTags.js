const id = 'htmlTags';

const story = `
  <h2>ШО ТАКЭ HTML?</h2>
  <p>HTML = HyperText Markup Language. По русски - "Язык Разметки ГиперТекса", или ЯРГТ.</p>
  <p>Изобретен в 1991 году Сэром Лордом Тимом Бернерсом Ли.</p>
  <p>Сэр Тим Бернерс-Ли хотел чтобы создать свою WWW страничку могла каждая домохозяйка! Поэтому он сделал его простым :)</p>
  <figure>
    <video controls>
      <source type="video/mp4" src="src/quests/Html/tim-berners-lee.mp4" />
    </video>
    <figcaption>
      Вещает Создатель Всея Всемирный Интернет.<p>Sir Timothy John Berners-Lee: <q>Люди еще ничего не видели. Это Революция</q>.
    </figcaption>
  </figure>
  <p>По суте ХТМЛ это упрощенный аналог Майкрософт Ворда - в текстовом файле "размечаем" текст - где заголовок, где параграф, и т.д.</p>
  <figure>
    <img src="src/quests/Html/tags.png" />
    <figcaption>
      Слева - Ворд. Справа красным - ХТМЛ код.
    </figcaption>
  </figure>
  <p>Когда мы откроем наш "размеченый" текстовый файл с разрешением ".html" в Браузере, он считает <em>Теги</em> (<code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>), и отобразит зоголовке жирным, параграф с отступом - и тагдале.</p>
  <p>Попробуй, это легко :)</p>

  <h2>Harvard Lecture</h2>
  <figure>
    <video controls>
      <source type="video/mp4" src="/video/harvard/html.mp4" />
    </video>
    <figcaption>
      Лекция Гарварда с пояснением что токое HTML и как его юзать
    </figcaption>
  </figure>

  <p>
     Если больше любишь читать - вот все то же самое от Гарварда текстом: <a href="https://cs50.harvard.edu/web/2020/notes/0/">Harvard Notes: HTML and CSS</a>
  </p>

  <h3>Словарек для Видео</h3>
  <p>
  <a href="https://docs.google.com/document/d/1J89zb6vTpfljXmxV2cEJx522XhNt-hmU/edit#" target="_blank">
    Ссылке на СЛОВАРЬ Гугл Док
  </a>

  <ul>
    ${
      [
        ['()', 'parentheses'],
        ['[]', 'brackets'],
        ['{}', 'curly braces'],
        ['<>', 'angle brackets'],
        ['?', 'question mark'],
        [':', 'colon'],
        [';', 'semicolon'],
        [',', 'comma'],
        ['.', 'dot'],
        ['&', 'and sign (ampersand)'],
        ['$', 'dollar sign'],
        ['!', 'exclamation mark'],
        ['отступ', 'indentation'],
        ['внутри', 'inside'],
        ['вне', 'outside'],
        ['изменить', 'modify'],
        ['элемент', 'element'],
      ].map(x => `<li>${x[0]} &mdash; ${x[1]}</li>`)
      .join('')
    }
    </ul>
  </p>
`;

const code = `
<p>Eto paragraph</p>
`;

export const steps = [
  {
    task: `
<p>
Начнем с простещшего документа: у нас лишь один параграф и больше ничего. Результат даного ХТМЛ кода - на экран просто выводится тот текст, что внутри
<code class="language-html">
&lt;p&gt;...&lt;/p&gt;
</code>
</p>
<p>
Уписуй заголовок h1 после параграфа:
<pre><code class="language-html">
&lt;p&gt;Eto Paragraph&lt;/p&gt;
&lt;h1&gt;Зоголовок&lt;/h1&gt;
</code></pre>
</p>
`,
    check: "Уписано &lt;h1&gt;Зогловок&lt;/h1&gt; после параграфа",
    regexp: /<\/p>\s+<h1>[^<]+<\/h1>/,
  },
  {
    task: `
  <p>
Молодец) Видишь - заголовок жирный и большой, по сравнению с параграфом.
  </p>
  <p>
Теперь еще ниже, третьей строкой, уписуй h2
<pre><code class="language-html">
&lt;p&gt;Eto Paragraph&lt;/p&gt;
&lt;h1&gt;Зоголовок&lt;/h1&gt;
&lt;h2&gt;Zogolovok vtorogo yrovn9&lt;/h2&gt;
</code></pre>
    `,
    check: "Уписано &lt;h2&gt;Zogolovok vtorogo yrovn9&lt;/h2&gt;",
    regexp: /<h2>[^<]+<\/h2>/,
  },
  {
    task: `
  <p>
  Хорош! Сравни размер заголовков h1 и h2 - какой из них больше?
  </p>
  <p>
  И еще ниже, под всеми заголовками, давай еще параграф впишем.
</p>
<pre><code class="language-html">
&lt;p&gt;Eto ewe adin paragrafe&lt;/p&gt;
</code></pre>
  `,
    check: "Уписано &lt;p&gt;Eto ewe adin paragrafe&lt;/p&gt после &lt;h2&gt;",
    regexp: /<\/h2>\s+<p>[^<]+<\/p>/,
  },
];

const skills = ['html-h1', 'html-p'];

export default {
  story,
  code,
  steps,
  skills,
  id,
};
