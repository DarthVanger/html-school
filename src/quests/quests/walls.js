const id = 'walls';

const story = `
  <h2>Копетан! Мы в зоподне!</h2>
  <p>Корабль терпит крушение 3й сезон!</p>
  <p>Копетан! Копетан!</p>
  <p>Перед нами СТЕНА!</p>
  <p>Корабль В нее литит и розбивается!!!</p>
  <p>СпосааааааЙ! Пожалст)))</p>
  <h3>Чо дэлать эээ :P</h3>
  <p>1. Не тупить )))</p>
  <p>2. Короч у нас есь код который двигает корабль на <code class="language-javascript">x += 10;</code></p>
  <p>3. На экране также есть СТЕНА.</p>
  <p>СТЕНА расположена на Позиции <code class="language-css">top: 10;</code></p>
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
  Почитай код, помедитируй ) Че он делоет )
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
  Если да - уперлись - мы хотим выполнить некий код :) который мы позже впишем в фигурные скобки нашего <code class="language-javascript">if (...) {}</code>
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
    regexp: /if\s*\(\s*y\s*>\s*300\s*\)\s+{[^}]*document[.]body[.]innerHTML\s*[+]=\s*['"][^'"]+['"];[^}]*}/
  },
  {
    task: `
<p>
  МОЛОДЕЦ) Смотри за корабликом - происходит че при столкновении со стеной?)
</p>
<p>
  Нюанс первый: координата кортинке задается в ВЕРХНЕМ ЛЕВОМ УГЛЕ.
</p>

<p>
  Соотвественно, если стена находится на y = 300, наше условие <code class="language-js">if (y > 300)</code> сработает ТОЛЬКО когда корабль упрется в стену ВЕРХНИМ ЛЕВЫМ УГЛОМ.
</p>
<p>
  Т.е. корабль должен полностью "войти" в стену )) И только тогда сработает наше условие.
</p>
<p>
  При желании - можно отнять от 300 высоту кортинке корбаля, и прописать это число в условии, чтобы оно срабатывало когда корабль упирается в стену своей нижней гранью.
</p>
<p>
  Нюанс второй: текст "СТОПЭЭЭ", который мы добавляем в <code class="language-js">document.body.innerHTML</code>, отображается в самом верху документа, поскольку у кортинке стоит <code class="language-css">position: absolute</code>.
</p>
<p>
  Т.е. кортинке отображаетя поверх всего что в документе и никак не влияет на позицию текста.
  Соответсвенно текст отображается в самом начале документа.
</p>
<p>
  Ну что, увидел где и когда добавляется текст "СТОПЭЭЭ" ?)
</p>
<p>
  Идем дальше )<br />
  Как ты мог заметить - мы не останаливаем корабль) Мы только кричим "СТОПЭЭЭ" )
</p>
<p>
  Корабль продолжает движение поскольку мы продолжаем прибавлять <code class="language-js">y += 10;</code>. Этот код находится ВНЕ фигурных скобок условия <code class="language-js">if (...) {...}</code>.
</p>
<p>
  Чтобы корабль остановился, самое просто решение - внутри нашего <code class="language-js">if (...) {...}</code> перезаписывать координату.
</p>
<p>
  Т.е. до того как Y достиг 300, мы его просто увеличиваем на 10 каждую секунду.
</p>
<p>
  А после того как Y достиг 300, мы его будем перезаписывать в <code class="language-js">y = 0</code>.
</p>
<p>
  Код <code class="language-js">y += 10;</code> у нас будет выполняться ВСЕГДА, поскольку он ВНЕ условия.
</p>
<p>
  Но внутри <code class="language-js">if (...) {...}</code>, мы  будем обнулять <code>Y</code> когда он достиг 300. 
</p>
<p>
  И мы наконец спасем наш корбаль от крушения! %)
</p>
<img src="/img/zhdun.jpeg" height="150" />
`,
    check: "Внутри if () {} прописано обнуление y = 0;",
    regexp: /if\s*\(\s*y\s*>\s*300\s*\)\s+{[^}]*y\s*=\s*(0|300);[^}]*}/
  },
  {
    task: `
<p>
  Ну что, возвращается корабль в <code class="language-js">y = 0</code>, после того как его верхний левый угол достиг 300? :)
</p>
<p>
  Все же это не остановка получается, а телепортация :)
</p>
<p>
  Из <code class="language-js">y = 300;</code> мы тупо перекидываем корабль в <code class="language-js">y = 0;</code> 
</p>
<p>
  Как же сделать остановку?)
</p>
<p>
  Да просто не обнулять Y, а оставлять таким же - 300 :)
</p>
<p>
  Т.е. ЕСЛИ Y > 300, то мы его ПЕРЕЗАПИСЫВАЕМ в 300.
</p>
<p>
  Как только Y стает 310, выполняется наше условие <code class="language-js">if (y > 300)</code>, выполняется код внутри фигурных скобок условия <code class="language-js">if (...) {...}</code>, а там мы пишем <code class="language-js">y = 300;</code> что ПЕРЕЗАПИСЫВАЕТ Y, и он из 310 превращается в 300.
</p>
<p>
  И так - КАЖДУЮ СЕКУНДУ. Когда Y станет 300, наш код будет каждую секунду прибавлять к нему 10, затем попадать внутрь <code class="language-js">if (...) {...}</code> и перезаписывать Y снова в 300. Т.е. это бесконечный цикл. Но при этом корбаль будет стоять на месте: ведь <code>Y</code> будет всегда 300, больше мы ему увеличиться не дадим.
</p>
<p>
 Понел чо дэлат?)
</p>
<img src="/img/zhdun.jpeg" height="150" />
`,
    check: "Вместо y = 0; уписано y = 300;",
    regexp: /if\s*\(\s*y\s*>\s*300\s*\)\s+{[^}]*y\s*=\s*300;[^}]*}/
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
  <img id="wall" src="/img/ice.gif"/>
  <img id="ship" src="/img/ship.gif" />
</body>

<script>
  let y = 0;

  function moveShip() {
    let ship = document.querySelector('#ship');
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
  status: 'homework',
};
