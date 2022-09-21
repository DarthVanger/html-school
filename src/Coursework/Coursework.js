const element = document.createElement('div');
element.id = 'coursework';
export const Coursework = () => {
  element.innerHTML = `
    <h2>Courserwork</h2>
    <article>
      <h3>Чё как</h3>
      <ol>
        <li>
          Курсач защищаем на 20-м занятии.
        </li>
        <li>
          Выбираем АДЫН Курсач.
        </li>
        <li>
          Выбираем сложность по достумному личному времени.
        </li>
      </ol>
    </article>
    <article>
      <h3>Левел 0 (4-8 часов): Пацан с сайтом</h3>
      <p>
        Делаем свой личный сайт. За 4 часа можно простенький сделать. За 8 покрасивше)
      </p>
      <p>
        Сколько людей ты знаешь, у которых есть личный сайт? ) Отож ) Для резюме неплохой плюс.
      </p>
      <figure>
        <img src="/src/Coursework/img/personal-website.jpeg" />
        <figcaption>Премер простого личного сайта</figcaption>
      </figure>

      <h4>Что нужно</h4>
      <ul>
        <li>
          Заголовки, параграфы красиво сделать
        </li>
        <li>
          Кортинке красиво
        </li>
        <li>
          Инфой это все заполнить
        </li>
        <li>
          Заливаем на Гитхаб, добавляем в Резюме
        </li>
        <li>
          ПРОФИТ )
        </li>
      </ul>
    <article>
      <h3>Левел 1 (10-100 часов): Пацан с сертификатом</h3>
      <p>
        Проходим курс и получаем сертификат.
      </p>
      <div class="grid">
        <div class="card">
          <h5>Interactivity with JavaScript</h5>
          <figure>
            <img src="/src/Coursework/img/michigan.jpg" />
            <figcaption>
              <a href="https://www.coursera.org/learn/javascript">
                https://www.coursera.org/learn/javascript
              </a>
            </figcaption>
          </figure>
        </div>
        <div class="card">
          <h5>HTML, CSS, and Javascript for Web Developers</h5>
          <figure>
            <img src="/src/Coursework/img/john-hopkins.jpg" />
            <figcaption>
              <a href="https://www.coursera.org/learn/html-css-javascript-for-web-developers">
                https://www.coursera.org/learn/html-css-javascript-for-web-developers
              </a>
            </figcaption>
          </figure>
        </div>
        <div class="card">
          <h5>Programming Foundations with JavaScript, HTML and CSS</h5>
          <figure>
            <img src="/src/Coursework/img/duke.jpg" />
            <figcaption>
              <a href="https://www.coursera.org/learn/duke-programming-web">
                https://www.coursera.org/learn/duke-programming-web
              </a>
            </figcaption>
          </figure>
        </div>
        <div class="card">
          <h5>CS50's Web Programming with Python and JavaScript</h5>
          <figure>
            <img src="/src/Coursework/img/harvard.jpg" />
            <figcaption>
              <a href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript">
              https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript
              </a>
            </figcaption>
          </figure>
        </div>
      </div>

      <h4>Что нужно</h4>
      <ul>
        <li>
          Врэм'я )
        </li>
        <li>
          Смотрим лекции, делаем домашку.
        </li>
        <li>
          Проходим тесты
        </li>
        <li>
          Получаем сертификат
        </li>
        <li>
          ПРОФИТ )
        </li>
      </ul>
    </article>
  `;
  return element;
};
