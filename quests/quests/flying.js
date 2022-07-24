const id = 'flying';

const code = `
<style>
  img {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<body>
  <img src="/game/ship.gif" />
</body>

<script>

</script>
`;

export const steps = [
  {
    task: `
Копетан! Срочно переместите корабль в точку x = '200px'! Следуйте инструкциям!
<pre><code class="language-javascript">
    var korabel = document.querySelector('img');
</pre></code>
`,
    check: "var korabel = document.querySelector('img')",
    regexp: /var\s+korabel\s*=\s*document\.querySelector\('img'\);/,
  },
  {
    task: `
</p>
  Корабль на связи! Сохранен в переменную под названием </em>korabel</em>. Теперь указываем ему отступ слева!
</p>
<pre><code class="language-javascript">
  var korabel = document.querySelector('img');
  korabel.style.left = '200px';
</pre></code>
`,
    check: "korabel.style.left = '200px';",
    regexp: /korabel\.style\.left\s*=\s*['"]200px['"];/,
  },
  {
    task: `
</p>
  Отличная работа! Телепортация в точку x = '200px' Выполнена!
</p>
<p>
  Корректировщики дали новую  наводку! Срочно, нужн телепорт в точку x = '350px', иначе накроет межгалактической артой!
</p>
<pre><code class="language-javascript">
  var korabel = document.querySelector('img'); 
  korabel.style.left = '200px';
  korabel.style.left = '350px';
</pre></code>
`,
    check: "korabel.style.left = '350px';",
    regexp: /korabel\.style\.left\s*=\s*['"]350px['"];/,
  },
];

const skills = ['style', 'position absolute', 'querySelector'];

export default {
  code,
  steps,
  skills,
  id,
};
