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
    url: '/src/slides.html#lesson1',
  },
  {
    text: 'ССЫЛКЕ: &lt;a href&gt; ВИДЕО: &lt;video&gt;',
    items: [
      'Литучка по HTML и CSS',
      'HTML Ссылке &lt;a href="google.com&gt;',
      'HTML Видео &lt;video controls&gt;',
    ],
    skills: ['html-a', 'html-video'],
    url: '/src/slides.html#lesson2',
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
    url: '/src/slides.html#lesson3',
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
    url: '/src/slides.html#lesson4',
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
    url: '/src/slides.html#lesson10',
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
    url: '/src/slides.html#lesson11',
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
    url: '/src/slides.html#lesson12',
  },
  {
    text: 'Передвижение кнопеками; Запуск Ракеты',
    skills: ['if-else', 'functions', 'style'],
    items: [
      'Делоем передвижение корабля кнопеками',
      'Делоем запуск ракеты',
      'Конгда ракета попала в стену - убираем ее',
    ],
    url: '/src/slides.html#lesson13',
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
    url: '/src/slides.html#lesson14',
  },
  {
    text: 'Переносим код в Git. Refactoring. Top-down Design.',
    items: [
      'Гит: опять 25',
      'Top down design: лекция Stanford',
      'Продолжаем переносить код в Гит, наводить красоту',
    ],
    skills: ['git'],
    url: '/src/slides.html#lesson15',
  },
  {
    text: 'Виски 12-летней выдержки. Продолжаем переносить код. Git.',
    items: [
      'Виски 12-летней выдержки мм)',
      'Продолжаем переносить код игры в Гит. Потехоньку))',
    ],
    skills: ['git'],
    url: '/src/slides.html#lesson16',
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
    url: '/src/slides.html#lesson17',
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
    url: '/src/slides.html#lesson18',
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
    url: '/src/slides.html#lesson19',
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
    url: '/src/slides.html#lesson20',
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
    url: '/src/slides.html#lesson21',
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
    url: '/src/slides.html#lesson22',
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
    url: '/src/slides.html#lesson23',
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
    url: '/src/slides.html#lesson24',
  },
];
