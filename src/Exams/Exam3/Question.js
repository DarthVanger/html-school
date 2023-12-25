export const Question = ({
  title,
  theory,
  task,
}) => {
  const element = document.createElement('div');
  element.className = 'exam3-question-content';

  element.innerHTML = `
  <h2>${title}</h2>
  <div class="theory">
    <div>Theory<div>
    <p>${theory}</p>
  </div>
  <div class="task">
    <div>Task<div>
    <p>${task}</p>
  </div>
  `;

  return element;
};

