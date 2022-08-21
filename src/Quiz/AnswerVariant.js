import { Panel } from '../Quests/MainPage/Panel.js';

export const AnswerVariant = ({children, onClick, isSelected}) => {
  let id = `answer-variant-${Math.round(Math.random() * 1000)}`
  let element = document.createElement('div');
  element.id = id;

  const getElement = () => {
    return document.querySelector(`#${id}`);
  };

  setTimeout(() => {
    getElement().addEventListener('click', onClick);

  });

  const render = () => {
    const statusClass = isSelected ? 'is-selected' : '';
    console.log('status: ', statusClass);
    (getElement() || element).className = 'answer-variant ' + statusClass;

    (getElement() || element).innerHTML = `
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
