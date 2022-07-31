const element = document.createElement('div');
export const HomeworkList = ({ homework }) => {
  const formatDate = (d) => {
    const date = new Date(d);
    return date.toLocaleString('ru-RU', { month: 'short', day: 'numeric' });
  }
  for (let i in homework) {
    const h = homework[i];
    console.log('h: ', h);
    element.innerHTML += `
      [${formatDate(h.date)}] ${h.description}
    `
  }

  return element;
};
