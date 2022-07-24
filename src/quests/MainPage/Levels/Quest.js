export const Quest = ({ id, skills, imgSrc, isCompleted }) => {
  const className = `quest${isCompleted && ' is-completed' || ''}` 

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
