export const Banki = ({ state, lessonName }) => {
  const students = state.students;
  console.log('banki state: ', state);
  const el = document.createElement('section');
  el.id = 'banki';

  el.innerHTML = `
    <h2>Banki</h2>
  `;

  return el;
};
