import { Lesson } from './Lesson.js';

export const LessonChain = lessonChain => {
  let html = '';
  for (let lesson of lessonChain) {
    html += Lesson(lesson);
    if (lessonChain.indexOf(lesson) !== lessonChain.length -1) {
      //html += Arrow();
    }
  }
  return html;
}
