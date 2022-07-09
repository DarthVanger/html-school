import { Skills } from './skills.js';

export const App = () => {
  const state = {
    student: window.location.hash.replace('#', '') || 'tony',
  };

  return Skills(state);
}
