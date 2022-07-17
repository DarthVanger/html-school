export const Quest = ({ skills, imgSrc, isCompleted }) => `
  <div class="quest${isCompleted && ' is-completed' || ''}">
    <img src="${imgSrc}" />
    <div class="quest-skills-list">
      ${skills?.map(skill => `
        <div class="quest-skill">
          ${skill}
        </div>
      `).join('')}
    </div>
  </div>
`;
