export const Label = (category) => {
  const element = document.createElement('div');
  element.className = 'chart-bar-label';

  element.innerHTML = `
    ${category}
  `;
  return element;
}
