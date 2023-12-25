import { Topbar } from '../Topbar.js';

export const Exams = () => {
  const element = document.createElement('div');
  element.id = "exams";

  element.append(Topbar());

  const contentEl = document.createElement('div');

  contentEl.innerHTML = `
    <h2>Єкзамені</h2>
    <ol>
      <li><a href="/#/exam/1">Exam #1</a></li>
      <li><a href="/#/exam/2">Exam #2</a></li>
      <li><a href="/#/exam/3">Exam #3 - Другий Курс</a></li>
    </ol>
  `;

  element.append(contentEl);

  return element;
};
