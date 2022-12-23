import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';

export const Lesson28 = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <article>
      <h1>Уроке #28</h1>
      <section class="content">
        <h2>Погенали )</h2>
      </section>
    </article>

    <article>
      <section class="content">
        <figure>
          <img src="/img/lesson28/za-vstre4y.jpeg" />
        </figure>
        <figcaption>
          За ВстречУ! За УроК!
        </figcaption>
      </section>
    </article>

    <article>
      ${Lety4ka()}
    </article>

    <article>
      ${Timer(5)}
      <section class="content">
        <ol>
          <li>Create two variables: x and y, and assign any numbers to them.</li>
          <li>Print text "x:" on the screen</li>
          <li>Print the value of variable x on the screen</li>
          <li>Print "&lt;br /&gt;" on the screen</li>
          <li>Print text "y:" on the screen</li>
          <li>Print the value of variable y on the screen</li>
        </ol>
      </section>
    </article>
  `;

  return el;
}
