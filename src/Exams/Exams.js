export const Exams = () => {
  const element = document.createElement('div');
  element.id = "exams";

  element.innerHTML = `
    <h2>Єкзамені</h2>
    <ol>
      <li><a href="/#/exam/1">Exam #1</a></li>
      <li><a href="/#/exam/2">Exam #2</a></li>
    </ol>
  `;

  return element;
};
