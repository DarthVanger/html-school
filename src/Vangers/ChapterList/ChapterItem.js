export const ChapterItem = ({ chapter, onChapterClick }) => {
  const element = document.createElement('div');
  element.className = 'chapter-item';
  element.innerHTML = `
    <h3>${chapter.title}</h3>
    <img src="${chapter.cover}" />
  `;

  element.addEventListener('click', () => onChapterClick(chapter));
  return element;
};
