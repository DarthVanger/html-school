export const HomeworkBadge = ({x, y, level }) => {
  const id = `${Math.random()}-badge-clip-${x}-${y}`;
  const size = 50;

  const imgX = x + size;
  const imgY = y + size;
  const fontSize = 16;
  const textPadding = 8;
  
  return `
    <g class="homework-badge">
      <image
        href="img/book.png"
        x="${imgX}"
        y="${imgY}"
        width="${size}px" height="${size}px"
      />
     <text x="${imgX}" y="${imgY + fontSize + textPadding}"
      text-anchor="middle"
      alignment-baseline="middle"
      data-level-tony=${level}
      data-level-johnny=${level}
      data-level-dimon=${level}
      class="badge-text"
     >
       0
     </text>
   </g>
 `;
};
