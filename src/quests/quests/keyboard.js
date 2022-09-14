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
    regexp: /function\s+handleKeydown[(][^)]*[)]\s+{[^}]*}/,
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
    regexp: /function\s+handleKeydown[(][^)]*[)]\s+{\s*document[.]body[.]innerHTML\s*[+][=]\s*['"][^'"]+['"];[^}]*}/,
  },
  {
    task: `
<p>
  Ура! Уже должно реагировать на нажатие кенопок!
</p>
<p>
  НЮАНС: Когда мы пишем код здесь на сайте - наш ФОКУС находится в поле ввода кода.
</p>
<p>
  НЮАНС: Чтобы ФОКУС переменстился на нашу программу - нажми на заголовок "Уперовление кенопеками)" справа от кнопки "Run".
</p>
<p>
  На сайте может быть множество элементов - допустим несколько полей для ввода.
</p>
<p>
  КАК БРаузеРу Понять в КАКОЙ элемент ты сейчас хочешь ввести букву, нажимая кнопку на Клаве?
</p>
<p>
  В ТОТ элемент который сейчас в ФОКУСЕ.
</p>
<p>
  Чтобы поменять ФОКУС - нужно нажать на элемент, в который мы хотим вводить текст.
</p>
<p>
  Поэтому нажав на результат выполнения нашего кода справа от зеленой кнопки Run, мы переключаем ФОКУС на нашу программу, и тогда наша программа должна реагировать на нажатие ЛЮБОЙ кнопки.
</p>
<p>
  Выводится текст по нажатию на любую кнопку - получилось?) Должен выводится))
</p>
<p>
  ДАЛЕЕ
</p>
<p>
  Читоби программа реагировала на нажатие ЛИШЬ ОПРЕДЕЛЕННОЙ КНОПЕКИ, А НЕ ЛЮБОЙ, Нужно дописать <code>if () {}</code>
</p>
<p>
  Для начала - давай выведем в докУмент КАКАЯ кнопка нажимается.
</p>
<p>
  Сам Браузер, сам Javascript передает нам в функцию объект <code>event</code>, в котором информация про событие.
</p>
<p>
  Нас интересует <code>event.key</code> - это кнопка которая была нажата на клавиатуре.
</p>
<p>
  Внутрь круглых скобке нашей функции мы должны добавить <code>event</code>, и ниже мы хотим вывести в документ <code>event.key</code>
</p>
<pre><code>
  function handleKeydown(event) {
    document.body.innerHTML += 'Кнопека ножата!!';
    document.body.innerHTML += event.key;
  }
  document.addEventListener('keydown', handleKeydown);
</code></pre>
<p>
  <code>event.key</code> это переменная, поэтому его пишем БЕЗ КАВЫЧЕК.
  <p>Кавычки - это ЛИТЕРАЛ, т.е. то что внутри кавычек - БУКВАЛЬНО отобразиться - как просто текст.
</p>
`,
    check: `Уписано document.body.innerHTML += event.key; внутри handleKeydown(event) {}`,
    regexp: /function\s+handleKeydown[(]\s*event\s*[)]\s*{[^;]*;\s*document[.]body[.]innerHTML\s*[+][=]\s*event[.]key;[^}]*}/,
  },
  {
    task: `
<p>
  Молодца! Переведи ФОКУС на результат выполнения программы, и понажимай кнопки.
</p>
<p>
  Выводится нажатая кнопка на экран?
</p>
<p>
  Теперь добавляем <code>if () {...}</code> чтобы реагировать ТОЛЬКО ЛИШЬ на клавишу <code>q</code>.
</p>
<pre><code>
  function handleKeydown(event) {
    document.body.innerHTML += 'Кнопека ножата!!';
    document.body.innerHTML += event.key;
    if (event.key == 'q') {
      alert('ЭЭ чо q жмешь братан');
    }
  }
  document.addEventListener('keydown', handleKeydown);
</code></pre>
</p>
`,
    check: `Уписано if (event.key == 'q') { alert('...') }`,
    regexp: /if\s*[(]\s*event[.]key\s*==\s*['"]q['"]\s*[)]\s*{\s*alert[(]\s*['"][^'"]+['"][)];[^}]*}/,
  },
];

const skills = ['functions', 'innerHTML', 'event'];

export default {
  story,
  code,
  steps,
  skills,
  id,
  status: 'homework',
};
