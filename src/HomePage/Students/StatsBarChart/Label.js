export const Label = (category, points) => {
  const element = document.createElement('div');
  element.className = 'chart-bar-label';

  element.innerHTML = `
    <span>${category}</span>&nbsp;&mdash;&nbsp;<span>${points}</span>
  `;
  return element;
}
