export const Bar = (value) => {
  const element = document.createElement('div');
  element.className = 'chart-bar';
  const height = 50;
  let width = Math.abs(value);
  if (width < 40) {
    width = 40;
  }
  const viewBox = `0 0 ${width} ${height}`;

  const colorClass = value >= 0 ? 'positive' : 'negative';
  element.classList.add(colorClass);

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
