import { Topbar } from '../../Topbar.js';

import { VariablesLecture } from './Variables/VariablesLecture.js';
import { Variables as VariablesQuiz } from './Variables/Variables.js';

export const Exam1 = () => {
  const element = document.createElement('div');
  element.id = "exam1";

  element.append(Topbar({ backUrl: '/#/exam' }));

  const contentEl = document.createElement('div');

  contentEl.innerHTML = `
    <h2>Кто Хочет Стать Банконъером??</h2>
    <figure>
      <video autoplay muted loop>
        <source src="/video/snoop/loop/start.mp4" type="video/mp4" />
      </video>
    </figure>
  `;

  element.append(contentEl);

  element.append(VariablesQuiz());
  
  return element;
};
