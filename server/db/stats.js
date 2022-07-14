import { db } from './db.js';

const getHomeworkPoints = ({ student, skill }) => {
  if (!db.data.homework) return 0;

  const homeworkEntries = db.data.homework[student]?.filter(
    entry => entry.skill === skill.text,
  );
  return homeworkEntries?.length || 0;
};

const getQuestPoints = ({ skill='none', student='none' } = {}) => {
  const ips = {
    '::ffff:188.163.81.200': 'johnny',
    '::ffff:84.17.47.123': 'dimon',
    '::ffff:95.67.81.49': 'napaleon',
    '::ffff:00.00.00.000': 'tony',
  };

  if (!db.data.codeRunLog) return 0;

  const codeRuns =  db.data.codeRunLog;

  const codeRunsWithCompletedQuests = new Set();

  for (let codeRun of codeRuns) {
    if (codeRun.codeRunInfo.isTaskDone) {
      codeRunsWithCompletedQuests.add(codeRun);
    }
  }

  let questsNum = 0;
  const completedQuests = [...codeRunsWithCompletedQuests].map(codeRun => {
    const { lesson } = codeRun.codeRunInfo;
    const { remoteAddress } = codeRun.requestInfo;
    const completedByStudent = ips[remoteAddress];

    const skillLessonMap = {
      alertXuy4ek: 'alert',
    };

    if (
      student === completedByStudent
    ) {
      questsNum++;
    }

    return {
      student: completedByStudent,
      lesson,
      skill: skillLessonMap[lesson],
    };
  });


  return { questsNum, questPoints: completedQuests };
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
          categoryLevel[student] += getQuestPoints({ student, skill}).questsNum;
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
  const { questPoints } = getQuestPoints();

  return { points, levels, categoryLevels, homework, questPoints };
};
