export const Study = () => {
  const element = document.createElement('article');
  element.id = "study";

  element.innerHTML = `
    <h2>НАВЧАННЯ</h2>
    <section class="links">
      <article>
        <a href="#/homework">
          ДОМАШКА
        </a>
      </article>
      <article>
        <a href="#/exam">
          ЄКЗАМЕНІ
        </a>
      </article>
      <article>
        <a href="#/skills">
          ДРЕВО УМЕНИЙ
        </a>
      </article>
      <article>
        <a href="#/quests">
          ЗОДАНЕЯ
        </a>
      </article>
      <article>
        <a href="#/progress">
          ПРОГРЕС
        </a>
      </article>
      <article>
        <a href="#/katakombi">
          КАТАКОМБЫ
        </a>
      </article>
    </section>
  `;

  return element;
};
