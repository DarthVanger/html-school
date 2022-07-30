import quests from '../../quests/quests.js';

export const Quest = ({ id, imgSrc, isCompleted }) => {
  const quest = quests[id];
  let className = 'quest';
  if (isCompleted) {
    className += ' is-completed';
  }

  const { skills } = quest;

  return `
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
  `;
};
