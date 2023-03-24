import {
  checkVangersRepoCreated,
  getGithubName,
  checkFirstCommitCreated,
  checkAppJsCreated, 
  checkTimeCreated,
} from './Proverka.js';

import { Chapter } from './Chapter.js';

const title = "Chapter 2. Моссивы.";

const paragraphs = [
`
  ЧитоБы созидать Частицы нуженно... Зодать моссив... <code>let particles = ['xuy4ek', 'pizdos4ek'];</code>
`,
];

const cover = '/img/vangers/nuclear-cover.jpg';

export const Chapter2 = ({ student, onChapterEnd }) => {
  const element = document.createElement('article');

  const checkStep = async (step) => {
    let isValid = false;
    const githubName = getGithubName(student);
    const repoUrl = `https://github.com/${githubName}/vangers`;
    const hint =  `<div>Создай репозиторей ёпта. <a href="${repoUrl}" target="_blank">${repoUrl}</a> По ссылке-то 404!</div>`;

    if (step === 10) {
      console.info('Validating step 10');
      const isRepoCreated = await checkVangersRepoCreated(student);
      if (!isRepoCreated) {
        console.log('Repo is not created - step not valid');
        return { isValid: false, hint };
      } else {
        return { isValid: true, hint };
        console.log('Repo is created, step is valid!');
      }
    }

    return { isValid: true, hint };
  };

  const chapter = {
    title,
    paragraphs,
    checkStep,
    cover,
  };

  const chapter2 = Chapter({
    chapter,
    onChapterEnd,
  });

  element.append(chapter2);

  return element;
}
