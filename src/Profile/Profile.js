import { cyberProfile } from './cyberProfile.js';

export const Profile = () => {
  const height = 100;
  const width = 100;
  const x = 0;
  const y = 0;

  return `
    <div id="profile">
      <svg viewPort="0 0 ${width} ${height}">
        <image
          href="${cyberProfile}"
          height="100%"
          width="100%"
          x="${x}"
          y="${y}"
        />
      </svg>
    </div>
  `;
};
