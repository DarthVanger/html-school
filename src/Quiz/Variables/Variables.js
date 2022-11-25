import { AnswerVariants } from '../AnswerVariants.js';
import { Results } from './Results.js';
const element = document.createElement('div');
element.className = 'quiz';

const correctAnswers = [0, 2, 2, 2, 2, 2, 1];

let state = {
  questions: [-1, -1, -1, -1, -1, -1, -1],
  results: [],
  isQuizFailed: false,
  isQuizSubmitted: false,
};

export const Variables = () => {
  const handleQuizSubmit = () => {
    console.info('handleQuizSubmit');
    state.isQuizSubmitted = true;

    let i = 0;
    for (let q of state.questions) {
      console.debug('q: ', q);
      console.debug('cor ans q: ', correctAnswers[i]);
      state.results[i] = (q === correctAnswers[i]);
      i++;
    }
    console.info('results', state.results);

    state.isQuizFailed = state.results.some(r => r === false);

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

        <div class="answer-variants">
          ${AnswerVariants({
            selectedVariant: state.questions[0],
            onChange: (selectedVariant) => handleVariantChange({ question: 0, selectedVariant }),
            isSelectedCorrect: state.results[0],
            isQuizSubmitted: state.isQuizSubmitted,
            answers: [
              `
                <pre><code>
                  x: 3
                  y: undefined
                  z: 11
                </code></pre>
              `,
              `
                <pre><code>
                  x: 3
                  y: undefined
                  z: 20
                </code></pre>
              `,
              `
                <pre><code>
                  x: 3
                  y: 0
                  z: 11
                </code></pre>
              `,
              `
                <pre><code>
                  x: 3
                  y: 0
                  z: 20
                </code></pre>
              `,
            ],
          })}
        </div>
      </article>


      <article class="quiz-item language-js">
        <pre><code>
          function sum() {
            var x = 5;
            var y = 7;
            return x + y;
          }

          const sum1 = sum(5, 7);
          const sum2 = sum(3, 2);

        </code></pre>
        <p>Which of the following correctly depicts the state of the program after these statements are executed?

        <div class="answer-variants">
          ${AnswerVariants({
            selectedVariant: state.questions[1],
            onChange: (selectedVariant) => handleVariantChange({ question: 1, selectedVariant }),
            isSelectedCorrect: state.results[1],
            isQuizSubmitted: state.isQuizSubmitted,
            answers: [
              `
                <pre><code>
                  sum1: 12
                  sum2: 5
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 5
                  sum2: 5
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 12
                  sum2: 12
                </code></pre>
              `,
              `
                <pre><code>
                  Error
                </code></pre>
              `,
            ],
          })}
        </div>
      </article>

      <article class="quiz-item language-js">
        <pre><code>
          function sum(x, y) {
            x = 5;
            y = 7;
            return x + y;
          }

          const sum1 = sum(5, 7);
          const sum2 = sum(3, 2);

        </code></pre>
        <p>Which of the following correctly depicts the state of the program after these statements are executed?

        <div class="answer-variants">
          ${AnswerVariants({
            selectedVariant: state.questions[2],
            onChange: (selectedVariant) => handleVariantChange({ question: 2, selectedVariant }),
            isSelectedCorrect: state.results[2],
            isQuizSubmitted: state.isQuizSubmitted,
            answers: [
              `
                <pre><code>
                  sum1: 12
                  sum2: 5
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 5
                  sum2: 5
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 12
                  sum2: 12
                </code></pre>
              `,
              `
                <pre><code>
                  Error
                </code></pre>
              `,
            ],
          })}
        </div>
      </article>

      <article class="quiz-item language-js">
        <pre><code>
          function sum() {
            return x1 + y1;
          }

          const x1 = 3;
          const y1 = 0;

          const x2 = 8;
          const y2 = 5;

          const sum1 = sum(x1, y1);
          const sum2 = sum(x2, y2);

        </code></pre>
        <p>Which of the following correctly depicts the state of the program after these statements are executed?

        <div class="answer-variants">
          ${AnswerVariants({
            selectedVariant: state.questions[3],
            onChange: (selectedVariant) => handleVariantChange({ question: 3, selectedVariant }),
            isSelectedCorrect: state.results[3],
            isQuizSubmitted: state.isQuizSubmitted,
            answers: [
              `
                <pre><code>
                  sum1: 13
                  sum2: 3
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 3
                  sum2: 13
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 3
                  sum2: 3
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 13
                  sum2: 13
                </code></pre>
              `,
            ],
          })}
        </div>
      </article>
      <article class="quiz-item language-js">
        <pre><code>
          function sum(x, y) {
            return x1 + y1;
          }

          const x1 = 3;
          const y1 = 0;

          const x2 = 8;
          const y2 = 5;

          const sum1 = sum(x1, y1);
          const sum2 = sum(x2, y2);

        </code></pre>
        <p>Which of the following correctly depicts the state of the program after these statements are executed?

        <div class="answer-variants">
          ${AnswerVariants({
            selectedVariant: state.questions[4],
            onChange: (selectedVariant) => handleVariantChange({ question: 4, selectedVariant }),
            isSelectedCorrect: state.results[4],
            isQuizSubmitted: state.isQuizSubmitted,
            answers: [
              `
                <pre><code>
                  sum1: 13
                  sum2: 3
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 3
                  sum2: 13
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 3
                  sum2: 3
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 13
                  sum2: 13
                </code></pre>
              `,
            ],
          })}
        </div>
      </article>

      <article class="quiz-item language-js">
        <pre><code>
          function sum(x, y) {
            return x1 + y1;
            return x2 + y2;
          }

          const x1 = 3;
          const y1 = 0;

          const x2 = 8;
          const y2 = 5;

          const sum1 = sum(x1, y1);
          const sum2 = sum(x2, y2);

        </code></pre>
        <p>Which of the following correctly depicts the state of the program after these statements are executed?

        <div class="answer-variants">
          ${AnswerVariants({
            selectedVariant: state.questions[5],
            onChange: (selectedVariant) => handleVariantChange({ question: 5, selectedVariant }),
            isSelectedCorrect: state.results[5],
            isQuizSubmitted: state.isQuizSubmitted,
            answers: [
              `
                <pre><code>
                  sum1: 13
                  sum2: 3
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 3
                  sum2: 13
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 3
                  sum2: 3
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 13
                  sum2: 13
                </code></pre>
              `,
            ],
          })}
        </div>
      </article>

      <article class="quiz-item language-js">
        <pre><code>
          function sum(x, y) {
            return x + y;
          }

          const x1 = 3;
          const y1 = 0;

          const x2 = 8;
          const y2 = 5;

          const sum1 = sum(x1, y1);
          const sum2 = sum(x2, y2);

        </code></pre>
        <p>Which of the following correctly depicts the state of the program after these statements are executed?

        <div class="answer-variants">
          ${AnswerVariants({
            selectedVariant: state.questions[6],
            onChange: (selectedVariant) => handleVariantChange({ question: 6, selectedVariant }),
            isSelectedCorrect: state.results[6],
            isQuizSubmitted: state.isQuizSubmitted,
            answers: [
              `
                <pre><code>
                  sum1: 13
                  sum2: 3
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 3
                  sum2: 13
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 3
                  sum2: 3
                </code></pre>
              `,
              `
                <pre><code>
                  sum1: 13
                  sum2: 13
                </code></pre>
              `,
            ],
          })}
        </div>
      </article>


      <button type="button" id="quiz-submit">SUBMIT</button>

      ${state.isQuizSubmitted && `
        <h2>РЕЗУЛЬТАТИ ОЦІНЮВАННЯ</h2>

        ${Results(state)}
      ` || ''}
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
