import { BankiStudent } from './BankiStudent.js';

export const Banki = ({ state, lessonName }) => {
  const el = document.createElement('section');
  el.id = 'banki';


  setTimeout(async () => {
    el.innerHTML = `
      <h2>Banki</h2>
      <p>Loading...</p>
    `;

    const students = await fetch('/students').then(r => r.json());

    el.innerHTML = ``;

    const inactiveStudents = ['other-species', 'mazerTim'];
    students.unshift('napaleon');

    for (let student of students)  {
      if (inactiveStudents.includes(student)) continue;

      el.append(BankiStudent({ student }));
      console.log('student' , student);
    }
  });

  return el;
};
