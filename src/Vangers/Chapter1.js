import {
  checkVangersRepoCreated,
  getGithubName,
  checkFirstCommitCreated,
  checkAppJsCreated, 
  checkTimeCreated,
} from './Proverka.js';

import { Chapter } from './Chapter.js';

  const title = "Chapter 1. Нихуя.";

  const paragraphs = [
  `
    Привет, Вангер! Как доехал, не запыхался?
    У меня для тебя новая "интересная" задача...
    Ты должен Создать Новый Мир...
  `,
  `
    Тот самый Первичный Суп Частиц... Из которого проистекает вся Материя...
  `,
  `
    Но Тебе, Вангер, это, конечно ни к чему, что я тебя утомляю!
  `,
  `
    Твои мысли лишь о Мехосах, об их моторах да удобных креслах...
    И том как подзаработать на Нюху и содержание Мехоса!
  `,
  `
    Удел Вангеров создавать Интернет-Магазины для продажи Флегмы да Нимбосов...
    И то по шаблону клепают, у самих движок написать уменок-то не хватает!
  `,
  `
    Дак к чему это я, ах да... Поэтому ты будешь создавать Мир в виде Интернет-Сайта...
  `, 
  `
    Пораскинь своими заржавевшими Вангеровскими извилинами, с чего мы начинаем создание Сайта?
  `,
  `
    Нихуя)) Создаем Гит Репозеторей. Создавай сначало репозеторей на Гитхаб.ком.
  `,
  `
    Переходим на github.com. Логинимся. ВВ левом верхнем углу зеленая кнопка "New". ППерешли на страничку "Create a new repository".
  `,
  `
    Вписываем в "Repository name" название: <code>vangers</code>
  `,
  `
    Скролим в самый низ, жмакаем зеленую кнопку "Create repository".
  `,
  `
    Видим новую страницу: Quick Setup.
    Но делать мы этого, конечно, не будем.
    Слушай суда, Вангер!
  `,
  `
    Далее. Нахуй браузер - сворачиваем.
    Теперь делаем локальную версию.
    Для этого нам потребуется создать Новую Папку На ЖЕСТКОМ ДИСКЕ...<br>
    Вводим название папки: <code>vangers</code>.
    Название папки должно совпадать с названием репозитория в Github.
    Дабы избежать сбоев в ДНК нашего Мира.
    `,
  `
    Открываем VsCode. Там Файл -> открыть папку. Выбираем нашу новосозданную папку <code>vangers</code>.
  `,
  `
    Открывавем Терминал. ВВыбираем Git Bash.
  `,
  `
    Теперь. Чтобы создать локальный Гит Репозеторей, мы пишем в Терминале <code>git init</code>
  `,
  `
    Initialized empty Git repository in <code>C:/Users/User/Documents/projects/vangers/.git/</code>
    Гит создал папку <code>.git</code> и вывел тебе Путь к Ней.
  `,
  `
    Справился, ширшавый? Молодец...
    Чтобы сделать первый Коммит, нам нужено что-то Добаветь.
    И добавим мы index.html.
    Создавай в папке <code>vangers/</code> файл <code>index.html</code>
  `,
  `
    В <code>index.html</code> пишем <code>&lt;h1&gt;Hello World&lt;/h1&gt;</code>.
  `,
  `
    Файл есть &mdash; можем комитить.
    Добавляй свой файл: <code>git add index.html</code>
  `,
  `
    Проверь <code>git status</code> - стал <code>index.html</code> зелененьким? Зеленький как Я ^_^.
  `,
  `
    Теперь наконец <code>git commit -m "Add index.html"</code>
  `,
  `
    Все! Репозеторий создан, Первый Коммит Есть!
    Осталось связать локальный репозиторий с облачным на Гитхабе.
  `,
  `
    Облачные, онлайн репозиитории в Гиите называются "remote".
    Чтобы связать облачный репозиторий с нашим локальнім пишем <code>git remote add origin ссілке</code>. Ссілке копируем с Гитхаба.
   Открываем свернутый браузер, там ссілке сразу же сверху где Quick Setup.
  `,
  `
    Нихуя не відало)) Єто ок. Єто значіт все ок.
    Репозитории свяязані! Ура!
    Можем <code>git push</code> делать!
  `,
  `
    fatal: The current branch master has no upstream branch.
  To push the current branch and set the remote as upstream, use

      <code>git push --set-upstream origin master</code>

      Делай что говоріт Гіт, Вангер1
  `,
  `
    Ура! Комит запушен, молодца! :) Возвращемся в <code>index.html</code>. Подключи JS отдельным файлом <code>&lt;script src="app.js"&gt;</code>.
  `,
  `
    Создай файл <code>app.js</code> и выведи с него в докУмент текст <code>"жиес зогружен!"</code>.
  `,
  `
    Комитем! Пиши <code>git add .</code> далее <code>git commit -m "Create app.js"</code>. И Пуш! <code>git push</code>.
  `,
  `
    Убедился что <code>app.js</code> рабочий?
    Что ж, погнали созавать Мир!
  `,
];

