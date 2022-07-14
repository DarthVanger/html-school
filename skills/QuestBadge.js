export const QuestBadge = ({x, y}) => {
  const size = 50;

  const imgX = x + size / 2;
  const imgY = y + size / 2;

  return `
    <g class="quest-badge">
      <circle
        cx="${imgX + size / 2}"
        cy="${imgY + size / 2}"
        r="${size / 2}px"
      />
      <image
        href="img/quest-badge.png"
        x="${imgX}"
        y="${imgY}"
        width="${size}px" height="${size}px"
      />
   </g>
 `;
};
