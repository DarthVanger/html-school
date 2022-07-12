import { db } from './db.js';

const getHomeworkPoints = ({ student, skill }) => {
  if (!db.data.homework) return 0;

  const homeworkEntries = db.data.homework[student]?.filter(
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
          categoryLevel[student] += getHomeworkPoints({ student, skill});
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

  const homework = db.data.homework;

  return { points, levels, categoryLevels, homework };
};
