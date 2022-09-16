import { lectures } from '../../src/LearningProgress/lectures.js';

export const lectureStats = lectures.map(lecture => {
  return {
    'other-species': 0,
    dimon: 1,
    johnny: 1,
    tony: 1,
    insane: 0,
    russi4: 0,
  };
});
