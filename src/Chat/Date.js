export const Date = ({ date }) => {
  const element = document.createElement('span');
  const localeOptions = {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  element.className = 'date';
  const d = new window.Date(date);
  element.innerHTML= `
    ${d.toLocaleDateString('uk-UA', localeOptions)}
  `;
  return element;
};
