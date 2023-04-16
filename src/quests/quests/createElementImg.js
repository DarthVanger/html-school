const id = 'createElementImg';
const title = `document.createElement('img')`;

const story = `
  <h2>createElement('img')</h2>
  <p>
    Фукція <code>document.createElement()</code> дозволяє створити будь-який ХТМЛ Елемент. Назву тегу ми передаємо у лапках.
  </p>
  <p>
    Тож, щоб створити Елемент <code>img</code> пишемо
    <pre class="lang-js"><code>
      const kortinke = document.createElement('img');
    </code></pre>
    
    Ми створили Елемент <code>img</code>, і зберегли його в змінну, тобто в оперативну память.
  </p>
  <p>
    Щоб побачити цей елемент на екрані, потрібно додати його у докУмент.боді, за допомогою фукції <code>append()</code>.
    <pre class="lang-js"><code>
      const kortinke = document.createElement('img');
      document.body.append(kortinke);
    </code></pre>

    Імедж з'явиться у вкладці Елементи у Хромі (F12). <br />
    Але він пустий - без <code>src</code> - без шляху до Файлу зображення.
    
  <p>
    Щоб виставити зображенню сирці, потрібно змінити його <code>src</code>
    <pre class="lang-js"><code>
      const kortinke = document.createElement('img');
      kortinke.src = 'https://napaleon.space/img/dimon.jpg';
      document.body.append(kortinke);
    </code></pre>

    Собсно якби ось, собсно якби ось і все.
  </p>
`;

const code = `
  <h1>Вчимося створювати кортінке через JS</h1>
  <script>
  </script>
`;

export const steps = [
  {
    task: `
<p>
  Перший крок &mdash; Створюємо Елемент і зберігаємо його у змінну.
</p>
<pre class="lang-js"><code>
  const kortinke = document.createElement('img'); 
</code></pre>
`,
    check: `Уписано const kortinke = document.createElement('img');`,
    regexp: /const\s+kortinke\s*=\s*document[.]createElement[(]['"]img['"][)];?/
  },
  {
    task: `
<p>
  Другий крок &mdash; додаємо <code>src</code> - шлях до Файлу зображення
</p>
<pre class="lang-js"><code>
  const kortinke = document.createElement('img'); 
  kortinke.src = 'img/dimon.jpg';
</code></pre>
`,
    check: `Уписано kortinke.src = 'img/dimon.jpg';`,
    regexp: /kortinke[.]src\s*=\s*['"]img[/]dimon[.]jpg['"];?/
  },
  {
    task: `
<p>
  Третій крок - додаємо новостворений Елемент у доКумент.боді
</p>
<pre class="lang-js"><code>
  const kortinke = document.createElement('img'); 
  kortinke.src = 'img/dimon.jpg';
  document.body.append(kortinke);
</code></pre>
`,
    check: `Уписано document.body.append(kortinke);`,
    regexp: /document[.]body[.]append[(]kortinke[)];?/
  },
];

const skills = ['createElement', 'innerHTML', 'append-element'];

export default {
  story,
  code,
  steps,
  skills,
  id,
  title,
};