const hints = [
  '<a href="http://napaleon.space/#/quests/innerHTML">Домашка по innerHTML</a>',
  '<a href="http://napaleon.space/#/quests/htmlImg">Домашка по HTML &lt;img&gt;</a>',
];


const cover = '/img/vangers/nuclear-cover.jpg';

export const Chapter1 = ({ student, onChapterEnd }) => {
  const element = document.createElement('article');
  const githubName = getGithubName(student);
  const repoUrl = `https://github.com/${githubName}/vangers`;

  const checkStep = async (step) => {
    if (step === 10) {
      console.info('Validating step 10');
      let isValid;
      const isRepoCreated = await checkVangersRepoCreated(student);
      if (!isRepoCreated) {
        console.log('Repo is not created - step not valid');
        isValid = false;
      } else {
        console.log('Repo is created, step is valid!');
        isValid = true;
      }

      const hint =  `<div>Создай репозиторей ёпта. <a href="${repoUrl}" target="_blank">${repoUrl}</a> По ссылке-то 404!</div>`;

      return { isValid, hint };
    }

    if (step === 25) {
      console.info('Validating step is 27');

      let isValid;
      const isCommitCreated = await checkFirstCommitCreated(student);
      console.log('isCommitCreated:', isCommitCreated);
      if (!isCommitCreated) {
        console.log('commit not created can not go next step');
        isValid = false;
      } else {
        console.log('commit is created, going to next step');
        isValid = true;
      }

      const commitHistoryUrl = `https://github.com/${githubName}/vangers/commits/master`;
      const hint = `<div>Запуш коммиты ёпта. <a href="${commitHistoryUrl}" target="_blank">${commitHistoryUrl}</a> Коммит на Гтихабе не появился-то!</div>`;

      return { isValid, hint };
    }

    if (step === 28) {
      console.log('Validating step 28');
      let isValid;
      await checkTimeCreated();
      const isAppJsCreated = await checkAppJsCreated(student);
      if (!isAppJsCreated) {
        console.log('Chapter1: app.js is NOT created, can not go next step');
        isValid = false;
      } else {
        console.log('Chapter1: app.js is created, going to next step');
        isValid = true;
      }

      const appJsUrl = `https://github.com/${githubName}/vangers/blob/master/app.js`;

      const hint = `<div>На ГитХабе app.js то нету? Ширшавый <a href="${appJsUrl}" target="_blank">${appJsUrl}</a></div>`;

      return { isValid, hint };
    }

    return { isValid: true, hint: '' };
  };

  const chapter = {
    title,
    paragraphs,
    checkStep,
    cover,
    onChapterEnd,
  };

  const chapter1 = Chapter({
    chapter,
    onChapterEnd,
  });

  element.append(chapter1);

  return element;

}
