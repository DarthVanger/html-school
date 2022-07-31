import quests from '../../quests/quests.js';

export const Quest = ({ id, imgSrc, title, completions }) => {
  const quest = quests[id];
  let className = 'quest';
  const isCompleted = completions?.length > 0;
  if (isCompleted) {
    className += ' is-completed';
  }

  const { skills } = quest;

  const displayDate = (d) => (new Date(d)).toLocaleString(
    'ru-RU',
    {
      month: 'short',
      day: 'numeric',
    }
  );

  const lastCompletion = completions?.sort((a, b) =>
    new Date(b) - new Date(a)
  )[0];


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

  return `
    <div class="quest-card">
      <a id=${id} class="${className}" href="#/quests/${id}">
        <img src="${imgSrc}" />
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
        ${completions?.length && `
          <div class="quest-card-footer">
            <div class="completions">
              ${completions.map(c => 
                `Выполнено: ${displayDate(c.date)}<br>`
              )}
            </div>
            <div class="curse">
              Проклятье забвения через: ${getCurseDays(lastCompletion.date)} дней
            </div>
          </div>
       `}
      </div>
    </div>
  `;
};
