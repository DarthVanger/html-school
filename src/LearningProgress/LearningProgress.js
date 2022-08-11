const element = document.createElement('div');
element.id = 'learning-progress';
import { LearningProgressItem } from './LearningProgressItem.js';

export const LearningProgress = () => {

  const items = [
    { text: 'ЗНОКОМСТВО - HTML: <h1>, <p>, <img>. CSS: h1, p.', skills: ['html-h1', 'html-p', 'html-img', 'css-h1-p'] },
    { text: 'ССЫЛКЕ: <a href="...">, ВИДЕО: <video>', skills: ['html-a', 'html-video'] },
  ];

  items.forEach(it => {
    it.text = it.text.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  });

  element.innerHTML = '';

  items.forEach((item, idx) => {
    console.log('apend item: ', item);
    element.append(LearningProgressItem({ item, idx }));
  });

  return element;
};
