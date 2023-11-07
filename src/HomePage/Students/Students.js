import { Profile } from '../../Profile/Profile.js';
import { StudentCard } from './StudentCard.js';
import { calculateCodeAcademyPoints } from '../../stats.js';

export const Students = (state) => {
  console.log('state: ', state);
    console.log('state.students: ', state.students);
  const element = document.createElement('article');
  element.id = 'students';
  
  element.innerHTML = `
    <h2 class="h2">Членомерка</h2>
  `;

  state.isProfileLoading = true;
  fetch('/tree')
    .then(r => r.json())
    .then(r => {
      state.isProfileLoading = false;
      state.skills = r.skills;
      state.levels = r.levels;
      state.points = r.points;
      state.categoryLevels = r.categoryLevels;
      state.lecturePoints = r.lecturePoints;
      state.questPoints = r.questPoints;
      state.codeAcademy = r.codeAcademy;
      state.students = r.students;
      state.codeAcademyPoints = calculateCodeAcademyPoints(state);

      state.activeStudents = [
        'dimon', 'mister-smith', 'johnny', 'TinaDenysiuk',
      ];

      for (const student of state.activeStudents) {
        element.append(StudentCard({ ...state, student }));
        element.append(Profile({ ...state, student }));
      }
    });

  return element;
};
