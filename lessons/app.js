const app = document.querySelector('#app');
const lessons = [
  [
    {
      img: '<img src="img/walls.gif" />',
      title: 'walls',
    },
    {
      img: '<img src="img/walls2.gif" />',
      title: 'walls2',
    },
  ],
  [
    {
      img: '<img src="img/walls.gif" />',
      title: 'walls',
    },
    {
      img: '<img src="img/walls2.gif" />',
      title: 'walls2',
    },
  ]
];

const Lesson = lesson => `
  <div class="lesson">
    <a href="lesson.html#${lesson.title}">
      <figure>
        ${lesson.img}
      <figure>
    </a>
  </div>
`;

const Arrow = () => {
  const r = 15;
  const h = 150;
  const w = 10;

  return `
    <svg width="${2 * r}" height="${h}">
      <circle cx="${r}" cy="${r}" r="${r}" />
      <line x1="${r}" y1="${r}" x2="${r}" y2="${r + h}" stroke-width="${w}" />
      <circle cx="${r}" cy="${h - r}" r="${r}" />
    </svg>
  `;
}

const LessonChain = lessonChain => {
  let html = '';
  for (let lesson of lessonChain) {
    html += Lesson(lesson);
    if (lessonChain.indexOf(lesson) !== lessonChain.length -1) {
      html += Arrow();
    }
  }
  return html;
}

const LessonsGrid = lessons => {
  let html = '<div class="lessons-grid">';  
  for (let lessonChain of lessons) {
    html +='<div class="col">';
    html += LessonChain(lessonChain);
    html += '</div>';
  }
  html += '</div>';
  return html;
};

const lessonsList = lessons.map(LessonChain);


app.innerHTML = LessonsGrid(lessons);
