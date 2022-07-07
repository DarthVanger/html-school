const app = document.querySelector('#app');
const lessons = [
  [
    {
      img: '<img src="img/walls.gif" />',
      title: 'walls example',
    },
    {
      img: '<img src="img/walls.gif" />',
      title: 'walls task',
    },
  ]
];

const Lesson = lesson => `
  <li>
    <a href="lesson.html#${lesson.title}">
      <figure>
        ${lesson.img}
        <figcaption>
          ${lesson.title}   
        </figcatption>
      <figure>
    </a>
  </li>
`;

const LessonChain = lessonChain => {
  let html = '';
  for (let lesson of lessonChain) {
    html += Lesson(lesson);
  }
  return html;
}

const lessonsList = lessons.map(LessonChain);



app.innerHTML = `
  <ul>
    ${lessonsList.join('')}
  </ul>
`;

