import { Skills } from './skills.js';
import { skills, students, levels, points } from './levels.js';

export const App = () => {
  const state = {
    student: window.location.hash.replace('#', '') || 'tony',
    skills,
    students,
    levels,
    points,
  };

  return Skills(state);
}
