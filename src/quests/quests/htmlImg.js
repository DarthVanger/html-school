const id = 'htmlImg';

const imgLink = 'https://i.postimg.cc/q7qHZX6Q/pon4ik-breakdance-protasov.jpg';

const story = `
  <h2>ПРИГОТОВЬТЕ СВОИ ЯЙЦА: HTML <em>v2.0. Год 1995 :)</em></h2>
  <p>The <code>&lt;img&gt;</code> tag was included in the HTML 2.0 specification released in 1995 by the W3C.</p>
  <p>Если по-русски, в 1995, спустя 4 года после изобретения HTML, выходит HTML 2.0, в котором можно делать НЕВЕРОЯТНОЕ: КОРТИНКЕ!</p>
  <p>Почти нихуя особенного ) Добавили крч тег <code>&lt;img&gt;</code></p>
  <p>Юзать вот так:</p>
  <pre><code>
    &lt;img src="my-image.jpg" /&gt; 
  </code></pre>
  <p>Т.е. изич))</p>

  <h3>Нюанс: Тэг <code>&lt;img&gt;</code> не требует закрытия</h3>
  <p>Тэг <code>&lt;img&gt;</code> не требует закрытия, в отличии от <code>&lt;h1&gt;heading&lt;/h1&gt;</code>.
  <p>В даном примере стоит слеш <code>/></code> перед закрывающей скобкой тэга. Это "хороший тон" так писать)) Будет работать и без слеша, но так писать "грамотнее" )) Это получается "самозакрывающий тег" так сказать)</p>
  <p>Тэгу <code>&lt;img&gt;</code> не нужен контент, т.е. не нужно ничего внутри писать, никакого текста выводить. Ему достаточно <code>src</code> и все. Поэтому его не нужно закрывать - нЕчего внутри писать-то :)</p>

  <h3>Нюанс: путь к кортнке</h3>
  <p>Внутри кавычек пишется путь к файлу. <code>&lt;img src="ПУТЬ_К_ФАЙЛУ" /&gt;</code></p>
  <p>Путь отсчитывается от папки где лежит html файл.</p>
  <p>НО, мы также можем дать ссылку на любую Кортинке в Интронете! :)</p>
  <p>Сейчас мы это и попробуем )</p>

  <h2>HTML Синтоксес</h2>
  <figure>
    <img src="src/quests/Html/html-syntax.png" />
    <figcaption>
      HTML Syntax 
    </figcaption>
  </figure>
  <p>Тег всегда пишется в треугольных скобке <code>&lt;tagname&gt;</code></p>
  <p>После названия тега, через пробел, можно указать атрибуты: <code>&lt;img src="pic.jpg" class="my-img"&gt;</code>
  <p>Атрибуты указываются ВНУТРИ треугольный скобке<code>&lt;...&gt;</code></p>
  <p>Для примера я написал 2 атрибута: <code>src</code> и <code>class</code> .</p>
  <p>Атрибут <code>class</code> просто для примера, его будем проходить позже.</p>
  <p>Итак: указывается имя атрибута, потом знак равно <code>=</code> и в кавычках <code>"..."</code>значение атрибута: <code>&lt;tagname attr1="value1" attr2="value2"&gt;</code></p>

  <h3>!!! Ссылка на кортинке - скопируй !!!</h3>
  <p>Єто надо будет вставить в <code>src="ссілке"</code></p>
  <p><a href="${imgLink}">${imgLink}</a></p>
`;

const code = `
  <h1>Пробуем Кортинке)</h1>
`;

export const steps = [
  {
    task: `
<p>
  Давай сначала впишем просто <code>&lt;img&gt;</code> тэг без <code>src</code>.
</p>
<pre><code>
&lt;h1&gt;Пробуем Кортинке)&lt;/h1&gt;
&lt;img /&gt;
</code></pre>
</p>
<p>Посомтрем чо будет )</p>
`,
    check: "Уписано &lt;img /&gt;",
    regexp: /<img[^>]*\/?>/,
  },
  {
    task: `
<p>
  Збс) Довай сырцы писать)
</p>
<p>
  Выше над зоданием можно скопировать ссылку на кортинке.
</p>
<p>
  Ее нам и надо вставить в <code>src="сірці"</code>
</p>
<pre><code>
&lt;h1&gt;Пробуем Кортинке)&lt;/h1&gt;
&lt;img src="${imgLink}" /&gt;
</code></pre>
</p>
<p>Посомтрем чо будет )</p>
`,
    check: `Уписано &lt;img src="${imgLink}" /&gt;`,
    regexp: new RegExp(`<img src=['"]https[:]//i[.]postimg[.]cc/q7qHZX6Q/pon4ik-breakdance-protasov[.]jpg['"]\\s*/?>`),
  },
  {
    task: `
<p>
  Куросава!
</p>
<p>
  <img src="https://cdn.pastemagazine.com/www/articles/10-kurosawa-hidden-fortress.jpg" />
</p>
<p>
  Теперь попробуем картинку с этого же сайта ) 
</p>
<p>
  Кортинке находится по ссылке: https://napaleon.space/img/dnb.png
</p>
<p>
  Но поскольку это тот же сайт где наша хтмл страница, нам не обязательно писать <code>https</code> и прочую лабуду)
</p>
<p>
  Достаточно прописать просто <code>src="/img/dnb.png"</code> и Браузер автоматом добавит вначале ссылку на сайт на котором мы находимся.
</p>
<pre><code>
&lt;h1&gt;Пробуем Кортинке)&lt;/h1&gt;
&lt;img src="${imgLink}" /&gt;
&lt;img src="/img/dnb.png" /&gt;
</code></pre>
</p>
`,
    check: 'Уписано &lt;img src="/img/dnb.png"/&gt;',
    regexp: new RegExp(`<img src=['"]/img/dnb[.]png['"] ?/?>`),
  },
];

const skills = ['html-img'];

const img = `
  <div class="quest-html-img">
    <code class="language-html">&lt;img src="..." /&gt;</code>
  </div>
`;

export default {
  story,
  code,
  steps,
  skills,
  id,
  img,
  status: 'homework',
};
