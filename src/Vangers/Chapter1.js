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
  Подключи JS отдельным файлом <code>&lt;script src="app.js"&gt;</code>.
  Создай файл <code>app.js</code> и выведи с него в докУмент текст <code>"app.js file loaded"</code>.
`,
`
  Убедился что <code>app.js</code> рабочий?
  Погоди куда рвешься писать код... Создаем второй файл <code>particles.js</code> - для Частиц нашего Мира...
`,
`
  Файл <code>particles.js</code> подключай в <code>app.js</code> с помощью <code>import './particles.js'</code>.
  Да не забуть в <code>index.html</code> добавить <code>type="module"</code> внутрь тэга <code>&lt;script&gt;</code.
    `,
    `
  Всё вам, Вангерам, обьяснять надо... На своих Мехосах помешались.
  Внутри файла <code>particles.js</code> выведи у докУмент кортинке - добавь в innerHTML <code>document.body.innerHTML += '<img src="http://napaelon.space/img/paricle.png">';</code>
    `,
`
  Получилось? Эта Картинка - твоя первая Частица, Вангер! Это твой Новый Мир!..
`,
];

const hints = [
  '<a href="http://napaleon.space/#/quests/innerHTML">Домашка по innerHTML</a>',
  '<a href="http://napaleon.space/#/quests/htmlImg">Домашка по HTML &lt;img&gt;</a>',
];

export const Chapter1 = {
  title,
  paragraphs,
  cover: '/img/vangers/particle.jpg',
};
