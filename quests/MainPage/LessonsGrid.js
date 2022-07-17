import { LessonChain } from './LessonChain.js'; 

export const LessonsGrid = lessons => {
  let html = '<div class="lessons-grid">';  
  for (let lessonChain of lessons) {
    html +='<div class="row">';
    html += LessonChain(lessonChain);
    html += '</div>';
  }
  html += '</div>';
  return html;
};
