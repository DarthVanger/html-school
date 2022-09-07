export const Answer = (student, name) => {
  return `
    <section class="answer">
      <figure class="answer-avatar">
        <img src="/img/${name}.jpg" />
        <figcaption>${name}</figcaption>
      </figure>
      <div class="expectation">
        <h3>Expectation</h3>
        <span>${student.expectation}</span>
      </div>
      <div class="reality">
        <h3>Reality</h3>
        <span>${student.reality}</span>
      </div>
    </section>
  `;
};
