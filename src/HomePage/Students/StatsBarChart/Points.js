export const Points = (points) => {
  const element = document.createElement('div');
  element.className = 'chart-bar-points';

  element.innerHTML = `
    ${points}
  `;
  return element;
}
