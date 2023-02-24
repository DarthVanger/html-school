import { AnswerVariant } from './AnswerVariant.js';

export const AnswerVariants = ({ selectedVariant, onChange, isSelectedCorrect, isQuizSubmitted, answers }) => {
  console.info('[AnswerVariants]. isSelectedCorrect: ', isSelectedCorrect);
  const element = document.createElement('article');

  console.debug('AnswerVariants render. SelectedVariant: ', selectedVariant);

  const getSharedProps = (idx) => {
    const isSelected = selectedVariant === idx;
    const isCorrect = isQuizSubmitted && isSelected && isSelectedCorrect;
    const isWrong = isQuizSubmitted && isSelected && !isSelectedCorrect;
    return {
      isSelected,
      isCorrect,
      isWrong,
      onClick: () => onChange(idx),
    };
  };

  element.append(AnswerVariant({
    children: answers[0],
    ...getSharedProps(0),
  }));

  element.append(AnswerVariant({
    children: answers[1],
    ...getSharedProps(1),
  }));

  element.append(AnswerVariant({
    children: answers[2],
    ...getSharedProps(2),
  }));

  element.append(AnswerVariant({
    children: answers[3],
    ...getSharedProps(3),
  }));

  return element.innerHTML;
};
