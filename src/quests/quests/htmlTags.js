const id = 'htmlTags';

const story = `
  <h2>ШО ТАКЭ HTML?</h2>
  <p>HTML = HyperText Markup Language. По русски - "Язык Разметки ГиперТекса, или ЯРГТ".</p>
  <p>Изобретен в 1991 году Сэром Лордом Тимом Бернерсом Ли.</p>
  <p>Сэр Тим Бернерс-Ли хотел чтобы создать свою WWW страничку могла каждая домохозяйка! Поэтому он сделал его простым :)</p>
  <video controls>
    <source type="video/mp4" src="src/quests/Html/tim-berners-lee.mp4" />
  </video>
  <p>По суте ХТМЛ это упрощенный аналог Майкрософт Ворда - в текстовом файле "размечаем" текст - где заголовок, где параграф, и т.д.</p>
  <img src="src/quests/Html/tags.png" />
  <p>Когда мы откроем наш "размеченый" текстовый файл с разрешением ".html" в Браузере, он считает <em>Теги</em> (<code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>), и отобразит зоголовке жирным, параграф с отступом - и тагдале.</p>
  <p>Попробуй, это легко :)</p>
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

const skills = ['h1', 'p'];

export default {
  story,
  code,
  steps,
  skills,
  id,
};
