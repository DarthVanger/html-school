const element = document.createElement('div');
element.id = 'learning-progress-page';
import { LearningProgressItem } from './LearningProgress.js';

export const LearningProgress = () => {
  element.innerHTML = '';
  element.innerHTML +=`
    <h1>Learning Progress</h1>
  `;

  element.append(LearningProgress());

  return element;
};
