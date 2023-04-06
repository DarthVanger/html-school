export const Resources = () => {
  const element = document.createElement('article');

  element.innerHTML = `
    <h2>МАТЕРІАЛИ</h2>
    <section id="main-page-links">
      <article>
        <a href="#/coursework">
          КУРСАЧ
        </a>
      </article>
      <article>
        <a href="https://docs.google.com/document/d/1J89zb6vTpfljXmxV2cEJx522XhNt-hmU/edit#" target="_blank">
        СЛОВАРЕК
        </a>
      </article>
      <article>
        <a href="#/neural-art">
          Neural ART УЧЕНЕКОВ
        </a>
      </article>
      <article>
        <a href="#/expectation-reality">
          EXPECTATION / REALITY
        </a>
      </article>
      <article>
        <a href="#/resume">
          Делоем РЕЗЮМЕ
        </a>
      </article>
    </section>
  `;

  return element;
};
