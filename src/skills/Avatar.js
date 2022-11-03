import { StudentLevelBadge } from './StudentLevelBadge.js';

export const Avatar = ({ levels, points, selectedStudent }) => {
  console.log('levels: ', levels);
  const size = 270;
  const screenWidth = window.screen.width;
  const x = screenWidth / 2;
  const y = 220;

  const levelProgress = points[selectedStudent] % 10 / 10;
  const angle = 2 * Math.PI * levelProgress;

  return `
    <image
      class="avatar avatar-johnny"
      href="img/johnny.jpg"
      transform="translate(${-size/2 }, ${-size/2})"
      x="${x}"
      y="${y}"
      width="${size}" height="${size}"
    />
    <image
      class="avatar avatar-tony hide"
      href="img/tony.jpg"
      transform="translate(${-size/2 }, ${-size/2})"
      x="${x}"
      y="${y}"
      width="${size}" height="${size}"
    />
    <image
      class="avatar avatar-dimon hide"
      href="img/dimon4ik-close.jpg"
      transform="translate(${-size/2 }, ${-size/2})"
      x="${x}"
      y="${y}"
      width="${size}" height="${size}"
    />
    <circle stroke-width="2px" stroke="black" fill="transparent" cx="${x}" cy="${y}" r="${size / 2}" />
    ${StudentLevelBadge({
      x: x,
      y: y + 50,
      level: levels,
      points,
      selectedStudent,
    })}
  `;
};
