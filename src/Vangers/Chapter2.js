import {
  checkVangersRepoCreated,
  getGithubName,
  checkFirstCommitCreated,
  checkAppJsCreated, 
  checkTimeCreated,
} from './Proverka.js';

import { Chapter } from './Chapter.js';

const title = "Chapter Два &mdash; ХуерТа.";

const paragraphs = [
`
  ЧитоБы созидать Частицы нуженно... Зодать моссив... <code>let particles = ['xuy4ek', 'pizdos4ek'];</code>
`,
`
  Каждую Частицу нуженно вывести в ДокУмент! Используй цикл <code>forEach</code>! <code>forEach</code> проходит по каждому Элементу, который указан перед ним. (по каждому Элементу Массиива <code>particles</code>). И для Каждого Элемента <code>forEach</code> вызывает указанную в круглых скобках Фукцею, блеать! Ширшавый.`,
  `<code>particles.forEach(printParticle);</code>. Это одна строка кода. Теперь опредделяем Фукцею <code>function printParticle(p) { document.body.innerHTML += p }</code>. Этот Код выведе в ДокУмент Каждую Частицу &mdash; Каждый Элемент Моссива.
`,
  `
  Слова слипаются, как слизнявая жопа моей бывшей летом! Добавь <code>&lt;br&gt;</code>! Догадайгся куда, блять! Через плюс...
  `,
  `
  Частица &mdash; это на даный момент просто текст. Но у частиц, вообще-то в Пространтсве, должны быть Координаты! Твоя Цивилизация оставила некие Тексты... Декарт... Система Координат - Слыхал про Такое?
  `,
  {
    type: 'image',
    src: '/img/vangers/geometria-renato.png',
  },
  `
    Моссив наш <code>particles</code> теперь будет набором Объиектов! Для ночала создадим два Объиекта. <code>let mars = { x: 100, y: 100 };</code> и <code>let sun = { x: 0, y: 500 }</code>.
  `,
];

const cover = '/img/vangers/nuclear-cover.jpg';

export const Chapter2 = ({ student, onChapterEnd }) => {
  console.info('Chapter2: init');
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
    onChapterEnd,
  };

  const chapter2 = Chapter({
    chapter,
    onChapterEnd,
  });

  element.append(chapter2);

  return element;
}
