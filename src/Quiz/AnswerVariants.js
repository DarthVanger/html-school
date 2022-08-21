import { AnswerVariant } from './AnswerVariant.js';

export const AnswerVariants = ({ selectedVariant, onChange }) => {
  const element = document.createElement('article');

  console.debug('AnswerVariants render. SelectedVariant: ', selectedVariant);

  element.append(AnswerVariant({children: `
    <pre><code>
      x: 3
      y: undefined
      z: 11
    </code></pre>
    `,
    isSelected: selectedVariant === 0,
    onClick: () => onChange(0),
  }));

  element.append(AnswerVariant({children: `
    <pre><code>
      x: 3
      y: undefined
      z: 20
      </code></pre>
   `,
    isSelected: selectedVariant === 1,
    onClick: () => onChange(1),
  }));

  element.append(AnswerVariant({children: `
    <pre><code>
     x: 3
     y: 0
     z: 11
     </code></pre>
    `,
     isSelected: selectedVariant === 2,
    onClick: () => onChange(2),
  }));

  element.append(AnswerVariant({children: `
    <pre><code>
     x: 3
     y: 0
     z: 20
     </code></pre>
    `,
     isSelected: selectedVariant === 3,
    onClick: () => onChange(3),
  }));

  return element.innerHTML;
};
