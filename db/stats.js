import { db } from './db.js';

const homeworkPoints = ({ student, skill }) => {
  const homeworkEntries = db.data[student]?.filter(
    entry => entry.skill === skill.text,
  );
  return homeworkEntries?.length || 0;
};

export const getStats = () => {
  const { students, skills } = db.data;
  const points = {};
  const levels = {};
  const categoryLevels = {};

  for (let student of students) {
    points[student] = 0;
    levels[student] = 0;
  }

  for (let category in skills) {
    let categoryLevel = {};
    categoryLevels[category] = {};
    for (let student of students) {
      categoryLevel[student] = 0;
    }
    for (let branch of skills[category]) {
      for (let skill of branch) {
        for (let student of students) {
          categoryLevel[student] += skill.level[student];
          categoryLevel[student] += homeworkPoints({ student, skill});
        }
      }
    }
    skills[category].level = categoryLevel;
    categoryLevels[category].level = categoryLevel;
  }

  for (let student of students) {
    for (let category in skills) {
      points[student] += skills[category].level[student];
    }
  }

  for (let student of students) {
    //points[student] = Math.round(points[student] / 10);
    levels[student] = Math.floor(points[student] / 10);
  }

  return { points, levels, categoryLevels };
};
