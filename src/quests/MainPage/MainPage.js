import { Levels } from './Levels/Levels.js';
import { Story } from './Story.js';

export const MainPage = () => `
  ${Story()}
  ${Levels()}
`;
