const id = 'keyboard';

const story = `
  <h2>ДЕЛОЕМ УПеровление кенопеками )</h2>
  <figure>
    <video controls>
      <source src="/video/youtube-js-keypress.mp4" type="video/mp4" />
    </video>
    <figcaption>
      Тутореал 3 мин )
      <a href="https://www.youtube.com/watch?v=vSKJGDcDUww">
        www.youtube.com/watch?v=vSKJGDcDUww
      </a>
    </figcaption>
  </figure>
`;

const code = `
<h1>Уперовление кенопеками)</h1>

<script>

</script>
`;

export const steps = [
  {
    task: `
<p>
  Читобы реагировать на кЕнопЕку заюзаем СОБЫТИЕ <code>'keydown'</code>. Вписуй EVENT Listener :)
</p>
<pre><code>
  document.addEventListener('keydown', handleKeydown);
</code></pre>
</p>
`,
    check: `Уписано document.addEventListener('keydown', handleKeydown);`,
    regexp: /document[.]addEventListener[(]['"]keydown['"],\s*handleKeydown[)];/,
  },
  {
    task: `
<p>
  Куросава ) Ты добавили Ивент Лисенер, но передали в него фукцию которую еще не определили - <code>handleKeydown</code> - поэтому пока код будет лишь выдавать ошибке.
</p>
<p>
  Читобы ошибки не было - довай добавем пока что пустую фукцию с названием <code>handleKeydown</code>
</p>
<pre><code>
  function handleKeydown() {}
  document.addEventListener('keydown', handleKeydown);
</code></pre>
</p>
`,
    check: `Уписано function handleKeydown() {}`,
    regexp: /function\s+handleKeydown[(]\s*[)]\s+{\s*}/,
  },
  {
    task: `
<p>
  Хорош! ) Теперь ошибке бить не должено) Но и не происходит ничего - фукцея пустая - как-бе пустышка так скаозать..
</p>
<p>
  Довай упишем чито-те-то у докУмент )
</p>
<pre><code>
  function handleKeydown() {
    document.body.innerHTML += 'Кнопека ножата!!';
  }
  document.addEventListener('keydown', handleKeydown);
</code></pre>
</p>
`,
    check: `Уписано function handleKeydown() { document.body.innerHTML += '...' }`,
    regexp: /function\s+handleKeydown[(]\s*[)]\s+{\s*document[.]body[.]innerHTML\s*[+][=]\s*['"][^'"+]['"];\s*}/,
  },
];

const skills = ['functions', 'innerHTML', 'event'];

export default {
  story,
  code,
  steps,
  skills,
  id,
};
