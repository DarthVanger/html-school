export const Bar = (value) => {
  const element = document.createElement('div');
  element.className = 'chart-bar';
  const height = 10;
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
    </svg>
  `;

  return element;
}
