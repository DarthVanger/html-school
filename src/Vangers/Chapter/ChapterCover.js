export const ChapterCover = ({ chapter }) => {
  const element = document.createElement('div');
  element.className = 'chapter-cover';

  element.innerHTML = `
    <img src="${chapter.cover}" />
  `;

  element.addEventListener('click', () => {
    element.remove();
  });

  return element;
};
