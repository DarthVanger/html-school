import quests from '../../quests/quests.js';
import { getStudent } from '../../../session.js';
import { getCompletedQuests } from './api.js';
import { getLastCompletion, getCurseDays, getQuestStatus } from './questStatus.js';
import walls from '../../quests/walls.js';


export const Quest = ({ id, imgSrc, title, store, onClick }) => {
  const getElement = () => document.querySelector(`#${id}`);
  const quest = quests[id];
  let className = 'quest';
  let cardClassName = 'quest-card';

  let completions = [];
  const { skills, img } = quest;

  const displayDate = (d) => (new Date(d)).toLocaleString(
    'ru-RU',
    {
      month: 'short',
      day: 'numeric',
    }
  );

  const lastCompletion = getLastCompletion(completions);

  const status = getQuestStatus({ quest, completions });
  console.log('quest status: ', status);
  cardClassName += ` status-${status}`;

  setTimeout(async () => {
    const completedQuests = await getCompletedQuests({ student: getStudent() });
    console.debug('completedQuestsi n QUEST: ', completedQuests);

    completions = completedQuests.filter(q => q.id === quest.id);
    console.log('completions: ', completions)

    const status = getQuestStatus({ quest, completions });
    const card = getElement();
    console.log('Quest status: ', status);
    card.className = `quest-card status-${status}`;
  });

  setTimeout(() => {
    const codes = getElement()?.querySelectorAll('code');
    codes?.forEach(c => Prism.highlightElement(c));

    getElement()?.addEventListener('click', (e) => {
      onClick(id);
    });
  }, 100);

  return `
    <a href="#/quests/${id}" class="${cardClassName}" id=${id}>
      ${status == 'forgotten' && `
        <div class="forgotten-status-overlay"></div>
        <div class="forgotten-status-overlay-background"></div>
        <div class="forgotten-status-box-shadow"></div>
      ` || ''}
      <div class="left">
        <div class="${className}">
          ${imgSrc && `<img src="${imgSrc}" />` || ''}
          ${img || ''}
          <div class="quest-skills-list">
            ${skills?.map(skill => `
              <div class="quest-skill">
                ${skill}
              </div>
            `).join('')}
          </div>
        </div>
        <div class="quest-card-caption">
          <div class="quest-title">${title}</div>
        </div>
      </div>
      <div class="right quest-card-completions">
        <div class="completions">
          ${completions?.map(c => 
            `<div class="completion">Выполнено: ${displayDate(c.date)}</div>`
          ).join('')}
        </div>
        ${lastCompletion && `
          <div class="curse">
            Проклятье забвения через: ${getCurseDays(lastCompletion?.date)} дней
          </div>
        ` || ''}
        ${!lastCompletion && `
          <div class="curse">
            Не знав та й забув
          </div>
        ` || ''}
      </div>
    </a>
  `;
};
