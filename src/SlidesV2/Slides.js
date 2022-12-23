import { Lesson28 } from './lessons/Lesson28.js';
export const Slides = ({lessonName}) => {
  const el = document.createElement('div');
  el.className = "slides";
  const lessons = {
    lesson28: Lesson28(),
  };
  console.log('lessonname: ', lessonName);
  el.append(lessons[lessonName]);
  return el;
};

