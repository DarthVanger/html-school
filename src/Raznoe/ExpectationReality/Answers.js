import { Answer } from './Answer.js'; 

export const Answers = ({ tony, johnny, dimon }) => {
  return `
    <article class="answers">
      ${Answer(tony, 'tony')}
      ${Answer(johnny,'johnny')}
      ${Answer(dimon, 'dimon')}
    </article>
  `;
};
