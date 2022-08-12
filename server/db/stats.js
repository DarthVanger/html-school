import { db } from './db.js';
import { getQuestSkills } from '../../src/quests/quests/quests.js';
import { lectures } from '../../src/LearningProgress/lectures.js';

//const getHomeworkPoints = ({ student, skill }) => {
//  if (!db.data.homework) return 0;
//
//  const homeworkEntries = db.data.homework[student]?.filter(
//    entry => entry.skill === skill.text,
//  );
//  return homeworkEntries?.length || 0;
//};

const getQuestPoints = ({ skill, student }) => {
    let points = 0;
    const completedQuests = db.data.quests[student];
    if (!completedQuests) return 0;

    for (let q of completedQuests) {
      const skills = getQuestSkills(q.id);
      if (skills.includes(skill.id)) {
        points++; 
      }
    }

    return points;
};

const getLecturePoints = ({ student, skill }) => {
  return 0;
};

const getAllLecturePoints = () => {
  let points = {};
  const { students, skills } = db.data;

  for (let student of students) {
    points[student] = {};

    for (let lecture of lectures) {
      for (let skillId of lecture.skills) {
        const p = points[student][skillId];
        if (p !== undefined) {
          points[student][skillId]++;
        } else {
          points[student][skillId] = 0;
        }
      }
    }
  }
  console.log('lecturePoints: ', points);
  return points;
};

const getPoints = ({ student, skill }) => (
  getLecturePoints({ student, skill})
  + getQuestPoints({ student, skill})
);

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
          categoryLevel[student] += getPoints({ student, skill});
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

  const lecturePoints = getAllLecturePoints();
  const questPoints = db.data.quests;

  return { points, levels, categoryLevels, lecturePoints, questPoints };
};
