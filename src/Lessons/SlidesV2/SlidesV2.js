import { Lesson28 } from './lessons/Lesson28.js';
import { Lesson29 } from './lessons/Lesson29.js';
import { Lesson30 } from './lessons/Lesson30.js';
import { Lesson31 } from './lessons/Lesson31.js';
import { Lesson32 } from './lessons/Lesson32.js';
import { Lesson34 } from './lessons/Lesson34.js';
import { Lesson35 } from './lessons/Lesson35.js';
import { Lesson36 } from './lessons/Lesson36.js';
import { Lesson37 } from './lessons/Lesson37.js';
import { Lesson40 } from './lessons/Lesson40.js';
import { Lesson44 } from './lessons/Lesson44.js';
import { Lesson45 } from './lessons/Lesson45.js';
import { Lesson46 } from './lessons/Lesson46.js';

export const SlidesV2 = ({state, lessonName}) => {
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
    lesson36: Lesson36,
    lesson37: Lesson37,
    lesson40: Lesson40,
    lesson44: Lesson44,
    lesson45: Lesson45,
    lesson46: Lesson46,
  };
  console.log('lessonname: ', lessonName);
  el.append(lessons[lessonName]({state, lessonName}));
  return el;
};

