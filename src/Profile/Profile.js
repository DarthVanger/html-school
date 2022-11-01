import { Avatar3d } from './Avatar3d.js';

export const Profile = () => {
  return `
    <div id="profile">
      <div class="profile-avatar">
        ${Avatar3d()}
      </div>
      <div class="profile-skills">
        ${Avatar3d()}
      </div>
    </div>
  `;
};
