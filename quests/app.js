const app = document.querySelector('#app');
const lessons = [
  [
    {
      img: '<img src="img/alertXuy4ek.png" />',
      id: 'alertXuy4ek',
      title: 'Alert Xuy4ek',
    },
    {
      img: '<img src="img/innerHTML.png" />',
      id: 'innerHTML',
      title: 'innerHTML',
    },
    {
      img: '<img src="img/flying.gif" />',
      id: 'flying',
      title: 'Flying',
    },
    {
      img: '<img src="img/walls.gif" />',
      id: 'walls',
      title: 'Walls of Destiny',
    },
    {
      img: '<img src="img/walls2.gif" />',
      id: 'walls2',
      title: 'Walls Y'
    },
    {
      img: '<img src="img/walls3.gif" />',
      id: 'walls3',
      title: 'Tunnel of Fear',
    },
  ],
  [
    {
      img: '<img src="img/plasma.gif" />',
      id: 'plasma',
      title: 'Plasma Gun',
    },
    {
      img: '<img src="img/plasma2.gif" />',
      id: 'plasma2',
      title: 'Plasma Y',
    },
    {
      img: '<img src="img/plasma2.gif" />',
      id: 'svg',
      title: 'Scalable Vector Graphics',
    },
  ]
];

const Lesson = lesson => `
  <div class="lesson">
    <a href="lesson.html#${lesson.id}">
      <figure>
        ${lesson.img}
      <figure>
    </a>
  </div>
`;

const LessonChain = lessonChain => {
  let html = '';
  for (let lesson of lessonChain) {
    html += Lesson(lesson);
    if (lessonChain.indexOf(lesson) !== lessonChain.length -1) {
      //html += Arrow();
    }
  }
  return html;
}

const LessonsGrid = lessons => {
  let html = '<div class="lessons-grid">';  
  for (let lessonChain of lessons) {
    html +='<div class="row">';
    html += LessonChain(lessonChain);
    html += '</div>';
  }
  html += '</div>';
  return html;
};

const lessonsList = lessons.map(LessonChain);


app.innerHTML = LessonsGrid(lessons);
