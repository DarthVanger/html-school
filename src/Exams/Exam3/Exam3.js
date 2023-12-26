import { Topbar } from '../../Topbar.js';
import { Question } from './Question.js';
import { questions} from './questions.js';

export const Exam3 = () => {
  const element = document.createElement('div');
  element.id = "exam3";

  const contentEl = document.createElement('div');
  contentEl.id = "exam3-content";

  element.append(Topbar({ backUrl: '/#/exam' }));


  contentEl.innerHTML = `
    <h2>Exam #3</h2>
  `;

  const questionsListElement = document.createElement('div');
  questionsListElement.id = 'exam3-questions-list';

  questions.forEach((q) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'exam3-question';

    const cardFrontContent = document.createElement('div');
    const cardBackContent = document.createElement('div');
    cardFrontContent.className = 'exam3-question-front';
    cardBackContent.className = 'exam3-question-back';

    cardFrontContent.append(Question(q))


    cardEl.append(cardFrontContent);
    cardEl.append(cardBackContent);

    questionsListElement.append(cardEl);
  });

  contentEl.append(questionsListElement);

  element.append(contentEl);

  return element;
};
