const name = "Chapter 3. Time";

const paragraphs = [
  `
    Что ж, создаем Время! <code>setTimeout(time, 1000)</code>
  `,
  `
    <code>function time() { console.log('tik tok') }</code>
  `,
  `
    Тикают Часики, Вангер?
    Вот и всего-то ! Создать Время... Ха :)
  `,
  `
    Давай Движение!
  `,
  `
    С Движением сложнее, смотри...
    У Движения есть Направление... Это Вектор...
    Скорость состоит из Vx и Vy.
    V^2 = Vx^2 + Vy^2 - смекаешь?
  `,
  `
    Цивилзация Людей оставила Прекрасное Видео по Линейной Алгебре... Посмотри - может поможет... <a href="https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=1">
Vectors | Chapter 1, Essence of linear algebra</a>
  `,
  `
    Чем больше Vx, тем больше ты движешься вправо.
    Чем больше Vy, тем больше ты движешься вниз...
  `,
  `
    Для начала создай вообще координаты <code>let x = 0;</code> и <code>let y = 0;</code> 
  `,
  `
    Теперь создай скорость <code>let Vx = 30;<code> и <code>let Vy = 40;</code>
  `,
  `
    Что есть Скорость? Изменение координаты... Со временем... В Функции <code>time() { }</code> пиши
    <code>x += Vx;</code><code>y += Vy;</code>
  `,
  `
    Наконец, нужно изменить позицию Частицы на экране. Мы лишь посчитали числа - x, да y.
  `,
];

export const Chapter3 = {
  paragraphs,
}
