import { AnswerVariant } from './AnswerVariant.js';

export const AnswerVariants = () => {
  const element = document.createElement('article');

  element.append(AnswerVariant({children: `
    <pre><code>
      x: 3
      y: undefined
      z: 11
    </code></pre>
    `,
    correct: true,
  }));

  element.append(AnswerVariant({children: `
    <pre><code>
      x: 3
      y: undefined
      z: 20
      </code></pre>
  `}));

  element.append(AnswerVariant({children: `
   <pre><code>
    x: 3
    y: 0
    z: 11
    </code></pre>
   `}));

  element.append(AnswerVariant({children: `
   <pre><code>
    x: 3
    y: 0
    z: 20
    </code></pre>
   `}));

  return element.innerHTML;
};
