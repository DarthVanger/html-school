import { Quest } from './Quest.js';
import { getCompletedQuests } from './api.js';
import { getStudent } from '../../../session.js';
import quests from '../../quests/quests.js';

export const Levels = (store) => {
  const element = document.createElement('div');
  element.id = 'levels';

  const html = `
    <div id="levels">
      <h2>HTML</h2>
      <div class="quest-list">
        ${Quest({
          id: 'htmlTags',
          title: 'ГИПЕР ТЕКСТ. HTML v1.0. 1991г.',
          imgSrc: 'src/quests/img/html-1.png',
        })}
        ${Quest({
          id: 'htmlImg',
          title: 'Кортинке ). HTML v2.0. 1995г.',
          imgSrc: 'src/quests/img/html-img.png',
        })}
      </div>
      <h2>CSS</h2>
      <div class="quest-list">
        ${Quest({
          id: 'css',
          title: '"ШО ТАКЭ CSS" АБО "КАСКАДНИЙ СТИЛЬ ЛАЙНА"',
          imgSrc: 'src/quests/img/css.jpeg',
        })}
        ${Quest({
          ...quests.layers,
          title: 'Позиция... АБСОЛЮТ - СЛОИ',
          imgSrc: 'src/quests/img/spaceship.gif',
        })}
      </div>

      <h2>ЖАБАСКРИПТ</h2>

      <h3>Шо воно ТакЭ Той СкрЫпт</h3>

      <div class="quest-list">
        ${Quest({
          ...quests.alertXuy4ek,
          title: "Знакомство с Жабо-Скрептом: фукцея <code>alert('xuyrek');</code>",
          imgSrc: 'src/quests/img/alertXuy4ek.jpg',

        })}
        ${Quest({
          ...quests.innerHTML,
          title: "Изменение наполнения докмуента: <code>innerHTML</code>",
          imgSrc: 'src/quests/img/innerHTML.jpg',
        })}
      </div>

      <h3>Основы Перограмированее: Фукцеи, Переменныэ, Условея</h3>

      <div class="quest-list">
        ${Quest({
          ...quests.functions,
          title: "ФУКЦЕИ: Основа Джаваскрипт - База!!!",
          imgSrc: 'src/quests/img/functions.png',
        })}
        ${Quest({
          ...quests.variables,
          title: "ПЕРЕМЕННЫЕ (VAR - Variables) - тоже База!!!",
          imgSrc: 'src/quests/img/variables.png',
        })}
      </div>
      <div class="quest-list">
        ${Quest({
          ...quests.functionParameters,
          title: "Параметры ФукцеЙ - Продвинутые Фукцеи - и это База)))",
          imgSrc: 'src/quests/img/functionParameters.png',
        })}
        ${Quest({
          ...quests.conditionals,
          title: "УСЛОВЕЯ (Логека): if / else - Базейшая база, основа Основ!!))",
          imgSrc: 'src/quests/img/conditionals.jpeg',
        })}
      </div>

      <h2>ШТО Ж - КОПЕТАН!</h2>
      <h3>Приготовиться Управлять Корабелем!</h3>

      <div class="quest-list">
        ${Quest({
          ...quests.flying,
          title: 'КОПЕТАН! Срочно в Полёт! У КоСмаС!',
          imgSrc: 'src/quests/img/flying.gif',
        })}

        ${Quest({
          ...quests.walls,
          title: 'КОПЕТАН! Корабель терпит Крушение! Сезон 3.',
          imgSrc: 'src/quests/img/walls.gif',
        })}
      </div>

      <h3>Управление кнопками и Стреляем</h3>

      <div class="quest-list">
        ${Quest({
          ...quests.keyboard,
          title: 'Уперовление корабелем кнопками',
          imgSrc: 'src/quests/img/keyboard.webp',
        })}

        ${Quest({
          ...quests.plasma,
          title: 'Стрэляем: Плазма :)',
          imgSrc: 'src/quests/img/plasma.gif',
        })}
      </div>

      <h3>Масивы и циклы</h3>

      <div class="quest-list">
        ${Quest({
          ...quests.whileLoop,
          title: 'While loop: как вывести текст в докУмент 100 раз',
        })}
      </div>

      <h2>ADVANCED</h2>
      <h3>SVG - Веткорна графіка, що Розтягується</h3>

      <div class="quest-list">
        ${Quest({
          ...quests.svg,
          title: 'Малюєм СіськОкуляри',
        })}
      </div>

      <h3>Створення ХТМЛ Елементів в Javascript</h3>

      <div class="quest-list">
        ${Quest(quests.createElement)}
        ${Quest(quests.createElementImg)}
      </div>

      ${  /*
      <div class="quest-list">
        ${Quest({
          ...quests.shipMotion,
          title: 'КОПЕТАН! ПОЛЕТЕЛИ!',
        })}

         Quest({
          ...quests.velocity,
          title: 'СПИДЫ - ФИЗЕКА',
        })
      */ ''}
      </div>
    </div>
  `;

  element.innerHTML = html;

  return element;
};

