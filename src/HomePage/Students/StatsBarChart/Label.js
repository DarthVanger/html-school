export const Label = (value) => {
  const element = document.createElement('div');
  element.className = 'chart-bar-label';

  element.innerHTML = value;

  return element;
}
