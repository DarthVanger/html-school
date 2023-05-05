export const lectures = [
  {
    text: 'ЗНОКОМСТВО - HTML: &lt;h1&gt; &lt;p&gt; &lt;img&gt; CSS: h1, p.',
    items: [
      'Насколько сложен HTML? Ожидание / Реальность.',
      'Аналогия с Word: Заголовок, параграф: &lt;h1&gt; &lt;p&gt;',
      'Кортинке: &lt;img src="file.png" &gt;',
      'CSS: задаем цвет (color) для h1, p',
      'CSS: задаем размеры (width, height) кортинке', ],
    skills: ['html-h1', 'html-p', 'html-img', 'css-h1-p', 'css-color'],
    url: '/#/slides/v1#lesson1',
  },
  {
    text: 'ССЫЛКЕ: &lt;a href&gt; ВИДЕО: &lt;video&gt;',
    items: [
      'Литучка по HTML и CSS',
      'HTML Ссылке &lt;a href="google.com&gt;',
      'HTML Видео &lt;video controls&gt;',
    ],
    skills: ['html-a', 'html-video'],
    url: '/#/slides/v1#lesson2',
  },
  {
    text: 'ДЖАВО-СКРИПТ',
    items: [
      'Литучка по HTML и CSS',
      'CSS "position: absolute", "left", "top"',
      'alet("xuy4ek");',
      'Фукции: делаем что-то на клик',
      'document.querySelector(),',
      'Перменные, +=',
      'Изменяем стиль кортинке: katinka.style.left = ...',
    ],
    skills: ['functions', 'variables', 'querySelector', , 'style', 'alert', 'xuy4ek'],
    url: '/#/slides/v1#lesson3',
  },
  {
    text: 'ПОЛЕТ КОРАБЛЯ',
    items: [
      'Литучка по Javascript',
      'Ожидание реальность: насколько сложно движение корабля сделать?',
      'Event object для click события: x и y клика',
      'По клику перемещаем корабль в точку клика',
      'Центрирование: отнять высоту и ширину картинки / 2',
      'document.querySelector(),',
    ],
    skills: ['event', 'on click', 'console', 'functions', 'click-event', 'variables', 'style'],
    url: '/#/slides/v1#lesson4',
  },
  {
    text: 'СТЕНЫ: if/else. ПЛАЗМА',
    items: [
      'Запрещаем движение корабля если x &gt; 200 (стена)',
      'Запрещаем движение корабля по y &gt; 200 (самостоятельно)',
      'Плазма: setInterval() по клику и постоянное движение',
    ],
    skills: ['if-else', 'variables'],
  },
  {
    text: 'Миша все хуйня - давай по новой. 2 функции - сложена',
    items: [
      'Объявляем и вызываем функции - практика',
      'Дву функции - как єто? ) Пробуем',
    ],
    skills: ['functions'],
  },
  {
    text: 'Основы JS: функции и переменные. innerHTML. +=',
    items: [
      'Создаем переменные и изменяем их',
      'Создаем функцию print() для вывода текста на экран',
    ],
    skills: ['functions', 'variables', 'innerHTML', '+='],
  },
  {
    text: 'Ноченаем делать игру: управление (keydown, click)',
    items: [
      'На клик выводим х и y на экран',
      'На нажатие клавишы выводим ее на экран',
    ],
    skills: ['event', 'key-event', 'click-event', 'if-else', 'innerHTML'],
  },
  {
    text: 'Приводим код в порядок: красиво печатаем Х на экране. Добавляем setInterval(). Уже 4 функции!',
    items: [
      'Приводим в порядок наши 4 функции',
      'Step, print, handleClick, handleKeydown',
    ],
    skills: ['event', 'key-event', 'click-event', 'if-else', 'innerHTML'],
  },
  {
    text: 'ЭЭЭЭ КВАТОР!!! ПОЗДРАВЛЯЮ!!! :)',
    skills: ['бухич', 'дутьё'],
    items: [
      'Бухич',
      'Дутье',
      'Обзор прогресса обучения',
      'Левела, древо скилов',
      'Вспоминаем что было на прошлых лекциях',
      'Эра Курсов: смотрим первую лекцию на англ (Coursera)',
    ],
    url: '/#/slides/v1#lesson10',
  },
  {
    text: 'Перемещение кортинке из JS',
    items: [
      'Лекция про img 3 мин',
      'Добавляем кортинке корабля и стены',
      'Лекция о переменных и выражениях (C язык)',
      'Quiz с Кусеры по переменным (1 вопрос)',
      'Добавляем переменные wallX, shipX',
      'Двигаем кортинке в соответствии с переменными',
    ],
    skills: ['functions', 'style'],
    url: '/#/slides/v1#lesson11',
  },
  {
    text: 'Столкновение со стеной',
    skills: ['if-else', 'functions', 'style'],
    items: [
      'Дикотант по англ словам (скобе круглый квадратный)',
      'Вы приняты в Гарвард!',
      'Смотрим Гарвард про HTML',
      'Смотрим Гарвард про JS',
      'Делоем столкновение со стеной',
      'Лекция от Бабули - if/else в javascript',
    ],
    url: '/#/slides/v1#lesson12',
  },
  {
    text: 'Передвижение кнопеками; Запуск Ракеты',
    skills: ['if-else', 'functions', 'style'],
    items: [
      'Делоем передвижение корабля кнопеками',
      'Делоем запуск ракеты',
      'Конгда ракета попала в стену - убираем ее',
    ],
    url: '/#/slides/v1#lesson13',
  },
  {
    text: 'Четверть-Кватор. Lanugage Drops, Kef. Знакомство с Git.',
    items: [
      'Дуем',
      'Ванчик пояняет за Git',
      'Лекция от Гарварада по Git',
      'Практека по Гит: начинаем переносить наш код',
    ],
    skills: ['git', 'git clone', 'git add', 'git commit', 'git push', 'git pull', 'top-down design', 'refactoring'],
    url: '/#/slides/v1#lesson14',
  },
  {
    text: 'Переносим код в Git. Refactoring. Top-down Design.',
    items: [
      'Гит: опять 25',
      'Top down design: лекция Stanford',
      'Продолжаем переносить код в Гит, наводить красоту',
    ],
    skills: ['git'],
    url: '/#/slides/v1#lesson15',
  },
  {
    text: 'Виски 12-летней выдержки. Продолжаем переносить код. Git.',
    items: [
      'Виски 12-летней выдержки мм)',
      'Продолжаем переносить код игры в Гит. Потехоньку))',
    ],
    skills: ['git'],
    url: '/#/slides/v1#lesson16',
  },
  {
    text: 'Продолжаем переносить код: движение Земли, столкновение объектов.',
    items: [
      'Последние штрихи переноса кода',
      'Движение Земли',
      'Столкновение стены и ракеты',
      'Столкновение стены и корабля',
    ],
    skills: ['git'],
    url: '/#/slides/v1#lesson17',
  },
  {
    text: 'Курсачи: 1-я итерация. setTimeout() - анимация ракеты. Event Loop.',
    items: [
      'Онглицки! Базарим пробуем )',
      'Димон: показуем расказуем че по Курсу Мишиган',
      'Тони: показуем свой личный сайт (текст, кортинке)',
      'Джони: показуем кнопеку старт (pull request, demo работы фичи)',
      'След шаги по курсачам',
      'setTimeout() - че за зверь?',
      'Ивент ЗаЛупа',
      'Онемация ракеты при стрельбе по цели',
    ],
    skills: ['git', 'english', 'presentation', 'setTimeout', 'event loop'],
    url: '/#/slides/v1#lesson18',
  },
  {
    text: 'Курсачи: 2-я итерация. Переменные и стринги. Типы данных.',
    items: [
      'Димон: показуем расказуем че по Курсу Мишиган (2-я неделя)',
      'Тони: показуем свой личный сайт (текст, кортинке с цсс - красивые уже)',
      'Джони: показуем панель прогреса уровня (0-100%) (pull request, demo работы фичи)',
      'Теория: раздупляемся с кавычками наконец) Когда они нужны, когда нет.',
    ],
    skills: ['git'],
    url: '/#/slides/v1#lesson19',
  },
  {
    text: 'Курсачи: 3-я итерация. Столкновения объекта с 4-х сторон. Алгебра 8й клас.',
    items: [
      '[7 min] Димон: показуем расказуем че по Курсу Мишиган (2-я неделя - Quiz)',
      '[7 min] Тони: показуем свой личный сайт: че там епта)',
      '[7 min] Джони: показуем Pull Request (код) для кнопки Start Game',
      '[15 min] Peremena',
      '[10 min] English: British Parliament',
      '[15 min] Algebra 8th grade: Rectangle in Cartesian coordinates',
      '[15 min] Peremena',
      '[25 min] Rectangle in Cartesian coordinates: coding',
      '[15 min] Peremena',
      '[15 min] Git push baby',
    ],
    skills: ['if-else', 'git', 'english', 'functions'],
    url: '/#/slides/v1#lesson20',
  },
  {
    text: 'Курсачи: 4-я итерация. Летучки. Загружаем сайт в Инторенет.',
    items: [
      '[7 min] Димон: показуем расказуем че по Курсу Мишиган (все закончил?)',
      '[7 min] Тони: какой сайт вышел по итогу',
      '[7 min] Джони: показуем Pull Request для кнопки Start Game',
      '[15 min] Peremena',
      '[10 min] English: videos',
      '[15 min] Загружаем сайт в Инторонеты',
      '[15 min] Peremena',
      '[25 min] JavaScript Модули',
      '[15 min] Peremena',
      '[25 min] Летучки по столкновению объектов',
    ],
    skills: ['if-else', 'git', 'english', 'functions'],
    url: '/#/slides/v1#lesson21',
  },
  {
    text: 'Функцеи: практека - пишем простые фукции',
    items: [
      'Чито токое фукцея?',
      'Функцея print(message)',
      'Функцея multiplyBy2(x)',
      'Функцея greaterThan2(x)',
      'Функцея squareLessThanPi(x)',
    ],
    skills: ['if-else', 'functions'],
    url: '/#/slides/v1#lesson22',
  },
  {
    text: 'Фукцеи, обьекты. Ставим Unity.',
    items: [
      'Фукцея say(something)',
      'Фукцея subtract(a, b)',
      'Что токое Обьъкт?',
      'Ставим Unity',
      'Функцея distance(point)',
    ],
    skills: ['if-else', 'functions', 'object', 'unity'],
    url: '/#/slides/v1#lesson23',
  },
  {
    text: 'Фукцеи, обьекты. Добавляем 3 стены в игре.',
    items: [
      'Димон: шо там Мишиган',
      'Johnny: шо там start game button',
      'Git merge and squash',
      'Функцея say(something)',
      'Функцея log(something)',
      'Функцея distance(x, y)',
      'Функцея printRect(rect)',
      'Добавляем 3 стены в игру',
    ],
    skills: ['if-else', 'functions', 'object'],
    url: '/#/slides/v1#lesson24',
  },
  {
    text: '25 УРОКЕ! КеФ :) Бухич. Игра. Гит.',
    items: [
      'Новенькие: устонавлеваем Гит',
      'Игра: синхронизируемся через Гит',
      'Игра: Rename wall/ground -> enemy1',
      'Игра: Чиним столкновение Корабля с Enemy1',
      'Игра: Добавляем Enemy2',
      'Игра: Движение Enemy2',
      'git clone, git pull',
      'git status, git log',
      'git diff, git add, git push',
    ],
    skills: ['git', 'kef', 'if-else', 'functions', 'geometry',  'git-add', 'git-push', 'git-clone', 'git-pull', 'git-log', 'git-diff'],
    url: '/#/lesson-25',
  },
  {
    text: 'Выпускники MICHIGAN! Игра, гит, фукцеи, хуюкцеи',
    items: [
      'Ваня выпуск, Димон - супер выпускник',
      'Новенькие: правела, устонавлеваем Гит',
      'Игра: синхронизируемся через Гит',
      'git clone, git pull',
      'Игра: enemy2 - столкновение',
      'git status, git log',
      'git diff, git add, git push',
    ],
    skills: ['if-else', 'functions', 'geometry',  'git-add', 'git-push', 'git-clone', 'git-pull', 'git-log', 'git-diff'],
    url: '/#/slides/v1#lesson26',
  },
  {
    text: 'Игра, объекты, git',
    items: [
      'Димон, Ваня - Advanced CSS - красавы! Че там ваще кста?)',
      'Игра: синхронизируемся через Гит',
      'git clone, git pull',
      'Игра: refactoring - продолжаем делать фукцеи',
      'git status, git log',
      'git diff, git add, git push',
    ],
    skills: ['if-else', 'functions', 'geometry',  'git-add', 'git-push', 'git-clone', 'git-pull', 'git-log', 'git-diff'],
    url: '/#/slides/v1#lesson27',
  },
  {
    text: 'Обьекты: о5 25. Игра продолжаем',
    items: [
      'Штрафы: хто не сделал домашку делаем CodeAcedemy',
      'Обиекты: исчо раз поисинияю',
      'Литучка: пишем функцию sum(x, y) и sum({ x, y })',
      'Игра: синхронизируемся через Гит',
      'Игра: refactoring - renderEnemy()',
      'Игра: refactoring - запиздячиваем enemyVelocity в обиекты ))',
      'git status, git log',
      'git diff, git add, git commit, git push',
    ],
    skills: ['objects', 'functions', 'git-add', 'git-push', 'git-pull', 'git-log', 'git-diff'],
    url: '#/slides/v2/lesson28',
  },
  {
    text: 'НОВЫЙ ГОД ) 31-е)',
    items: [
      'Провожаем Год',
      'Встречаем Год',
      'Коктейли',
      'Джойстик: хуесос подключился',
      'Джойстик: выводим на экран значение нажатия курка',
      'Джойстик: Сдвигаем кортинке в соответсвии с ножатеем курока',
      'Джойстик: мультипрлеер: 2 курка: кіт пес )',
      'Бухич',
      'Споры',
    ],
    skills: ['бухич', 'дутьё', 'joystick', 'multiplayer'],
    url: '#/slides/v2/lesson29',
  },
  {
    text: '30-е занятие) Retrospective. Game. Objects. Gepard.',
    items: [
      '30-е занятие юхууу!',
      'Ретроспектива',
      'Игра: группируем все по обьектам',
      'Gepard',
      'English: Unity',
    ],
    skills: ['work-process', 'js-objects', 'refactoring', 'physics'],
    url: '#/slides/v2/lesson30',
  },
  {
    text: 'Russi4 - Академия Буряка. Гепард. Хз)',
    items: [
      'Литучка',
      'Russi4 - Академия Буряка',
      'Игра: рефакторенг, показуем Русекку',
      'Gepard: Зодачу решаем',
    ],
    skills: ['js-objects', 'refactoring', 'physics'],
    url: '#/slides/v2/lesson31',
  },
  {
    text: 'Гра, паблішим сайт в Інторонет, Гепард - Фізика',
    items: [
      'Литучка - Катакомбі',
      'Паблішим сайти в Інторонети',
      'Гепард - Фізика - попадаєм в точку та на випередження :)',
    ],
    skills: ['js-objects', 'refactoring', 'physics', 'devops'],
    url: '#/slides/v2/lesson32',
  },
  {
    text: 'Дімона пул реквест. Гіт конфлікти. Створюєм таски',
    items: [
      'Github projects - типа jira',
      'Димон - фиксим git conflicts',
      'Створюєм таски по грі',
    ],
    skills: ['git'],
    url: '#/slides/v2/lesson33',
  },
  {
    text: 'Gatling gun; documnent.createElement()',
    items: [
      'Літучка: Робим Гатлінг gun',
      'Мержим пул реквести',
      'Гра: Спрощуємо Дімона код для Гатлінг гану',
      'Нова тема: розбиваєм гру на МОДУЛІ (import/export)',
    ],
    skills: ['git'],
    url: '#/slides/v2/lesson34',
  },
  {
    text: '35-те заняття, бухіч) Генерація рівнів',
    items: [
      '35-те заняття!! Бухіч.',
      'Оналез Дошки: що зроблено за 2 тижні, що будем робити далі.',
      'Оналез Ретроспективи: що за 5 тижнів покращили',
      'Гра: Підчищаем, розбиваєм на файли.',
      'Нова тема: Цикли. Генерація рівнів.',
    ],
    skills: ['git', 'js'],
    url: '#/slides/v2/lesson35',
  },
  {
    text: 'Создание Вселенной: частицы, пространство, время и движение.',
    items: [
      'Вангеры :)',
      'Частицы: выводим 100 точек у докУмент (while дщщз)',
      'Пространство: задаем случайную позицию частицам',
      'Время: добавляем setInterval(time, 1000)',
      'Движение: каждую секунду изменяем x, y частиц с помощью querySelectorAll и forEach',
    ],
    skills: ['git', 'js', 'physics', 'while-loop', 'querySelectorAll', 'forEach', 'setInterval'],
    url: '#/slides/v2/lesson36',
  },
  {
    text: 'Литучки, экзамены, граветацея',
    items: [
      'Летучка на синтаксис: function, if, while',
      'Экзамен',
      'Гравитация: первая попытка',
    ],
    skills: ['fucntions', 'if-else', 'while'],
    url: '#/slides/v2/lesson37',
  },
  {
    text: 'Каникулы',
    items: [],
    skills: [],
    url: '',
  },
  {
    text: "Там не було кав'ярні і кальяну. А Стар варс розбити на пункти:",
    items: [
      'Додавання музики в скрипт',
      'цсс стилі',
      'анімація',
      'шрифти',
    ],
    skills: ['css-transform', 'setInterval', 'variables', 'js-audio', 'fonts'],
    url: '',
  },
  {
    text: "Online: КотоКомбы, Stanford Домашка по Пиромидке",
    items: [
      'Онлайн Встреча',
      'КотоКомбы',
      'Stanford Домашка по Пиромидке',
      'Пивко',
      'Ваня сделал Stanford Домашка по Breakout Game',
    ],
    skills: ['stanford', 'loop', 'while-loop', 'variables'],
    url: '#/slides/v2/lesson40',
  },
  {
    text: "ДР ВЧИТЕЛЯ. 1 КВІТНЯ.",
    items: [],
    skills: [],
  },
  {
    text: "World Of Goo: Gravity",
    items: [
      'Создоем Мир с Нуля...',
      'Space',
      'Time',
      'Movement',
      'Gravity: Fy = g (сила ВНИЗ)',
      'Drawing SVG lines',
    ],
    skills: ['svg', 'svg-line', 'force', 'gravity', 'space', 'time', 'movement'],
  },
  {
    text: "Circular dependencies, ES6 modules graph; SVG; document.createElement()",
    items: [
      'Циклічні залежності модулів (import/export)',
      'Граф залежностей модулів',
      'SVG: малюєм сіські (окуляри)',
      'document.createElement(): практика, відмінності від innerHTML +=',
    ],
    skills: ['svg', 'svg-line', 'svg-circle', 'js-modules'],
  },
  {
    text: "Литучка по SVG, createElement. Делаем многостраничній сайт",
    items: [
      'Литучка по SVG',
      'Литучка по document.createElement',
      'Делаем SPA',
      'Линейная Алгебра - базисные вектора',
    ],
    skills: ['svg', 'svg-line', 'svg-circle', 'js-modules'],
    url: '#/slides/v2/lesson44',
  },
  {
    text: "Литучки по createElement, SPA, React. Introduction to Pixi.js",
    poster: 'img/lessons/lesson45-poster.jpg',
    items: [
      'Литучка по document.createElement() / SPA',
      'Литучка по React',
      'Introduction to Pixi.js by Johnny',
    ],
    skills: ['react', 'spa', 'createElement', 'js-modules'],
    url: '#/slides/v2/lesson45',
  },
  {
    text: "Алгоритми, ООП, localStorage, Destructuring",
    items: [
      'Стас - підсумок, питання і відповіді по минулим темам',
      'Літучка c leetcode.com algorithms',
      'Новий матеріал - OOП. (Висока складність)',
      'Стас - Головна тема ООП',
      'Обід',
      'Новий матеріал - Local storage',
      'Новий матеріал - Деструктуризація массивов es6',
    ],
    skills: ['js', 'algorithms', 'OOP', 'js-localStorage', 'js-array-destructuring'],
    url: '#/slides/v2/lesson46',
  },
];
