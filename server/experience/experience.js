import { db } from '../db/db.js';
import { lectures } from '../../src/LearningProgress/lectures.js';
import { lectureStats } from '../db/lectureStats.js';

//const getHomeworkPoints = ({ student, skill }) => {
//  if (!db.data.homework) return 0;
//
//  const homeworkEntries = db.data.homework[student]?.filter(
//    entry => entry.skill === skill.text,
//  );
//  return homeworkEntries?.length || 0;
//};
//
export const expByStudent = () => {
  const students = db.data?.students;
  const exp = {};
  const allLecturePoints = getAllLecturePoints();
  for (let student of students) {
    exp[student] = {
      lectures: getLecturePointsByStudent(student),
      homework: getHomeworkPointsByStudent(student),
    };
  }

  return exp;
};

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
  const allPoints = getAllLecturePoints();
  const points = allPoints[student][skill.id] || 0;
  return points;
};

/**
 * Get how many homework (quest) points in total a student has.
 */
const getHomeworkPointsByStudent = (student) => {
    let points = 0;
    const completedQuests = db.data.quests[student];
    if (!completedQuests) return 0;

    for (let q of completedQuests) {
        points++; 
    }

    return points;
}

/**
 * Get how many lecture points in total a student has.
 */
const getLecturePointsByStudent = (student) => {
  const allLecturePoints = getAllLecturePoints();
  const studentLecturePointsBySkill = allLecturePoints[student];
  return Object.values(studentLecturePointsBySkill).reduce((acc, curr) => acc + curr, 0);
}

const getAllLecturePoints = () => {
  let points = {};
  const { students, skills } = db.data;

  for (let student of students) {
    points[student] = {};

    let lectureIdx = 0;
    for (let lecture of lectures) {
      for (let skillId of lecture.skills) {
        if (!lectureStats[lectureIdx][student]) {
          continue;
        }
        const p = points[student][skillId];
        if (p) {
          points[student][skillId]++;
        } else {
          points[student][skillId] = 1;
        }
      }
      lectureIdx++;
    }
  }
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
