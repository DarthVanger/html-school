const element = document.createElement('div');
element.id = 'learning-progress';
import { LearningProgressItem } from './LearningProgressItem.js';
import { lectures } from './lectures.js';

export const LearningProgress = () => {
  lectures.forEach(it => {
    it.text = it.text.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  });

  element.innerHTML = '';

  lectures.forEach((item, idx) => {
    console.log('apend item: ', item);
    element.append(LearningProgressItem({ item, idx }));
  });

  return element;
};
