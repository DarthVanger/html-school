const element = document.createElement('div');
element.id = 'learning-progress';
import { LearningProgressItem } from './LearningProgressItem.js';

export const LearningProgress = () => {

  const items = [
    {
      text: 'ЗНОКОМСТВО - HTML: <h1>, <p>, <img>. CSS: h1, p.',
      skills: ['html-h1', 'html-p', 'html-img', 'css-h1-p'],
      url: 'http://localhost:8080/src/slides.html#lesson1',
    },
    {
      text: 'ССЫЛКЕ: <a href="...">, ВИДЕО: <video>',
      skills: ['html-a', 'html-video'],
      url: 'http://localhost:8080/src/slides.html#lesson2',
    },
    {
      text: 'ДЖАВО-СКРИПТ',
      skills: ['functions', 'variables', 'querySelector', , 'style', 'alert', 'xuy4ek'],
      url: 'http://localhost:8080/src/slides.html#lesson3',
    },
    {
      text: 'ПОЛЕТ КОРАБЛЯ',
      skills: ['event', 'on click', 'console', 'functions', 'click-event', 'variables', 'style'],
      url: 'http://localhost:8080/src/slides.html#lesson4',
    },
    {
      text: 'СТЕНЫ: if/else. ПЛАЗМА',
      skills: ['if-else', 'variables'],
    },
    {
      text: 'Миша все хуйня - давай по новой. Функции',
      skills: ['functions'],
    },
    {
      text: 'Основы JS: функции и переменные',
      skills: ['functions', 'variables'],
    },
    {
      text: 'Ноченаем делать игру: управление (keydown, click)',
      skills: ['event', 'key-event', 'click-event', 'if-else', 'innerHTML'],
    },
    {
      text: 'Приводим код в порядок: красиво печатаем Х на экране. Добавляем setInterval(). Уже 4 функции!',
      skills: ['event', 'key-event', 'click-event', 'if-else', 'innerHTML'],
    },
    {
      text: 'ЭЭЭЭ КВАТОР!!! ПОЗДРАВЛЯЮ!!! :)',
      skills: ['бухич', 'дутьё'],
    },
  ];

  items.forEach(it => {
    it.text = it.text.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  });

  element.innerHTML = '';

  items.forEach((item, idx) => {
    console.log('apend item: ', item);
    element.append(LearningProgressItem({ item, idx }));
  });

  return element;
};
