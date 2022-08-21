import { Panel } from '../Quests/MainPage/Panel.js';

export const AnswerVariant = ({children, correct}) => {
  return `
    ${Panel({
      children,
    })}
  `;
};
