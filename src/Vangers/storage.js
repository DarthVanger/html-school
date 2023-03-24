const chapterKey = `vangers-chapter`;
const chapterStepKey = `vangers-step`;

export function getChapterStep() {
  let step = localStorage.getItem(chapterStepKey) || 0;
  return Number(step);
}

export function setChapterrStep(step) {
  localStorage.setItem(chapterStepKey, step);
}

export function getSavedChapter() {
  let chapter = localStorage.getItem(chapterKey) || 0;
  return Number(chapter);
}

export function saveChapter(chapterNum) {
  localStorage.setItem(chapterKey, chapterNum);
}
