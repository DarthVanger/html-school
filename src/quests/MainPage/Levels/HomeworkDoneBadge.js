import { WeedSvg } from './WeedSvg.js';

export const HomeworkDoneBadge = () => {
  return `
    <div class="homework-done-badge">
      <div>
        ${WeedSvg()}
        ${WeedSvg()}
        ${WeedSvg()}
      </div>

      <div>
        <img src="/img/fire.gif" />
        <img src="/img/fire.gif" />
        <img src="/img/fire.gif" />
      </div>
    </div>
  `;
};
