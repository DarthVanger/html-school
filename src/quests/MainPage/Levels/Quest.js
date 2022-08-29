import quests from '../../quests/quests.js';
import { getLastCompletion, getCurseDays, getQuestStatus } from './questStatus.js';

export const Quest = ({ id, imgSrc, title, completions, store, onClick }) => {
  const getElement = () => document.querySelector(`#${id}`);
  const quest = quests[id];
  let className = 'quest';
  let cardClassName = 'quest-card';


  const { skills, img } = quest;

  const displayDate = (d) => (new Date(d)).toLocaleString(
    'ru-RU',
    {
      month: 'short',
      day: 'numeric',
    }
  );

  const lastCompletion = getLastCompletion(completions);

  const status = getQuestStatus();
  cardClassName += ` status-${status}`;

  setTimeout(() => {
    const codes = getElement()?.querySelectorAll('code');
    codes?.forEach(c => Prism.highlightElement(c));

    getElement()?.addEventListener('click', () => {
      onClick(id);
    });
  });

  return `
    <div class="${cardClassName}" id=${id}>
      <div class="left">
        <a class="${className}" href="#/quests/${id}">
          ${imgSrc && `<img src="${imgSrc}" />` || ''}
          ${img || ''}
          <div class="quest-skills-list">
            ${skills?.map(skill => `
              <div class="quest-skill">
                ${skill}
              </div>
            `).join('')}
          </div>
        </a>
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
    </div>
  `;
};
