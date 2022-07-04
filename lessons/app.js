const app = document.querySelector('#app');
const lessons = [
  {
    url: 'conditionals',
    img: '<img src="conditionals/conditionals.jpeg" />',
    title: 'conditionals',
  },
  {
    url: 'conditionals',
    img: '<img src="conditionals/conditionals.jpeg" />',
    title: 'conditionals',
  },
];

const lessonsList = lessons.map(lesson => `
  <li>
    <a href="${lesson.url}">
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

