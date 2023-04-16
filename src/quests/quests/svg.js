const id = 'svg';

const story = `
  <h2>svg</h2>
  <p>
    SVG = Scalable Vector Graphics<br />
    (Укр) ВГщР = Векторна Графіка, що Розтягується
  </p>

  <p>
    Хто хоче - вивчайте це дєрьмо на W3Schools

    <a href="https://www.w3schools.com/graphics/svg_intro.asp">
      <figure class="figure">
        <img src="img/homework/svg-w3-schools.png"/>
        <figcaption>SVG Tutorial - W3Schools</figcaption>
      </figure>
    </a>
  </p>
`;

const code = `
  <h1>Вчимо Векторну Графіку, що Розтягується (ВГщР)</h1>
`;

export const steps = [
  {
    task: `
<p>
  Перший крок - додаємо пустий тег <code>&lt;svg&gt;</code> розміром <code>100х100</code> - це наша коробочка де ми будем малювати Векторну Графіку, що Розтягується (ВГщР).
</p>
<pre><code>
  &lt;svg width="100" height="100"&gt;
</code></pre>
`,
    check: `Уписано &lt;svg width="100" height="100"&gt;&lt;/svg&gt;`,
    regexp: /<svg\s+width="100"\s+height="100"\s*>/
  },
  {
    task: `
<p>
  Другий крок - успередині тегу <code>svg</code> пишемо тег <code>&lt;circle /&gt;</code> з атрибутами <code>cx</code>, <code>cy</code>, <code>r</code>, <code>fill</code> (Слеш <code>/</code> укінці тегу <code>/&gt;</code> &mdash; обов'язково!)
</p>
<pre><code>
  &lt;svg width="100" height="100"&gt;
    &lt;circle cx="50" cy="50" r="40" fill="yellow" /&gt;
  &lt;/svg&gt;
</code></pre>
`,
    check: `Уписано &lt;circle cx="50" cy="50" r="40" fill="yellow" /&gt; усередині svg`,
    regexp: /<circle\s+cx="\d+"\s+cy="\d+"\s+r="\d+"\s+fill="[^"]+" ?\/>/
  },
  {
    task: `
<p>
  Мав зявитися жовтий кружечок на екрані.
</p>
  Тепер намалюй лінію
<pre><code>
&lt;svg width="100" height="100"&gt;
  &lt;circle cx="50" cy="50" r="40" fill="yellow" /&gt;
  &lt;line x1="0" y1="0" x2="100" y2="100" stroke="red" stroke-width="4" /&gt;
&lt;/svg&gt;
</code></pre>
</p>
`,
    check: `Уписано &lt;line x1="0" y1="0" x2="100" y2="100" stroke="red" stroke-width="4" /&gt; усередині svg`,
    regexp: /<line\s+x1="0"\s+y1="\d+"\s+x2="\d+"\s+y2="\d+"\s+stroke="[^"]+"\s+stroke-width="\d+"\s*\/?>/
  },
  {
    task: `
<p>
  Лінія мала зявитися по діагоналі: від точки <code>x1: 0; y1: 0</code> до точки <code>x2: 100; y2: 100</code>.
</p>
<p>
  Тепер Хрестик давай :)
<pre><code>
&lt;svg width="100" height="100"&gt;
  &lt;circle cx="50" cy="50" r="40" fill="yellow" /&gt;
  &lt;line x1="0" y1="0" x2="100" y2="100" stroke="red" stroke-width="4" /&gt;
  &lt;line x1="100" y1="0" x2="0" y2="100" stroke="red" stroke-width="4" /&gt;
&lt;/svg&gt;
</code></pre>
</p>
`,
    check: `Уписано &lt;line x1="100" y1="0" x2="0" y2="100" stroke="red" stroke-width="4" /&gt; усередині svg`,
    regexp: /<line\s+x1="100"\s+y1="\d+"\s+x2="\d+"\s+y2="\d+"\s+stroke="[^"]+"\s+stroke-width="\d+"\s*\/?>/
  },
  {
    task: `
<p>
  Есть Хрестик?) Што ж, давай, прямоугольник!
</p>
<p>
<pre><code>
&lt;svg width="100" height="100"&gt;
  &lt;circle cx="50" cy="50" r="40" fill="yellow" /&gt;
  &lt;line x1="0" y1="0" x2="100" y2="100" stroke="red" stroke-width="4" /&gt;
  &lt;line x1="100" y1="0" x2="0" y2="100" stroke="red" stroke-width="4" /&gt;
  &lt;rect x="20" y="20" width="40" height="40" stroke="blue" stroke-width="4" /&gt;
&lt;/svg&gt;
</code></pre>
</p>
`,
    check: `Уписано &lt;rect x="20" y="20" width="40" height="40" stroke="blue" stroke-width="4" /&gt; усередині svg`,
    regexp: /<rect\s+x="\d+"\s+y="\d+"\s+width="\d+"\s+height="\d+"\s+stroke="[^"]+"\s+stroke-width="\d+"\s*\/?>/
  },
];

const skills = ['svg', 'svg-circle', 'svg-line', 'svg-rect'];

export default {
  story,
  code,
  steps,
  skills,
  id,
};
