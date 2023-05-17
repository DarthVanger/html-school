
export const CyberpunkBorder = ({ width = 100, height = 100 }) => {
  const srez = 25;
  return `
<svg class="cyberpunk-border" viewBox="0 0 ${width} ${height}"
  preserveAspectRatio="none"
>
  <path
    d="M 0 0 h ${width} v ${height - srez} l -${srez} ${srez} h -${width - srez} v -${height}"
  />
</svg>
  `;
};
