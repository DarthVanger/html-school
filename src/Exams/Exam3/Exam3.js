import { Topbar } from '../../Topbar.js';
import { ImportExportQuestion } from './questions/ImportExportQuestion.js';

export const Exam3 = () => {
  const element = document.createElement('div');

  const contentEl = document.createElement('div');

  element.append(Topbar({ backUrl: '/#/exam' }));

  const questions = [
    ImportExportQuestion(),
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
