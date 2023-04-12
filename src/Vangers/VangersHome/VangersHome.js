import { ChapterList } from '../ChapterList/ChapterList.js';

export const VangersHome = ({ onChapterClick }) => {
  const element = document.createElement('div');
  element.id = 'vangers-home';

  element.innerHTML = `
    <h1>Vangers</h1>
  `;

  element.append(ChapterList({ onChapterClick }));

  return element;
};
