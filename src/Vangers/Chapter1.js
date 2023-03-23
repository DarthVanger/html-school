import {
  checkVangersRepoCreated,
  getGithubName,
  checkFirstCommitCreated,
  checkAppJsCreated, 
  checkTimeCreated,
} from './Proverka.js';

import { Chapter } from './Chapter.js';

  const title = "Chapter 1. Particle";

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
    Мы создали версию онлайн (в облаке - на ГИТХАБ.КОМ).
    Теперь делаем локальную версию.
    Для этого нам потребуется создать Новую Папку...
  `,
  `
    Открывавем Проводник. Парввой кнопкой на пустое место, "Создать -> Папку".   
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
    Проверь <code>git status</code> - стал <code>index.html</code> зелененьким?
  `,
  `
    Теперь наконец <code>git commit -m "Add index.html"</code>
  `,
  `
    Все! Репозеторий создан, Первый Коммит Есть!
    Отсалось связать локальный репозиторий с облачным на Гитхабе.
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
  `
    --- ЯДЕРКА ---
  `,
  `
    Добавляем каждому объиекту свойство <code>color</code>, он должен быть одднимм из трех: "r", "g", "b" (текст).
    Также создай новую констану <code>const c = 1;</code>
  `,
  `
    Над тем где расчитываем forceX, и forceY пишем <code>if (planet.color === otherPlanet.color)</code> &mdash; т.е. если цвет заряда Кварка совпадает.
    Одинаковые заряды (заряды одного цвета) отталкиввуют друг друга. Внутри <code>if</code> делай плюсовую силу. А в <code>else { }</code> &mdash; будет минусовая сила, т.е. разные заряды (заряды разных цветов) &mdash; притягивают друг друга. Нюанс: обьявление переменных forceX и forceY нужно вынести за <code>if { }</code>, а внутри лишь перезаписывать его (БЕЗ слова <code>let</code>)
  `,
  `
    Чтобы на экране различать цвета Кварков, в <code>index.html</code> заменяем <code>img</code> на <code>div</code>, а <code>src</code> &mdash; убираем. Т.е. вместо кортинок Планет, у нас теперь будут просто пустые <code>&lt;div&gt;&lt;/div&gt;</code> (не забываем что каждый <code>div</code> хоть и пустой, но должен быть закрыт!) Айдишки оставляет пока что &mdash; они нам еще нужны в джавскрипте, т.е. в <code>app.js</code>.
    А в style.css меняем для каждой Планеты размер на: <code>width: 50px;</code> и <code>height: 50px;</code>. А всем дивам даем черный фон, т.е. <code>background: black;</code>
    По желанию всем дивам даем <code>border-radius: 50%;</code> &mdash; это сделает черные кводраты круглыми.
  `,
  `
    Смотрим что вышло! Должны летать черные 50-пикселльные квокдраты по экрану!
    Осталось лишь покрасить кводраты. Квадрат с Красным зорядом красимм у крсный цвет: <code>background: red;</code>. Кводрат же с Синим Зорядом &mdash; красим у синий цвет: <code>background: blue;</code>; И все Тела с Зеленым Зорядом красим у Зеленый! <code>background: green;</code>.
  `,
  `
    Проверяем покрассочку и Силы! Планеты одного цвета должны Отталкиваться, а Планенты Разных Цвветов &mdash; должны Притягиваться! Для наглядности сделай всем равные массы &mdash; напр сотку 100. А заряды - всем сделай положительные! Т.е. во всье объиектах <code>q: 10</code>
  `,
  `
    Што ж, нужно больше Кварков! Давай добавлять Кварки в цикле. Давай добаввем 10 Планет с помощью цилка! Масив <code>planets</code> у тебя уже есть. Сделай цикл, который добавляет в этот масив еще 10 элементов. Пиши под <code>let planets = [...];</code> цикл <code>let n = 0; while (n < 10) { console.log('n', n); n += 1; };</code>. Проверь в Консоле что выводится 0, 1, 2, 3, 4, и т.д.
  `,
    `
      Внутри цикла нужно "сгенерировать" айди. Пиши <code>let id = \`p-\${id}\`</code>. Т.е. наши айди планет будут выглядеть как напирмер "p-0", "p-1", "p-2", и т.д. до "p-9". Сделай <code>console.log('айди: ', id);</code>

    `,
    `
      Наконец, используй этот <code>id</code> в Диве, который мы добавим в ДокУмент: <code>document.body.innerHTML += \`&lt;div id="p-\${n}"&gt;&lt;/div&gt;\`;</code>.
    Єтот цикл должен добавіть тебе 10 дополнительніх дівов в ХТМЛ - проверь через ИССЛЄДОВАТЬ ЄЛЕМЕНТ.
    `,
    `
    Тебе нужно создать ВНУТРИ цикла переменную <code>let planet = { ... }</code> - скопируй сюда тот же объект шо для Марса. В качесте айди укажи ему наш сгенеренный <code>id</code>. Х и У задай рандомно: <code>x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight()</code>
    `,

];

const hints = [
  '<a href="http://napaleon.space/#/quests/innerHTML">Домашка по innerHTML</a>',
  '<a href="http://napaleon.space/#/quests/htmlImg">Домашка по HTML &lt;img&gt;</a>',
];


const cover = '/img/vangers/nuclear-cover.jpg';

export const Chapter1 = (state) => {
  const element = document.createElement('article');
  const { student } = state;

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

    if (step === 27) {
      console.log('step is 27!');
      const isCommitCreated = await checkFirstCommitCreated(student);
      if (!isCommitCreated) {
        console.log('commit not created can not go next step');
        const githubName = getGithubName(student);
        const commitHistoryUrl = `https://github.com/${githubName}/vangers/commits/master`;
        hint.innerHTML = `<div>Запуш коммиты ёпта. <a href="${commitHistoryUrl}" target="_blank">${commitHistoryUrl}</a> Коммит на Гтихабе не появился-то!</div>`;
        return;
      } else {
        console.log('commit is created, going to next step');
      }
    }

    if (step === 30) {
      console.log('step is 30!');
      await checkTimeCreated();
      const isAppJsCreated = await checkAppJsCreated(student);
      if (!isAppJsCreated) {
        console.log('app.js not created can not go next step');
        const githubName = getGithubName(student);
        const appJsUrl = `https://github.com/${githubName}/vangers/blob/master/app.js`;
        hint.innerHTML = `<div>На ГитХабе app.js то нету? Ширшавый <a href="${appJsUrl}" target="_blank">${appJsUrl}</a></div>`;
        return;
      } else {
        console.log('app.js is created, going to next step');
      }
    }

    if (step === 31) {
      console.log('step is 31!');
      console.log('Chapter Nuclear');
      nextChapter(ChapterNuclear);
    }

    return { isValid: true, hint };
  };


  element.append(Chapter({ title, paragraphs, checkStep, cover }));



  return element;

}
