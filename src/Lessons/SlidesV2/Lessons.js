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
import { Lesson47 } from './lessons/Lesson47.js';
import { Lesson48 } from './lessons/Lesson48.js';
import { Lesson50 } from './lessons/Lesson50.js';
import { Lesson53 } from './lessons/Lesson53.js';
import { Lesson54 } from './lessons/Lesson54.js';
import { Lesson56 } from './lessons/Lesson56.js';
import { Lesson57 } from './lessons/Lesson57.js';

export const Lessons = ({state}) => {
  const el = document.createElement('div');
  el.innerHTML = `
    <marquee><h1>УРОКЕ</h1></marquee>
    <h2>
    <a href="/#/slides/v2/lesson57">Lesson #57 - Кровавая Месть</a>
    </h2>
    <h2>
    <a href="/#/slides/v2/lesson56">Lesson #56</a>
    </h2>
    <h2>
    <a href="/#/slides/v2/lesson54">Lesson #54</a>
    </h2>
    <h2>
    <a href="/#/slides/v2/lesson53">Lesson #53</a>
    </h2>
  `;
  return el;
};

