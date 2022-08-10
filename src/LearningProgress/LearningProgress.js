const element = document.createElement('div');
element.id = 'learning-progress';

export const LearningProgress = () => {
  element.innerHTML = `
    <h1>Learning Progress</h1>
  `;

  return element;
};
