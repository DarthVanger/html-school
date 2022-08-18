import quests from '../../quests/quests.js';

export const Quest = ({ id, imgSrc, title, completions }) => {
  const getElement = () => document.querySelector(`#${id}`);
  const quest = quests[id];
  let className = 'quest';
  let cardClassName = 'quest-card';
  const isCompleted = completions?.length > 0;
  if (isCompleted) {
    className += ' is-completed';
  }

  if (quest.status) {
    cardClassName += ` status-${quest.status}`;
  }

  const { skills, img } = quest;

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

  setTimeout(() => {
    const codes = getElement().querySelectorAll('code');
    codes.forEach(c => Prism.highlightElement(c));
  });


  return `
    <div class="${cardClassName}" id=${id}>
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
