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
  for (let student of students) {
    const categories = Object.keys(db.data?.experience?.[student] || []);
    console.log('categories: ', categories);
    exp[student] = {};

    for (const category of categories) {
      exp[student][category] = db.data.experience[student][category].points
    }

    exp[student].lectures = (exp[student].lectures || 0) + getLecturePointsByStudent(student);
    exp[student].homework = (exp[student].homework || 0) + getHomeworkPointsByStudent(student);
    exp[student].katakombi = (exp[student].katakombi || 0) + getKatakombiPointsByStudent(student);

    const allPointsSum = Object.values(exp[student]).reduce((acc, curr) => acc + curr);
    exp[student].experience = allPointsSum
  };


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

const getKatakombiPointsByStudent = (student) => {
    const catacomsData = db.data.catacombs?.[student];
    if (!catacomsData) return 0;
    const compeltedCatacombs = Object.values(catacomsData).filter(katakomba => katakomba.isComplete);

    return compeltedCatacombs.length * 2;
}

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
