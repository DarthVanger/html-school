const element = document.createElement('div');
element.id = 'coursework';
export const Coursework = () => {
  element.innerHTML = `
    <h2>Courserwork</h2>
    <article>
      <h3>Level 0: Пацан с сайтом</h3>
      <p>
        Делаем свой личный сайт.
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
  `;
  return element;
};
