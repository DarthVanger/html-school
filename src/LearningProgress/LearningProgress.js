const element = document.createElement('div');
element.id = 'learning-progress';
import { LearningProgressItem } from './LearningProgressItem.js';
import { lectures } from './lectures.js';

export const LearningProgress = () => {
  lectures.forEach(it => {
    it.text = it.text.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  });

  element.innerHTML = `
    <h1>Learning Progress</h1>
  `;

  lectures.forEach((item, idx) => {
    const isLastItem = idx === 0;
    element.prepend(LearningProgressItem({ item, idx, isLastItem }));
  });

  return element;
};
