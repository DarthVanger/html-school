export const Badge = ({x, y, level, badgeR }) => {
  if (!badgeR) badgeR = 25;
  const id = `${Math.random()}-badge-clip-${x}-${y}`;
  const height = badgeR * 2;
  const width = height;
  const size = width;
  
  return `
    <defs>
      <rect id="${id}" x="${x + size / 2}" y="${y + size / 2}" width="${size}" height="${size}" rx="50%"

      class="badge-rect"
      />
      <clipPath id="clipPath-${id}">
        <use xlink:href="#${id}"/>
      </clipPath>
    </defs>

    <use xlink:href="#${id}" />
    <image
      href="img/texture-100x100.jpg"
      x="${x + height / 2}"
      y="${y + height / 2}"
      width="${size}" height="${size}"
      clip-path="url(#clipPath-${id})"
      class="badge-img level-${level}"
    />
   <text x="${x + size + 2}" y="${y + size + 2}"
    text-anchor="middle"
    alignment-baseline="middle"
    data-level-tony=${level}
    data-level-johnny=${level}
    data-level-dimon=${level}
    class="badge-text"
   >
     ${level}
   </text>
 `;
};
