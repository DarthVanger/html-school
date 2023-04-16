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
  <svg width="100" height="100"></svg>
</code></pre>
`,
    check: `Уписано &lt;svg width="100" height="100"&gt;&lt;/svg&gt;`,
    regexp: /<svg\s+width="100"\s+height="100"\s*>\s*<\/svg>/
  },
  {
    task: `
<p>
  Молодца. Теперь <code>while</code> пустой пишем <code>while (false) {}</code>. Синтоксис такой же как у <code>if () {}</code> да и на синтоксес функцей похож тоже :). В круглые скобки <code>false</code> мы пишем пока что просто так, чтобы не было ошибки - пустое условие быть не может. Потом заменим <code>false</code>на настоящее условие.
</p>
`,
    check: `Уписано <code>while (false) {}</code>`,
    regexp: /while\s*[(]\s*(false|skokoRaz < 100?)\s*[)]\s*{[^}]*}/
  },
];

const skills = ['svg', 'svg-circle', 'svg-line'];

export default {
  story,
  code,
  steps,
  skills,
  id,
};
