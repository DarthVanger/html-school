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
<style>
  #ship {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
  }
</style>

<body>
  <img id="ship" src="/img/ship.gif" />
</body>

<script>

</script>
`;

export const steps = [
  {
    task: `
<p>
  У нас уже есть корабль и стили для него. Но нет скрипта)
</p>
<p>
  Читобы кораблик двигался по нажатию на кенопку - нужно добавить лисенер на кидаун )
</p>
<pre><code>
  document.addEventListener('keydown', moveShip);
</code></pre>
</p>
`,
    check: `Уписано document.addEventListener('keydown', moveShip);`,
    regexp: /document[.]addEventListener[(]['"]keydown['"],\s*moveShip[)];/,
  },
  {
    task: `
<p>
  Куросава ) Ты добавили Ивент Лисенер, но передали в него фукцию которую еще не определили - <code>moveShip</code> - поэтому пока код будет лишь выдавать ошибке.
</p>
<p>
  Читобы ошибки не было - довай добавем пока что пустую фукцию с названием <code>moveShip</code>
</p>
<pre><code>
  function moveShip() {}
  document.addEventListener('keydown', moveShip);
</code></pre>
</p>
`,
    check: `Уписано function moveShip() {}`,
    regexp: /function\s+moveShip[(]\s*[)]\s+{\s*}/,
  },
];

const skills = ['img'];

export default {
  story,
  code,
  steps,
  skills,
  id,
};
