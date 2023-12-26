export const Bar = (value) => {
  const element = document.createElement('div');
  element.className = 'chart-bar';
  const height = 50;
  const width = value > 30 ? value : 30;
  const viewBox = `0 0 ${width} ${height}`;

  element.innerHTML = `
    <svg viewBox="${viewBox}" width="${width}" height="${height}">
      <rect x="0" y="0" height="${height}" width="${width}" />
      <text x="${width / 2}" y="${height / 2}"
        dominant-baseline="middle" text-anchor="middle"
      >${value}</text>
    </svg>
  `;

  return element;
}
