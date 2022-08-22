import { AnswerVariant } from './AnswerVariant.js';

export const AnswerVariants = ({ selectedVariant, onChange, isSelectedCorrect }) => {
  console.info('[AnswerVariants]. isSelectedCorrect: ', isSelectedCorrect);
  const element = document.createElement('article');

  console.debug('AnswerVariants render. SelectedVariant: ', selectedVariant);

  const getSharedProps = (idx) => {
    const isSelected = selectedVariant === idx;
    const isCorrect = isSelected && isSelectedCorrect;
    return {
      isSelected,
      isCorrect,
      onClick: () => onChange(idx),
    };
  };

    element.append(AnswerVariant({children: `
      <pre><code>
        x: 3
        y: undefined
        z: 11
      </code></pre>
      `,
      ...getSharedProps(0),
    }));

  element.append(AnswerVariant({children: `
    <pre><code>
      x: 3
      y: undefined
      z: 20
      </code></pre>
   `,
      ...getSharedProps(1),
  }));

  element.append(AnswerVariant({children: `
    <pre><code>
     x: 3
     y: 0
     z: 11
     </code></pre>
    `,
    ...getSharedProps(2),
  }));

  element.append(AnswerVariant({children: `
    <pre><code>
     x: 3
     y: 0
     z: 20
     </code></pre>
    `,
    ...getSharedProps(3),
  }));

  return element.innerHTML;
};
