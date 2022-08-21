import { VariablesLecture } from './Variables/VariablesLecture.js';

const element = document.createElement('div');
element.id = "quiz-page";

export const QuizPage = () => {
  element.innerHTML = `
    <h2>Quiz Time</h2>
    <figure>
      <video autoplay muted loop>
        <source src="/video/snoop/loop/start.mp4" type="video/mp4" />
      </video>
    </figure>
    <h3>Variables (рус. - перменные, укр. - змінні, сурж. - перменні)</h3>
    ${VariablesLecture()}

    <figure>
      <video controls>
      <source src="/video/expressions-lecture.mp4" type="video/mp4" />
      </video>
      <figcaption>Expressions lecture</figcaption>
    </figure>
  `;
  
  return element;
};
