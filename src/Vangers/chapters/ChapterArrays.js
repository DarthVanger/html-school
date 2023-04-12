import {
  checkVangersRepoCreated,
  getGithubName,
  checkFirstCommitCreated,
  checkAppJsCreated, 
  checkTimeCreated,
} from '../Chapter/Proverka.js';

import { Chapter } from '../Chapter/Chapter.js';

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
  `
    Теперь Моссив вместо двух строк будет содержать два Объиекта. <code>let particles = [mars, sun];</code>. Что теперь вывводится у ДокУмент?
  `,
  `
  Хуй Пизда и раз два три &mdash; на объекты посмотри! <code>"[Object object] [Object object]"</code>.
  `,
  `
  Мы можем выводить лишь Свойство Объиекта, а не весь объиект Целиком! Например, мы можем высети <code>x</code> каждой Частицы. В фориче выводи <code>p.x</code> в ДокУмент, а не просто <code>p</code>.
  `,
  `
    Теперь покумекай, Ширшавый, как вывести <code>y</code>!
  `,
  `
    Молодец! ы. Получилося? Красава. А если не получилося &mdash; пиздуй назад на пару шагов, Шерсть!
  `,
  `
  --- С єтого момента Нихуища не понятно &mdash; переписать ---<br>
    Поехали Далее. ПокумекатьЪ... Мы хотим <code>x</code>, <code>y</code> использовать в качестве Декартовіх Координат. Мі хотімм показівть кортінке в определенной позиции. Т.е. нам нужно что? Позишен Абсолют! 
  `,
  `
  Для Позишен Абсолют, нам нужне Стайл. Но Стайл не тот что в <code>index.html</code>. А тот <code>style</code>, который для каждой Частицы... Нужно для Каждой Частицы сделать <code>document.querySelector()</code>. А для Квери Селектора нужно <code>id</code>.
  ...А для <code>id</code> нужен Элемент... ХТМЛ Элемент. Возькм Элемент <code>img</code>. Для Каждой Частицы выводим один и тот же <code>&lt;img src="particle.jpg"&gt;</code>. Это внутри цикла. Ты должен увидеть соответсвенно 2 имажа на экране.
  `,
  `
  Каждому имеджу мы дадим айди. Айди мы дадим по номеру Частицы в Моссиве. Нопремер: в нашем Моссиве первый элемент <code>mars</code>, значит его Индекс в Моссиве = 0. Понимаешь Вангер? Считать то нужно от Нуля, а не Единицы! У вас Вангеров так заведено.
  `,
  `
  Читобы получить Индекс Элемента Моссива, открою тебе секрет Вангер... Фукцея, которую ты передаешь в <code>forEach</code>, т.е. <code>printParticle</code> на самом деле принимает 2 Пораметра, а не один! Там где ты определяешь даную Фукцею, в круглые скобки дописуй через запятую второй Пораметр - <code>index</code>.
  `,
  `
  <code>function printParticle(p, index) {
  <br>
  const id = 'particle' + index;
  <br>
  document.body.innerHTML += \`&lt;img id="\${id}" src="particle.jpg"&gt;\`;
  <br>
  }</code>
  `,
  `
  Ура Блеать! У нас есть <code>img</code> с айди! Ебаный Жиес. Проверь в ИИнспект Элемент что айддишникеи длдя имедеджей у тебя <code>particle0</code> и <code>particle1</code>. Хорошо првоериили. Дальше. <code>querySelector</code> по айдишке.
  `,
  `
    Догадуешься что нужно сделать Вангерок? Я не сомневался в тебе... Внутри цикла, под нахуй <code>document.boby.innerHTML += ...</code> добавляем <code>p.element = docuemtn.querySelector('#' + id);</code>.
  `,
  `
  <code>p.element = docuemtn.querySelector('#' + id);</code>
    Поясняю шо мы сделали... Объиекту <code>p</code> мы добавляем еще один Ключ под названием <code>.element</code>. Этому Ключу мы даем Значение <code>= document.querySelector('#' + id);</code>
  `,
  `Ура! Элемент мы назначили. Наконец можем Элементу задать <code>style</code>. Пише блеать... <code>
  <br>
  p.element.style.position = 'absolute';
  <br>
  p.element.style.left = p.x + 'px';
  <br>
  p.element.style.toop = p.y + 'px';
  </code>
  <br>
  Подумой кудда это вписать... `,
  `
    Смари на Экран... Должно Кортинке Частиц выстроить на Парад Планет! Несии Трубу, Смотреть Будем! Если, конечно, ты Вангерок, код вписал-то без Ошибочек, Ха-Ха! ... Кхе-кхе.
  `,
  `
    Што ж, Молодец, Вангерок! Справился! Это было лишь Испражнение! Удоляй нахуй цей код, все по новой, Вангер! Кхе-кхе-кхе.
  `,
  `
    Это был лиишь Сон. Никакой Симуляции Ты не создашь, никакого ни Мира, ни Частиц на Самом дделе Нет!
  `,
  `
    Это шутка! Ха-ха. Пора Тебе узнать об Откате Времени! ДДержи кусок времени Ctrl + Z!
  `,
  `
    А вот и не шутка. Теперь Делаем то же самое для Ghost of Kyiv. А этот Код можешь в Одно место засунуть Галактическому Червяку...
  `,
`
    Конечно, я имею в виду &mdash; засунь свой Код в Гит) ДДальше продолжим на след уроках создавать Мир) Inception сук . Йо.
    `,
];

const cover = '/img/vangers/nuclear-cover.jpg';

export const ChapterArrays = ({ student, onChapterEnd }) => {
  console.info('ChapterArrays: initializing');
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
