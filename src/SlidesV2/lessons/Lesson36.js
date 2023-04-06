import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';
import { Vangers } from '../../Vangers/Vangers.js';

export const Lesson36 = (props) => {
  const element = document.createElement('section');
  element.innerHTML = `
    <h2>Уроке №36</h2>
    <p>Создаем Мир вместе - <a href="#/vangers">Вангеры ссылке</a></p>
  `;


  return element;
}
