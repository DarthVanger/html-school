export const Label = (category, points) => {
  const element = document.createElement('div');
  element.className = 'chart-bar-label';

  element.innerHTML = `
    <span>${points}</span>&nbsp;&mdash;&nbsp;<span>${category}</span>
  `;
  return element;
}
