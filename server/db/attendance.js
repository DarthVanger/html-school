import { lectures } from '../../src/LearningProgress/lectures.js';

export const attendance = (lecture, lectureIdx, student) => {
  const lectureHasStudentsList = Boolean(lecture.students);

  if (lectureHasStudentsList) {
    return lecture.students.includes(student);
  }

  const joinedFromLecture = {
    napaleon: 0,
    'other-species': 0,
    dimon: 0,
    johnny: 0,
    tony: 0,
    'mister-smith': 20,
    valik_h: 22,
    mazerTim: 26,
    TinaDenysiuk: 45,
  };

  return lectureIdx > joinedFromLecture[student];

};
