import { Profile } from '../../Profile/Profile.js';
import { StudentCard } from './StudentCard.js';
import { calculateCodeAcademyPoints } from '../../stats.js';

export const Students = (state) => {
  const element = document.createElement('article');
  element.id = 'students';
  
  element.innerHTML = `
    <h2 class="h2">Членомерка</h2>
  `;

  state.isProfileLoading = true;
  fetch('/experience')
    .then(r => r.json())
    .then(r => {
      console.log('experience: ', r);
      state.experience = r;

      state.activeStudents = [
        'dimon', 'mister-smith', 'johnny', 'TinaDenysiuk', 'napaleon',
      ];

      for (const student of state.activeStudents) {
        element.append(StudentCard({ ...state, student }));
        element.append(Profile({ ...state, student }));
      }
    });

  return element;
};
