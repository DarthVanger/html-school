const app = document.querySelector('#app');
const lessons = [
  {
    img: '<img src="img/conditionals.jpeg" />',
    title: 'conditionals',
  },
  {
    img: '<img src="img/walls.jpeg" />',
    title: 'walls',
  },
];

const lessonsList = lessons.map(lesson => `
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
`);

app.innerHTML = `
  <ul>
    ${lessonsList.join('')}
  </ul>
`;

