import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

const html = `
  <h1>Lesson #40. Online</h1>

  <figure>
    <video controls>
      <source src="/video/lesson40.mp4" type="video/mp4" />
    </video>
  </figure>
`;

export const Lesson40 = (props) => Lesson({ html, ...props });
