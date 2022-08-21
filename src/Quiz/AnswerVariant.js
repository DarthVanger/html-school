import { Panel } from '../Quests/MainPage/Panel.js';

export const AnswerVariant = ({children}) => {
  let id = `answer-variant-${Math.round(Math.random() * 1000)}`
  let element = document.createElement('div');
  element.id = id;
  let state = {};

  const getElement = () => {
    return document.querySelector(`#${id}`);
  };

  const setState = (newState) => {
    state.isSelected = newState.isSelected;
    render();
  };

  const handleClick = () => {
    setState({
      isSelected: !state.isSelected,
    });
  };

  setTimeout(() => {
    getElement().addEventListener('click', handleClick);

  });

  const render = () => {
    console.log('render, state: ',state);
    const statusClass = state.isSelected ? 'is-selected' : '';
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
