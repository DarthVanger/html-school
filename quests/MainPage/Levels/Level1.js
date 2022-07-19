import { Quest } from './Quest.js';
import { QuestList } from './QuestList.js';
import { getCompletedQuests } from './api.js';
import { getStudent } from '../../../session.js';

export const Level1 = () => {
  const getElement = () => document.querySelector('#level-1');
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

    let quests = [
      {
        imgSrc: 'img/alertXuy4ek.png',
        skills: ['&lt;script&gt;', 'alert'],
        id: 'alertXuy4ek',
      },
      {
        imgSrc: 'img/innerHTML.png',
        skills: ['innerHTML'],
        id: 'innerHTML',
      },
    ];

    quests = quests.map(q => ({
      ...q,
      isCompleted: isQuestCompleted(q),
    }));

    const questsListHTML = QuestList(quests.map(q => Quest(q)));

    const html = `
      <div id="level-1">
        <h2>Базовые Команды</h2>
        ${questsListHTML}
      </div>
    `;

    if (getElement()) {
      const div = document.createElement('div');
      div.id = "level-1";
      div.innerHTML = `
        <h2>Базовые Команды</h2>
        ${questsListHTML}
      `;

      getElement().replaceWith(div);
    }

    return html;
  };

  return render();

};
