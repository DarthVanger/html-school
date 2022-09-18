import quests from '../../quests/quests.js';
import { getStudent } from '../../../session.js';
import { getCompletedQuests } from './api.js';
import { HomeworkDoneBadge } from './HomeworkDoneBadge.js';
import { getLastCompletion, getCurseDays, getQuestStatus } from './questStatus.js';
import walls from '../../quests/walls.js';
import { QuestCardBorder } from './QuestCardBorder.js';
import { CyberpunkBorder } from './CyberpunkBorder.js';


export const Quest = ({ id, imgSrc, title, store, onClick }) => {
  const getElement = () => document.querySelector(`#${id}`);
  const quest = quests[id];
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

  let lastCompletion = getLastCompletion(completions);

  const status = getQuestStatus({ quest, completions });
  console.log('quest status: ', status);
  cardClassName += ` status-${status}`;

  setTimeout(async () => {
    const completedQuests = await getCompletedQuests({ student: getStudent() });
    console.log('quest.id:', quest.id);
    console.debug('completedQuestsi n QUEST: ', completedQuests);

    completions = completedQuests.filter(q => q.id === quest.id);
    lastCompletion = getLastCompletion(completions);
    console.log('completions: ', completions)
    console.log('lastCompletion: ', lastCompletion)

    const status = getQuestStatus({ quest, completions });
    const card = getElement();
    console.log('Quest status: ', status);
    card.className = `quest-card status-${status}`;

    const completionsEl = getElement().querySelector('.quest-card-completions');

    completionsEl.innerHTML = `
        ${status === 'homework-done' && HomeworkDoneBadge() || ''}
        <div class="completions">
          ${completions?.map(c => 
            `
              <div class="completion">Выполнено: ${displayDate(c.date)}</div>
            `
          ).join('')}
        </div>
        <!--
        ${lastCompletion && `
          <div class="curse">
            Проклятье забвения через: ${getCurseDays(lastCompletion?.date)} дней
          </div>
        ` || ''}
        -->
        ${!lastCompletion && `
          <div class="new">
            Не знав та й забув
          </div>
        ` || ''}
        ${status == 'forgotten' && `
          <div class="forgotten">
            ЗАБЫТО
          </div>
        ` || ''}
      </div>
    `;
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
      ${QuestCardBorder()}
      <div class="quest-card-title">
        ${title}
      </div>
      <div class="quest-card-body">
        ${status == 'forgotten' && `
          <div class="forgotten-status-overlay"></div>
          <div class="forgotten-status-overlay-background"></div>
          <div class="forgotten-status-box-shadow"></div>
        ` || ''}
        <div class="quest">
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
        <div class="quest-card-completions">
          Loading...
        </div>
      </div>
    </a>
  `;
};
