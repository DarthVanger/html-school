import { ChapterItem } from './ChapterItem.js';
import { chapters } from '../chapters/chapters.js';

export const ChapterList = ({ onChapterClick }) => {
  const element = document.createElement('section');
  element.innerHTML = `
    <h2>Chapter List</h2>
  `;

  chapters.forEach(chapter => {
    element.append(ChapterItem({ chapter, onChapterClick: onChapterClick }));     
  });

  return element;
};
