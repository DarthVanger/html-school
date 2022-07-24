import { Quest } from './Quest.js';
import { QuestList } from './QuestList.js';
import { getCompletedQuests } from './api.js';
import { getStudent } from '../../../session.js';
import quests from '../../quests/quests.js';

export const Levels = () => {
  const getElement = () => document.querySelector('#levels');
  const state = {
    completedQuests: [],
  };

  const setState = (newState) => {
    console.log('set state', newState);
    state.completedQuests = newState.completedQuests;

    render();
  };

  setTimeout(async () => {
    const completedQuests = await getCompletedQuests({ student: getStudent() });
    setState({
      completedQuests,
    });
  });

  const render = () => {
    const isQuestCompleted = (quest) => Boolean(state.completedQuests?.find(q => q.id === quest.id));

    let level1Quests = [
      {
        imgSrc: 'src/quests/img/alertXuy4ek.jpg',
        ...quests.alertXuy4ek,
      },
      {
        imgSrc: 'src/quests/img/innerHTML.jpg',
        ...quests.innerHTML,
      },
      {
        imgSrc: 'src/quests/img/functions.png',
        ...quests.functions,
      },
      {
        imgSrc: 'src/quests/img/variables.png',
        ...quests.variables,
      },
      {
        imgSrc: 'src/quests/img/functionParameters.png',
        ...quests.functionParameters,
      },
    ];

    let level2Quests = [
      {
        imgSrc: 'src/quests/img/flying.gif',
        ...quests.flying,
      },
    ];

    level1Quests = level1Quests.map(q => ({
      ...q,
      isCompleted: isQuestCompleted(q),
    }));

    level2Quests = level2Quests.map(q => ({
      ...q,
      isCompleted: isQuestCompleted(q),
    }));

    const level1QuestsListHTML = QuestList(level1Quests.map(q => Quest(q)));
    const level2QuestsListHTML = QuestList(level2Quests.map(q => Quest(q)));

    const html = `
      <div id="levels">
        <h2>Базовые Команды</h2>
        ${level1QuestsListHTML}
        <h2>Перемещение Корабля</h2>
        ${level2QuestsListHTML}
      </div>
    `;

    if (getElement()) {
      const div = document.createElement('div');
      div.id = "levels";
      div.innerHTML = `
        <h2>Базовые Команды</h2>
        ${level1QuestsListHTML}
        <h2>Перемещение Корабля</h2>
        ${level2QuestsListHTML}
      `;

      getElement().replaceWith(div);
    }

    return html;
  };

  return render();

};
