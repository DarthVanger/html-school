export const Vangers = () => {
  const element = document.createElement('section');
  element.id = 'vangers';

  document.body.className = 'vangers-page';

  let step = localStorage.getItem('vangers-step') || 0;

  const paragraphs = [
    `
        Ну здравствуй, Вангер!
        Сегодня тебе предстоит сложная задача...
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
        Создаем новую папку... В ней index.html, а там "Hello epta"...
    `,
    `
        Справился, ширшавый? Молодец...
        Как ты понимаешь для Создания Мира потребуется JavaScript...
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
        Внутри файла <code>particles.js</code> выведи у докУмент точечку текстом пожалуйста... <code>"."</code>
    `,
    `
        Получилось? Эта точка - твоя первая частица, Вангер! Это твой Новый Мир!..
        Добавь теперь 100 точек, сто частиц. С помощью цикла <code>while</code>.
    `,
    `
        Сто Частиц... Сто Точек... Мы Создаем Материю, не менее, Вангерок ты мой!..
        Необходимо задать Пространство... Каждая Частица должна быть не точкой, но Элементом...
    `,
    `
        В <code>app.js</code> Вместо ста точек текстом, добавляй 100 раз в докУмент вот такой ХТМЛ: <code>&lt;div&gt;.&lt;/div&gt;</code>
    `,
    `
        Стали точки друг под другом?
        Проверь в Хроме в Elements вкладке, появился ли <code>&lt;div&gt;</code>, появился ли класс в ХТМЛ для Частиц...
    `,
    `
        Наконец создаем Пространство. Сделай абсолютную позицию Часитцам: <code>&lt;div style="position: absolute; left: 0; top: 0;"&gt;.&lt;/div&gt;</code>.
    `,
    `
        Слиплися все 100 точек в верхний левый угол? Хорошо...
    `,
    `
        Довай задодим Частицам случайные позиции... <code>let x = Math.random() * screen.width;</code>, и для <code>let y = Math.random() * screen.height;</code>
    `,
    `
        Мир обретает Форму... Хаоса... Космоса... Стали частицы в рандомные позиции на экране, Вангер?
    `,
    `
        Чего не хватает в нашем Мире, Вангер, поразкинь мозжечком, а?
    `,
    `
        Смышленый ты, Вангерок! Кончено, Движения, Времени. Наш Мир замер в одной позиции...
        Частицам нужно Движение, а Движению нужно Время...
    `,
  ];

  function nextStep() {
    nextStepBtn.classList.add('push');
    setTimeout(() => { nextStepBtn.classList.remove('push') }, 4000);
    if (step > paragraphs.length - 1) return;
    step++;
    showStep(step);
  };

  function prevStep() {
    if (step < 1) return;
    step--;
    showStep(step);
  };

  function showStep(s) {
    console.log('Show step: ', s);
    localStorage.setItem('vangers-step', s);
    messageElement.innerHTML = paragraphs[s];
    video.play();
  }

  const messagePanel = document.createElement('article');
  const messageElement = document.createElement('p');
  messagePanel.id = 'message-panel';
  messageElement.innerHTML = paragraphs[step];
  messagePanel.append(messageElement);
  element.append(messagePanel);

  const nextStepBtn = document.createElement('img');
  nextStepBtn.src = '/img/vangers/next-button.png';
  nextStepBtn.id = 'next-step-img';
  nextStepBtn.addEventListener('click', nextStep);
  element.append(nextStepBtn);

  const prevStepBtn = document.createElement('img');
  prevStepBtn.src = '/img/vangers/prev-button.png';
  prevStepBtn.id = 'prev-step-img';
  prevStepBtn.addEventListener('click', prevStep);
  element.append(prevStepBtn);

  const backgroundImg = document.createElement('img');
  backgroundImg.src = '/img/vangers/fostral.jpg';
  backgroundImg.id = 'background-img';
  element.append(backgroundImg);

  const videoContainer = document.createElement('div');
  videoContainer.id = 'video-container';
  const video = document.createElement('video');
  video.src = '/video/vangers/fostral.mp4';
  videoContainer.append(video);
  element.append(videoContainer);

  const introVid = document.createElement('video');
  introVid.id = 'intro-vid';
  introVid.src = '/video/vangers/open.mp4';
  const introVidDuration = 5000;
  const fadeDuration = 1000;
  setTimeout(() => {
      introVid.volume = 0;
  }, 4500);

  introVid.addEventListener('click', () => {
    introVid.play();
    setTimeout(() => {
      introVid.classList.add('fade-out-1s');
      setTimeout(() => {
        introVid.remove();
        playMusic();
        video.play();
      }, fadeDuration);
    }, introVidDuration);
  });
  element.append(introVid);

  return element;
};

const audio = new Audio('/video/vangers/fostral.mp3');
audio.loop = true;
audio.volume = 0.1;

const playMusic = () => {
  audio.play();
};
