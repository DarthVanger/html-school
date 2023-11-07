export const Bar = (value) => {
  const element = document.createElement('div');
  element.className = 'chart-bar';
  const height = 50;
  const width = value;
  const viewBox = `0 0 ${width} ${height}`;

  element.innerHTML = `
    <svg viewBox="${viewBox}" width="300" height="${height}">
      <rect x="0" y="0" height="${height}" width="${width}" />
    </svg>
  `;

  return element;
}
