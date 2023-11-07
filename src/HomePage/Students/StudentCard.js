import { Avatar } from '../../Avatar.js';

export const StudentCard = (state) => {
  const element = document.createElement('article');
  element.className = 'student-card';

  const { student } = state;

  element.innerHTML = `
    <h2>Studetn card ${student}</h2>
    ${Avatar({student})}
  `;

  return element;
};
