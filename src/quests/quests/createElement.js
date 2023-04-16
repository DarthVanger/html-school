const id = 'createElement';
const title = 'document.createElement()';

const story = `
  <h2>createElement()</h2>
  <p>
    Фукція <code>document.createElement()</code> створює... Елемент :)
  </p>
  <p>
    Наприклад, щоб створити заголовок <code>h1</code>
    <pre class="lang-js"><code>
      const zogolovok = document.createElement('h1');
    </code></pre>
    
    Ми створили Елемент, і зберегли його в змінну, тобто в оперативну память.
  </p>
  <p>
    Щоб побачити цей елемент на екрані, потрібно додати його у докУмент.боді, за допомогою фукції <code>append()</code>.
    <pre class="lang-js"><code>
      const zogolovok = document.createElement('h1');
      document.body.append(zogolovok);
    </code></pre>

    Зоголовок з'явиться у вкладці Елементи у Хромі (F12). <br />
    Але він пустий - без тексту
    
  <p>
    Щоб до зоголовку додати текст &mdash; потрібно змінти його <code>innerHTML</code>
    <pre class="lang-js"><code>
      const zogolovok = document.createElement('h1');
      zogolovok.innerHTML = 'mou xuy';
      document.body.append(zogolovok);
    </code></pre>

    Собсно якби ось, собсно якби ось і все.
  </p>
`;

const code = `
  <h1>Вчимося створювати елементи</h1>
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
  const zogolovok = document.createElement('h1'); 
</code></pre>
`,
    check: `Уписано const zogolovok = document.createElement('h1');`,
    regexp: /const\s+zogolovok\s*=\s*document[.]createElement[(]['"]h\d['"][)];?/
  },
  {
    task: `
<p>
  Другий крок &mdash; додаємо текст всередину зоголовку
</p>
<pre class="lang-js"><code>
  const zogolovok = document.createElement('h1'); 
  zogolovok.innerHTML = 'mou xuy4ek';
</code></pre>
`,
    check: `Уписано zogolovok.innerHTML = 'mou xuy4ek';`,
    regexp: /zogolovok[.]innerHTML\s*=\s*['"][^'"]+['"];?/
  },
  {
    task: `
<p>
  Третій крок - додаємо новостворений Елемент у доКумент.боді
</p>
<pre class="lang-js"><code>
  const zogolovok = document.createElement('h1'); 
  zogolovok.innerHTML = 'mou xuy4ek';
  document.body.append(zogolovok);
</code></pre>
`,
    check: `Уписано document.body.append(zogolovok);`,
    regexp: /document[.]body[.]append[(]zogolovok[)];?/
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
