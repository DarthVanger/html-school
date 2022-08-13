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
    console.log('apend item: ', item);
    const isLastItem = (idx === lectures.length - 1);
    element.append(LearningProgressItem({ item, idx, isLastItem }));
  });

  return element;
};
