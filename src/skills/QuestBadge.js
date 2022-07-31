import { Badge } from './Badge.js';

export const QuestBadge = ({x, y, points}) => {
  const size = 50;

  const imgX = x + size / 2;
  const imgY = y + size / 2;
  const cx = imgX + size / 2;
  const cy = imgY + size / 2;
  const textBadgeSize = size / 4;

  return `
    <g class="quest-badge">
      <circle
        class="quest-badge-background"
        cx="${cx}px"
        cy="${cy}px"
        r="${size / 2}px"
      />
      <image
        href="src/skills/img/quest-badge.png"
        x="${imgX}px"
        y="${imgY}px"
        width="${size}px" height="${size}px"
      />
      ${points > 1 && `
        ${Badge({
          x: cx - size / 2,
          y: cy - size / 2,
          level: points,
          badgeR: textBadgeSize,
        })}
      `}
   </g>
 `;
};
