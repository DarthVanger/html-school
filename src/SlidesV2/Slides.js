import { Lesson28 } from './lessons/Lesson28.js';
import { Lesson29 } from './lessons/Lesson29.js';
import { Lesson30 } from './lessons/Lesson30.js';
import { Lesson31 } from './lessons/Lesson31.js';
import { Lesson32 } from './lessons/Lesson32.js';
import { Lesson34 } from './lessons/Lesson34.js';
import { Lesson35 } from './lessons/Lesson35.js';

export const Slides = ({state, lessonName}) => {
  const el = document.createElement('div');
  el.className = "slides";
  const lessons = {
    lesson28: Lesson28,
    lesson29: Lesson29,
    lesson30: Lesson30,
    lesson31: Lesson31,
    lesson32: Lesson32,
    lesson34: Lesson34,
    lesson35: Lesson35,
  };
  console.log('lessonname: ', lessonName);
  el.append(lessons[lessonName]({state, lessonName}));
  return el;
};

