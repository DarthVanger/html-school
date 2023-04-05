export const Topbar = (props) => {
  const backUrl = props?.backUrl || '/#/';

  const element = document.createElement('div');
  element.innerHTML = `
    <div id="topbar" class="surface-black">
      <a href="${backUrl}" class="back-button">
        <img class="back-button-icon" src="src/quests/img/back-button-icon.png" />
        <span>
          Нозад
        </span>
      </a>
    </div>
  `;

  return element;
}
