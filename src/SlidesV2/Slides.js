import { Lesson28 } from './lessons/Lesson28.js';
import { Lesson29 } from './lessons/Lesson29.js';
export const Slides = ({lessonName}) => {
  const el = document.createElement('div');
  el.className = "slides";
  const lessons = {
    lesson28: Lesson28,
    lesson29: Lesson29,
  };
  console.log('lessonname: ', lessonName);
  el.append(lessons[lessonName]());
  return el;
};

