import { Lesson28 } from './lessons/Lesson28.js';
import { Lesson29 } from './lessons/Lesson29.js';
import { Lesson30 } from './lessons/Lesson30.js';

export const Slides = ({state, lessonName}) => {
  const el = document.createElement('div');
  el.className = "slides";
  const lessons = {
    lesson28: Lesson28,
    lesson29: Lesson29,
    lesson30: Lesson30,
  };
  console.log('lessonname: ', lessonName);
  el.append(lessons[lessonName]({state, lessonName}));
  return el;
};

