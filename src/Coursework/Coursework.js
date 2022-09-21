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
    </article>
    <article>
      <h3>Левел 1 (10-80 часов): Делаем модуль для Ghost of Kyiv</h3>
      <p>
        Делаем свой модуль для игры Ghost of Kyiv
      </p>

      <ul>
        <li>
          [10 h] Главная страница: привествие, запуск Игры.
        </li>
        <li>
          [20 h] Индикаторы ХП, прогреса уровня, какие ракеты есть и т.д.
          <img style="height: 200px; display: block;" src="/src/Coursework/img/indicators.png" />
        </li>
        <li>
          [20 h] Норм управления кнопками (Физека): чтоб было приятно летать)
        </li>
        <li>
          [40 h] Страница Мой Корабль / Инвентарь: показываем кортинке корабля, и обвесы: ракеты и т.д. по клику ракета снимается с корабля в Инвентарь. По клику на Ракету в Инвентаре - ставится на корабль (визуально кортинке перемещаются). В будущем здесь будет Магазин чтоб докупать Скины или Обвесы)
        </li>
        <li>
          Еще что мож)
        </li>
        <li>
          Добавляем в Резюме что в Игре сделали даный модуль.
        </li>
        <li>
          ПРОФИТ )
        </li>
      </ul>
    </article>
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
          Добавляем в Резюме
        </li>
        <li>
          ПРОФИТ )
        </li>
      </ul>
    </article>
    <article>
      <h3>Левел 2 (100-200 часов): Делаем свою игру (простую)</h3>
      <p>
        Любые простые стандартные 2d игры: пятнашки, стреялки, леташки )
      </p>
      <p>
        Я напр. на первую работу тестовое задание делал Пятнашки))
      </p>
    </article>
    <article>
      <h3>Левел Свой Вариант</h3>
      <p>
        Можно делать любой сайт или приложение )
      </p>
      <p>
        Если есть идея )
      </p>
      <p>
        Я напр. другу сделал сайт для продажи солнцезащитных очков - он через инсту продавал.
        </p>
      <p>
        И я включил этот сайт в Резюме как сайт которым горжуся )
      </p>
    </article>
  `;
  return element;
};
