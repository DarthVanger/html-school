import { VariablesLecture } from './Variables/VariablesLecture.js';
import { Variables as VariablesQuiz } from './Variables/Variables.js';

const element = document.createElement('div');
element.id = "exam1";

export const Exam1 = () => {
  element.innerHTML = `
    <h2>Кто Хочет Стать Банконъером??</h2>
    <figure>
      <video autoplay muted loop>
        <source src="/video/snoop/loop/start.mp4" type="video/mp4" />
      </video>
    </figure>
  `;

  element.append(VariablesQuiz());
  
  return element;
};
