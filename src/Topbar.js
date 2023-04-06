export const Topbar = ({ backUrl, surface = 'white' }) => `
  <div id="topbar" class="surface-${surface}">
    <a href="${backUrl}" class="back-button">
      <img class="back-button-icon" src="src/quests/img/back-button-icon.png" />
      <span>
        Нозад
      </span>
    </a>
  </div>
`;
