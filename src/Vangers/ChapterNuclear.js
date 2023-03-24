const name = "Chapter X. Nuclear Force";

const paragraphs = [
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

export const ChapterNuclear = {
  name,
  paragraphs,
  cover: '/img/vangers/nuclear-cover.jpg',
}
