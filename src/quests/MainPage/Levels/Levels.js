import { Quest } from './Quest.js';
import { QuestList } from './QuestList.js';
import { getCompletedQuests } from './api.js';
import { getStudent } from '../../../session.js';
import quests from '../../quests/quests.js';

const element = document.createElement('div');
element.id='levels';
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
      setState({
        completedQuests,
      });
    });
  }

  const isQuestCompleted = (quest) => Boolean(state.completedQuests?.find(q => q.id === quest.id));

  const html = `
    <div id="levels">
      <h2>HTML</h2>
      ${Quest({
        id: 'htmlTags',
        title: 'ГИПЕР ТЕКСТ',
        imgSrc: 'src/quests/img/flying.gif',
        isCompleted: isQuestCompleted(quests.htmlTags),
      })}
      <h2>CSS</h2>
      ${Quest({
        id: 'css',
        title: '"ШО ТАКЭ CSS" АБО "КАСКАДНИЙ СТИЛЬ ЛАЙНА"',
        imgSrc: 'src/quests/img/css.jpeg',
        isCompleted: isQuestCompleted(quests.css),
      })}

      <h2>ЖАБАСКРИПТ</h2>

      <h3>Шо воно ТакЭ Той СкрЫпт</h3>

      ${Quest({
        ...quests.alertXuy4ek,
        title: "Знакомство с Жабо-Скрептом: фукцея <code>alert('xuyrek');</code>",
        imgSrc: 'src/quests/img/alertXuy4ek.jpg',
        isCompleted: isQuestCompleted(quests.alertXuy4ek),

      })}
      ${Quest({
        ...quests.innerHTML,
        title: "Изменение наполнения докмуента: <code>innerHTML</code>",
        imgSrc: 'src/quests/img/innerHTML.jpg',
        isCompleted: isQuestCompleted(quests.innerHTML),
      })}

      <h3>Основы Перограмированее: Фукцеи и Переменныэ</h3>

      ${Quest({
        ...quests.functions,
        title: "ФУКЦЕИ: Основа Джаваскрипт - База!!!",
        imgSrc: 'src/quests/img/functions.png',
        isCompleted: isQuestCompleted(quests.functions),
      })}
      ${Quest({
        ...quests.variables,
        title: "ПЕРЕМЕННЫЕ (VAR - Variables) - тоже База!!!",
        imgSrc: 'src/quests/img/variables.png',
        isCompleted: isQuestCompleted(quests.variables),
      })}

      <h3>Основы LEVEL 2: Параметры Фукцеи, Условея</h3>

      ${Quest({
        ...quests.functionParameters,
        title: "Параметры ФукцеЙ - Продвинутые Фукцеи - и это База)))",
        imgSrc: 'src/quests/img/functionParameters.png',
        isCompleted: isQuestCompleted(quests.functionParameters),
      })}
      ${Quest({
        ...quests.conditionals,
        title: "УСЛОВЕЯ (Логека): if / else - Базейшая база, основа Основ!!))",
        imgSrc: 'src/quests/img/conditionals.jpeg',
        isCompleted: isQuestCompleted(quests.conditionals),
      })}

      <h2>ШТО Ж - КОПЕТАН!<br/>Приготовиться Управлять Корабелем!</h2>

      ${Quest({
        ...quests.flying,
        title: 'КОПЕТАН! Срочно в Полёт! У КоСмаС!',
        imgSrc: 'src/quests/img/flying.gif',
        isCompleted: isQuestCompleted(quests.flying),
      })}

      ${Quest({
        ...quests.walls,
        title: 'КОПЕТАН! Корабель терпит Крушение! Сезон 3.',
        imgSrc: 'src/quests/img/walls.gif',
        isCompleted: isQuestCompleted(quests.walls),
      })}
    </div>
  `;

  element.innerHTML = html;

  return element;
};

