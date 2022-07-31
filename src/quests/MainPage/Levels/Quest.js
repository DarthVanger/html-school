import quests from '../../quests/quests.js';

export const Quest = ({ id, imgSrc, isCompleted, title }) => {
  const quest = quests[id];
  let className = 'quest';
  if (isCompleted) {
    className += ' is-completed';
  }

  const { skills } = quest;

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
      </div>
    </div>
  `;
};
