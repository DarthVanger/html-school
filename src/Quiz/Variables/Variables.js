import { AnswerVariant } from '../AnswerVariant.js';
const element = document.createElement('div');
element.className = 'quiz';

export const Variables = () => {
  setTimeout(() => {
    const codes = document.querySelectorAll('.quiz code');
    codes.forEach(c => Prism.highlightElement(c));
  });

  element.innerHTML = `
    <article class="quiz-item language-js">
      <pre><code>
        let x = 3;
        let y;
        let z = x + 2 * 4;
      </code></pre>
      <p>Which of the following correctly depicts the state of the program after these statements are executed?

    <div class="answer-variants">
      ${AnswerVariant({children: `
        <pre><code>
          x: 3
          y: undefined
          z: 11
        </code></pre>
        `,
        correct: true,
      })}

      ${AnswerVariant({children: `
        <pre><code>
          x: 3
          y: undefined
          z: 20
        </code></pre>
      `})}

      ${AnswerVariant({children: `
        <pre><code>
          x: 3
          z: 11
        </code></pre>
      `})}

      ${AnswerVariant({children: `
        <pre><code>
          x: 3
          z: 20
        </code></pre>
      `})}
      </div>
    </article>

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

  return element;
};
