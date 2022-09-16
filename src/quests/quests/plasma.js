const id = 'plasma';

const story = `
  <h2>Стрэляем ПЛАЗМОЙ )</h2>
  <figure>
    <img src="/src/quests/img/plasma.gif">
  </figure>
  <h3>ДАНО</h3>
  <p>
    <ul>
      <li>кортинке плазмы с абсолютной позицией.</li>
      <li>По клику мы пишем в документ текст "Огонь!"</li>
    </ul>
  </p>
  <h3>Надо сделать</h3>
  <p>
    <ul>
      <li>По клику вызываем <code>setInterval(move, 1000);</code></li>
      <li>Определяем фукцею<code> function move () {}</code></li>
      <li>Создаем переменную <code>let x = 0;</code> для позиции <code>left</code> Плазмы</li>
      <li>Унутри фукцеи <code>move() {}</code> увеличиваем <code>x += 10;</code>, т.е. єто будет происходить каждую сек</li>
      <li>Печатаем наш <code>x</code> у докУмент</li>
      <li>Наконец, используем <code>x</code> читобі перемещать КОртинке - Плазму, смотри уроке <a href="http://localhost:8082/#/quests/flying">КОПЕТАН! Сроноч в Полет! У КоСмаС!</a></li>
    </ul>
  </p>
  <h3>Итоговый псевдо-код</h3>
  <pre><code>
    let x = 0;

    function move() {
      x += 10;
      let kortinke = document.querySelector('.moi-kortinke');
      kortinke.style.left = x;
    }

    function fire() {
      document.body.innerHTML += 'ogon!';
      setInterval(move, 1000);
    }
  </code></pre>
`;

const code = `
<style>
  .plasma {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    top: 100;
    left: 0;
  }
</style>

<body>
  <img class="plasma" src="/src/img/plasma.gif" />
</body>

<script>
  function fire() {
    document.body.innerHTML += 'Огонь!';
  }

  document.addEventListener('click', fire);
</script>
`;

export const steps = [
  {
    task: `
<p>
  Дано:
  <ul>
    <li>кортинке плазмы с абсолютной позицией.</li>
    <li>По клику мы пишем в документ текст "Огонь!"</li>
  </ul>
</p>
<p>
  Наша задача - сделать чтобы по клику Плазма начинала движение.
</p>
<p>
  Во-первых нам нужно создать переменную где мы будем хранить позицию Плазмы: <code>let x = 0;</code>. Прописываем это в самом верху скрипта.
  <pre><code>
    let x = 0;

    function fire() {
      document.body.innerHTML += 'Огонь!';
    }

    document.addEventListener('click', fire);
  </code></pre>
</p>
`,
    check: `Уписано let x = 0;`,
    regexp: /let x = 0;/,
  },
  {
    task: `
<p>
  Теперь нам нужно изменять <code>х</code> каждую секунду.
</p>
<p>
  Для этого используем <code>setInterval(move, 1000);</code>. Это делаем внутри функции <code>fire()</code> - т.е. огонь значит начать двигать Плазму каждую секунду.
</p>
<pre><code>
  function fire() {
    document.body.innerHTML += 'Огонь!';
    setInterval(move, 1000);
  }
</code></pre>
</p>
`,
    check: `Уписано setInterval(move, 1000);`,
    regexp: /setInterval[(]move,\s*1000[)];/,
  },
  {
    task: `
<p>
  Выбило ошибку? Мы передали в фнукцию <code>setInterval()</code> функцию под названием <code>move</code>, которую еще НЕ определили - поэтому и ошибка.
</p>
<p>
  Определяем фукцею <code>move</code> - пока просто пусть функция будет пустая, т.е. не будет никакого кода выполнять.
</p>
<p>
<pre><code>
  function move() {}

  function fire() {
    document.body.innerHTML += 'Огонь!';
    setInterval(move, 1000);
  }
</code></pre>
`,
    check: `Уписано function move() {}`,
    regexp: /function move[(][)]\s*{[^}]*}/,
  },
  {
    task: `
<p>
  Молодца! Пропала ошибка?
</p>
<p>
  Наконец, давай внутри нашей фукцеи <code>move() {}</code> увеличивать <code>x</code>, т.е. делать <code>x += 10;</code>
</p>
<pre><code>
  function move() {
    x += 10;
  }
</code></pre>
</p>
`,
    check: `Уписано x += 10; унунтри move() { ... }`,
    regexp: /function\s+move[(][)]\s+{\s+x\s+[+]=\s+\d+;/,
  },
  {
    task: `
<p>
  Теперь <code>x</code> у нас по идее увеличивается каждую секунду, но мы этого не видим, т.к. мы <code>x</code> никак не используем, никуда не выводим :)
</p>
<p>
  Давай выводить в докУмент :)
</p>
<pre><code>
  let x = 0;

  function move() {
    x += 10;
    document.body.innerHTML += 'x сейчас равен ' + x;
  }

  function fire() {
    document.body.innerHTML += 'Огонь!';
    setInterval(move, 1000);
  }

  document.addEventListener('click', fire);
</code></pre>
</p>
`,
    check: `Уписано document.body.innerHTML += 'x сейчас равен ' + x;`,
    
    regexp: /document[.]body[.]innerHTML\s[+]=\s+'[^']+'\s*[+]\s*x;/,
  },
  {
    task: `
<p>
  Молодца! Кликай по Плазме!
</p>
<p>
  Должен <code>x</code> увеличиваться и выводится на экран казждую секунду.
</p>
<p>
  Последний штришок - двигать кортинке в соотвествии с увеличивающимся <code>x</code> каждую секунду.
</p>
<p>
  Сночала нам нужно получить элемент кортинки
</p>
<pre><code>
  function move() {
    x += 10;
    document.body.innerHTML += 'x сейчас равен ' + x;
    let plasmaImgElement = document.querySelector('.plasma');
  }
</code></pre>
</p>
`,
    check: `Уписано let plasmaImgElement = document.querySelector('.plasma');`,
    regexp: /let plasmaImgElement\s*=\s*document[.]querySelector[(]'[.]plasma'[)];/,
  },
  {
    task: `
<p>
  Второй шаг: наконец изменяем отступ <code>left</code> нашей кортинке! Т.е. дописываем строку <code>plasmaImgElement.style.left = x;</code> внутрь функции <code>move() { ... }</code>, ПОСЛЕ того как мы выбирали элемент, т.е. в самой конце фукции, послденей строкой.
</p>
<pre><code>
  function move() {
    x += 10;
    document.body.innerHTML += 'x сейчас равен ' + x;
    let plasmaImgElement = document.querySelector('.plasma');
    plasmaImgElement.style.left = x;
  }
</code></pre>
</p>
`,
    check: `Уписано plasmaImgElement.style.left = x;`,
    regexp: /plasmaImgElement[.]style[.]left\s*=\s*x;/,
  },
];

const skills = ['functions', 'innerHTML', 'setInterval', 'click', 'querySelector', 'style'];

export default {
  story,
  code,
  steps,
  skills,
  id,
  status: 'homework',
};
