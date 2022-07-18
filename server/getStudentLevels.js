import { getStats } from './db/stats.js';

export const getStudentLevels = (student) => {
  const { levels, points, categoryLevels, homework, questPoints } = getStats();

};
