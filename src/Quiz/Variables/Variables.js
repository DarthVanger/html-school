import { AnswerVariants } from '../AnswerVariants.js';
import { Results } from './Results.js';
const element = document.createElement('div');
element.className = 'quiz';

const correctAnswers = [0, 1, 2, 3];

let state = {
  questions: [-1, -1, -1, -1],
  results: [],
  isQuizFailed: false,
};

export const Variables = () => {
  const handleQuizSubmit = () => {
    console.info('handleQuizSubmit');
    let i = 0;
    for (let q of state.questions) {
      console.debug('q: ', q);
      console.debug('cor ans q: ', correctAnswers[i]);
      state.results[i] = (q === correctAnswers[i]);
      i++;
    }
    console.info('results', state.results);

    state.isQuizFailed = state.results[0] === false;

    if (state.isQuizFailed) {
      console.info('Quiz failed');
    } else {
      console.info('Quiz Succeeded!');
    }


    render();

  };

  const handleVariantChange = ({question, selectedVariant }) => {
    const prev = state.questions[question];
    const next = selectedVariant;
    if (next !== prev) {
      state.questions[question] = selectedVariant;
      render();
    }
  };

  const render = () => {
    console.log('VariablesQuiz render(). State: ', state);

    element.innerHTML = `
      <article class="quiz-item language-js">
        <pre><code>
          let x = 3;
          let y;
          let z = x + 2 * 4;
        </code></pre>
        <p>Which of the following correctly depicts the state of the program after these statements are executed?

      <article class="answer-variants">
        ${AnswerVariants({
          selectedVariant: state.questions[0],
          onChange: (selectedVariant) => handleVariantChange({ question: 0, selectedVariant }),
          isSelectedCorrect: state.results[0],
        })}
      </article>

      <button type="button" id="quiz-submit">SUBMIT</button>

      <h2>РЕЗУЛЬТАТИ ОЦІНЮВАННЯ</h2>

      ${Results(state)}

      <h3>Фізика 8й клас</h3>
      <!-- A picture of 8 class kids xD -->
      <!-- video of school: from the movie or youtube: meme about nicknames in Zoom :) -->
      <!-- A page from ukr book -->
      <!-- A problem from ukr book: vehicle goes with friction -->
      <article>
      </article>

      <h3>Physics</h3>
      <!-- MIT / Harvard / etc good free book with explanation and problem -->
      <article>
      </article>
    `;

    setTimeout(() => {
      const codes = document.querySelectorAll('.quiz code');
      codes.forEach(c => Prism.highlightElement(c));

      const submitButton = document.querySelector('#quiz-submit');
      submitButton.addEventListener('click', handleQuizSubmit);
    });

  }

  render();

  return element;
};
