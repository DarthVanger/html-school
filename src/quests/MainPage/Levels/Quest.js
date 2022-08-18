import quests from '../../quests/quests.js';

export const Quest = ({ id, imgSrc, title, completions, store, onClick }) => {
  const getElement = () => document.querySelector(`#${id}`);
  const quest = quests[id];
  let className = 'quest';
  let cardClassName = 'quest-card';
  const isCompleted = completions?.length > 0;
  if (isCompleted) {
    className += ' is-completed';
  }

  const { skills, img } = quest;

  const displayDate = (d) => (new Date(d)).toLocaleString(
    'ru-RU',
    {
      month: 'short',
      day: 'numeric',
    }
  );

  const lastCompletion = completions?.length ? completions[completions.length - 1] : null;


  const isHomeworkDone = () => {
    if (lastCompletion) {
      const now = new Date();
      const lastCompletionDate = new Date(lastCompletion.date);
      const diffDays = (now - lastCompletionDate) / 1000 / 60 / 60 / 24;
      if (diffDays <= 7) {
        return true;
      }
    }
    return false
  }

  if (quest.status) {
    let status = quest.status;
    if (quest.status === 'homework' && isHomeworkDone()) {
      status = 'homework-done';
    }
    cardClassName += ` status-${status}`;
  }

  const getCurseDays = (dateString) => {
    const oneDay = 1000 * 60 * 60 * 24;
    const oneMonth =  oneDay * 30;
    const memoryTime = oneMonth;
     
    const date = new Date(dateString);
    const now = new Date();

    const diff = now.getTime() - date.getTime();
    const remaining = oneMonth - diff;
    const days = Math.round(remaining / oneDay); 
    return days;
  };

  setTimeout(() => {
    const codes = getElement().querySelectorAll('code');
    codes.forEach(c => Prism.highlightElement(c));

    getElement().addEventListener('click', () => {
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
