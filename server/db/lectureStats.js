import { lectures } from '../../src/LearningProgress/lectures.js';

export const lectureStats = lectures.map((lecture, idx) => {
  const from = i => idx >= (i - 1) ? 1 : 0;
  return {
    'other-species': 0,
    dimon: from(0),
    johnny: from(0),
    tony: from(0),
    'mister-smith': from(20),
    valik_h: from(22),
    mazerTim: from(26),
  };
});
