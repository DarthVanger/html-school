export const Study = () => {
  const element = document.createElement('article');

  element.innerHTML = `
    <h2>НАВЧАННЯ</h2>
    <section id="main-page-links">
      <article>
        <a href="#/homework">
          ДОМАШКА
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
        <a href="#/quiz">
          ЭКЗАМЕНЫ
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
