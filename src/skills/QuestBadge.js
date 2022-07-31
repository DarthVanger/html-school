export const QuestBadge = ({x, y, points}) => {
  const size = 50;

  const imgX = x + size / 2;
  const imgY = y + size / 2;
  const cx = imgX + size / 2;
  const cy = imgY + size / 2;

  return `
    <g class="quest-badge">
      <circle
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
        <text x=${cx} y=${cy} text-anchor="middle" style="stroke: white; fill: white;">
          ${points}
        </text>
      `}
   </g>
 `;
};
