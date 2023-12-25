import { Topbar } from '../../Topbar.js';
import { Question } from './Question.js';

export const Exam3 = () => {
  const element = document.createElement('div');

  const contentEl = document.createElement('div');

  element.append(Topbar({ backUrl: '/#/exam' }));

  const questions = [
    Question({
      title: 'Import/Export',
      theory: 'Describe the mechanism of import/export in javascript. What is a javascript module?',
      task: 'Create html file, add a script tag with src="app.js", and inside "app.js" import 2 other JS files',
    })
  ];

  contentEl.innerHTML = `
    <h2>Exam #3</h2>
  `;

  questions.forEach((q) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'exam3-question';

    const cardFrontContent = document.createElement('div');
    const cardBackContent = document.createElement('div');
    cardFrontContent.className = 'exam3-question-front';
    cardBackContent.className = 'exam3-question-back';

    cardFrontContent.append(q)


    cardEl.append(cardFrontContent);
    cardEl.append(cardBackContent);

    contentEl.append(cardEl);
  });

  element.append(contentEl);

  return element;
};
