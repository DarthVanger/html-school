const id = 'walls';

const story = `
  <h2>Копетан! Мы в зоподне!</h2>
  <p>Корабль терпит крушение 3й сезон!</p>
  <p>Копетан! Копетан!</p>
  <p>Перед нами СТЕНА!</p>
  <p>Корабль В нее литит и розбивается!!!</p>
  <p>СпосааааааЙ! Пожалст)))</p>
  <h3>Че дэдать эээ :P</h3>
  <p>1. Не тупить )))</p>
  <p>2. Короч у нас есь код который двигает корабль на <code class="language-javascript">x += 10</code></p>
  <p>3. На экране также есть СТЕНА.</p>
  <p>СТЕНА расположена на Позиции TOP = 300</p>
  <p>4. Читоби не врезаться у стену, нужно прописать код</p>

  <pre>
  <code class="language-javascript">
if (y > 300) {
  document.body.innerHTML += ('СТОПЭЭЭЭЭ');
}
  </code>
  </pre>

  <p>Собсвно как бы вот, собсно как бы вот и всё )</p>
  <p>Так сказать))</p>
`;

const steps = [
  {
    task: `
<p>
  Почитай код, помедитируй ) Че он делоет ) Объяснение как бе сверху ☝
</p>
<p>
  Первое задание - вписать ПУСТОЙ 
  <code class="language-js">if</code>:
</p>
<pre><code class="language-js">
  if (y > 300) {}
</code></pre>
<p>
  Пустой - в смысле с пустыми фигурными скобками, куда мы позже впишем КАКОЙ КОД ВЫПОЛНЯТЬ по даному УСЛОВИЮ.
</p>
<p>
  Наша финальная задача - вывести в документ текст 'СТОПЭЭЭ' когда корабль упирается в стену.
</p>
<p>
  Первым шагом нужно придумать куда вписать ПУСТОЙ <code class="language-js">if (y > 300) {}</code>.
</p>
<p>
  Когда мы хотим проверять уперся ли корабль в стену?
   Сразу при загрузке сайта, когда корабль в точке 0?
 </p>
 <p>
   Вряд ли) Ведь ноль меньше 300 очевидно. Это нам не поможет миновать стену :)
</p>
<p>
  Значит нужно вписать условие где-то там, где мы меняем нашу координату - прибавляем 10, и нужно проверить - а сейчас уперлись в стену уже или нет?
</p>
<p>
  Если да - уперлись - мы хотим выполнить некий код :) который мы позже впишем в фигурные скобки нашего <code class="language-javascript">if (..) {}</code>
</p>

`,
    check: "Уписано if (y > 300) {} у нужно месте ;)",
    regexp: /moveShip\(\)\s*{[^}]*\(\s*y\s*>\s*300\s*\)\s+{[^}]*}[^}]*}/,
  },
  {
    task: `
<p>
  Хорош! :) Теперь нужно вписать внутри наших пустых фигурных скобок ифа <code class="language-javascript">document.body.innerHTML += 'СТОПЭЭЭЭ';</code>
</p>
<p>
  Ждемс :)
</p>
<img src="/img/zhdun.jpeg" height="150" />
`,
    check: "Уписано document.body.innerHTML += 'СТОПЭЭЭ'; у нужно месте ;)",
    regexp: /if\s*\(\s*y\s*>\s*300\s*\)\s+{\s+document[.]body[.]innerHTML\s+[+]=\s+['"][^'"]+['"];[^}]*}/
  },
];

const skills = ['if', 'style', 'position: absolute', '#id selector', 'setInterval'];

const code = `
<style>
  #ship {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
  }

  #wall {
    position: absolute;
    top: 300;
    width: 100%;
  }
</style>

<body>
  <img id="ship" src="/img/ship.gif" />
  <img id="wall" src="/img/ice.gif"/>
</body>

<script>
  const ship = document.querySelector('#ship');

  let y = 0;

  function moveShip() {
    y += 10;
    ship.style.top = y;
  }

  setInterval(moveShip, 1000);
</script>
`;

export default {
  story,
  code,
  steps,
  skills,
  id,
};
