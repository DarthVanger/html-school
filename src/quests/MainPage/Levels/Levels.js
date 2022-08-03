import { Quest } from './Quest.js';
import { QuestList } from './QuestList.js';
import { getCompletedQuests } from './api.js';
import { getStudent } from '../../../session.js';
import quests from '../../quests/quests.js';

const element = document.createElement('div');
element.id = 'levels';
const state = {
  completedQuests: null,
};
export const Levels = () => {
  const setState = (newState) => {
    state.completedQuests = newState.completedQuests;
    Levels();
  };

  if (!state.completedQuests) {
    setTimeout(async () => {
      const completedQuests = await getCompletedQuests({ student: getStudent() });
      console.debug('completedQuests: ', completedQuests);
      setState({
        completedQuests,
      });
    });
  }

  const getCompletions = (quest) => state.completedQuests?.filter(q => q.id === quest.id);
  const isQuestCompleted = (quest) => Boolean(getCompletions(quest));

  const extraProps = (q) => ({
    isCompleted: isQuestCompleted(q),
    completions: getCompletions(q),
  });

  const html = `
    <div id="levels">
      <h2>HTML</h2>
      <div class="quest-list">
        ${Quest({
          id: 'htmlTags',
          title: 'ГИПЕР ТЕКСТ. HTML v1.0. 1991г.',
          ...extraProps(quests.htmlTags),
        })}
        ${Quest({
          id: 'htmlImg',
          title: 'Кортинке ). HTML v2.0. 1995г.',
          ...extraProps(quests.htmlImg),
        })}
      </div>
      <h2>CSS</h2>
      <div class="quest-list">
        ${Quest({
          id: 'css',
          title: '"ШО ТАКЭ CSS" АБО "КАСКАДНИЙ СТИЛЬ ЛАЙНА"',
          imgSrc: 'src/quests/img/css.jpeg',
          ...extraProps(quests.css),
        })}
      </div>

      <h2>ЖАБАСКРИПТ</h2>

      <h3>Шо воно ТакЭ Той СкрЫпт</h3>

      <div class="quest-list">
        ${Quest({
          ...quests.alertXuy4ek,
          title: "Знакомство с Жабо-Скрептом: фукцея <code>alert('xuyrek');</code>",
          imgSrc: 'src/quests/img/alertXuy4ek.jpg',
          ...extraProps(quests.alertXuy4ek),

        })}
        ${Quest({
          ...quests.innerHTML,
          title: "Изменение наполнения докмуента: <code>innerHTML</code>",
          imgSrc: 'src/quests/img/innerHTML.jpg',
          ...extraProps(quests.innerHTML),
        })}
      </div>

      <h3>Основы Перограмированее: Фукцеи, Переменныэ, Условея</h3>

      <div class="quest-list">
        ${Quest({
          ...quests.functions,
          title: "ФУКЦЕИ: Основа Джаваскрипт - База!!!",
          imgSrc: 'src/quests/img/functions.png',
          ...extraProps(quests.functions),
        })}
        ${Quest({
          ...quests.variables,
          title: "ПЕРЕМЕННЫЕ (VAR - Variables) - тоже База!!!",
          imgSrc: 'src/quests/img/variables.png',
          ...extraProps(quests.variables),
        })}
        ${Quest({
          ...quests.functionParameters,
          title: "Параметры ФукцеЙ - Продвинутые Фукцеи - и это База)))",
          imgSrc: 'src/quests/img/functionParameters.png',
          ...extraProps(quests.functionParameters),
        })}
        ${Quest({
          ...quests.conditionals,
          title: "УСЛОВЕЯ (Логека): if / else - Базейшая база, основа Основ!!))",
          imgSrc: 'src/quests/img/conditionals.jpeg',
          ...extraProps(quests.conditionals),
        })}
      </div>

      <h2>ШТО Ж - КОПЕТАН!</h2>
      <h3>Приготовиться Управлять Корабелем!</h3>

      <div class="quest-list">
        ${Quest({
          ...quests.flying,
          title: 'КОПЕТАН! Срочно в Полёт! У КоСмаС!',
          imgSrc: 'src/quests/img/flying.gif',
          ...extraProps(quests.flying),
        })}

        ${Quest({
          ...quests.walls,
          title: 'КОПЕТАН! Корабель терпит Крушение! Сезон 3.',
          imgSrc: 'src/quests/img/walls.gif',
          ...extraProps(quests.walls),
        })}

        ${/* Quest({
          ...quests.velocity,
          title: 'СПИДЫ - ФИЗЕКА',
          imgSrc: 'src/quests/img/velocity.gif',
          ...extraProps(quests.velocity),
        }) */ ''}
      </div>
    </div>
  `;

  element.innerHTML = html;

  return element;
};

