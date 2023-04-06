import { Panel } from '../quests/MainPage/Panel.js';

export const AnswerVariant = ({children, onClick, isSelected, isCorrect, isWrong}) => {
  let id = `answer-variant-${Math.round(Math.random() * 100000)}`
  let element = document.createElement('div');
  element.id = id;

  const getElement = () => {
    return document.querySelector(`#${id}`);
  };

  setTimeout(() => {
    getElement().addEventListener('click', onClick);
  });

  const render = () => {
    let statusClass = '';
    if (isSelected) {
      statusClass += ' is-selected';
    }
    if (isCorrect) {
      statusClass += ' is-correct';
    }
    if (isWrong) {
      statusClass += ' is-wrong';
    }

    console.log('status: ', statusClass);
    element.className = 'answer-variant ' + statusClass;

    element.innerHTML = `
      ${Panel({
        children,
      })}
    `;

    setTimeout(() => {
      const codes = getElement()?.querySelectorAll('.quiz code');
      codes.forEach(c => Prism.highlightElement(c));
    });
  };

  render();

  return element;
};
