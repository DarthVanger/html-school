import { WeedSvg } from '../../WeedSvg.js';

export const Homework31  = () => `
<h2>ДОМАШЕКА# 31</h2>

<p><b><big>
  <a href="/#/slides/lesson31">ПРОПУСТВШИМ &mdash; СМОТРИМ СЛАЙДЫ УРОК №31 - ССЫЛКЕ</a> (заходим в блок, и там след слайд клавиша "n", предыдущий - клавиша "p")
</big></b></p>

<p><b><big>
  ВСЕМ &mdash; Сделать самостоятельно ГЕПАРДА
</big></b></p>

<p>По Премеру</p>
<big><b>
  <a href="gepard/index.html">ССІЛКЕ НА ГЕПАРДА</a>
  <p>СМотріте код АНалізіруйте</p>
  <p>Ссылке на каждый файл &mdash; создайте себе эти файлы и запустите</p>
  <p>Создайте следующие 3 файла чтобы запустатить Гепарда:</p>
  <ol>
    <li>
      <a href="/gepard/index.html">index.html</a>
    </li>
    <li>
      <a href="/gepard/style.css">style.html</a>
    </li>
    <li>
      <a href="/gepard/app.js">app.js</a>
    </li>
  </ol>

<p>
  Если
  <b><big>
   Гепард НЕ ЗАВОДИТСЯ
  </big></b>
  &mdash
  Передерни, проверь все 3 шага, перезагрузи.
</p>

<p>
  Проверь ошибки в консоле).
</p>

<h3>
  ${WeedSvg({})} Задание с одной банкой &mdash; Попасть в Дрона ${WeedSvg({})}
</h3>

<p>
  Нужно попасть пулей в точку (400; 400), НО с той же скоростью - 50 пикселей в секунду.
</p>

<p>
  Сейчас у нас скорость <code>Vx = 30</code> и <code>Vy = 40</code>.
</p>

<p>
  Общая скорость - сколько пикселей за секунду проходит пуля: <br>
  <pre><code>V = sqrt(30^2 + 40^2) = 50</code></pre>
</p>

<p>
  Вам нужно лететь в точку (400; 400) со скоростью 50 пикселей в секунду.
</p>

<p>
  Какие нужно задать <code>Vx</code> и <code>Vy</code>, так чтобы при этом <pre><code>sqrt(Vx^2 + Vy^2) = 50</code></pre> ?
</p>

<p>
  Заметте, что пуля со скоростью 50, попадет в точку (400, 400) за 11 секунд. <br />
  Дрон же уже будет в точке (410, 400) через 11 секунд, т.е. на 10 пикселей правее (Дрон стартует с x=300 и движется 10 пикселей в сек). <br />
</p>

<p>
  Таким образом, мы попадем пулей в Дрон, т.к. он шире 10px, но мы стреляем не в центр Дрона, а левее немного :)
</p>

<p>
  Поэтому след задача - попасть в Дрона который летит быстрее :) <br />
  Желательно в центр прямо ему стрелять на опережение)
</p>

<h3>
  ${WeedSvg({})} ${WeedSvg({})} Задание с двумя банками) &mdash; Попасть во Второго Дрона)) ${WeedSvg({})} ${WeedSvg({})}
</h3>

<p>
  Нужно попасть пулей во второго Дрона! )
</p>

<p>
  Второй Дрон начинает с той же точки (300, 400).<br>
  Но ) Движется вправо со скоростью 20, т.е. вдвое быстрее чем первый дрон.
</p>

<p>
  Нужно попасть пулей во второго Дрона, с той же скоростью пули - 50.
</p>

<p>
  Т.е. какие нужно взять Vx и Vy, чтобы попасть во второго Дрона, и при этом 
  <pre><code>sqrt(Vx^2 + Vy^2) = 50</code></pre> ?
</p>

<figure>
  <img src="/img/homework/drone2-screen.jpg">
  <figcaption>Попасти у Дрона</figcaption>
</figure>
`;
