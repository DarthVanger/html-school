import { Topbar } from '../../Topbar.js';
import { Question } from './Question.js';

export const Exam3 = () => {
  const element = document.createElement('div');
  element.id = "exam3";

  const contentEl = document.createElement('div');
  contentEl.id = "exam3-content";

  element.append(Topbar({ backUrl: '/#/exam' }));

  const questions = [
    {
      title: 'Recursion',
      theory: 'What is recursion? How does it work? Where are the variables stored?',
      task: 'Write a recursive algorithm to calculate Fibonacci numbers f(n) = f(n-1) + f(n-2)',
    },
    {
      title: 'Import/Export',
      theory: 'Describe the mechanism of import/export in javascript. What is a javascript module?',
      task: 'Create html file, add a script tag with src="app.js", and inside "app.js" import 2 other JS files',
    },
    {
      title: 'Getters and Setters',
      theory: 'What are getters and setters in javascript? What are they used for?',
      task: 'Create an object or class named "Circle" with "get area()" and "set radius()" methods',
    },
    {
      title: 'Promise',
      theory: 'What is a promise in javascript? What is it used for? Why do we need it?',
      task: 'Create a function, which returns a Promise, which resolves after 1000ms, using setTimeout()',
    },
    {
      title: 'async/await',
      theory: 'What is async/await? Why do we need it? How does it work?',
      task: 'Make a fetch() request to google.com, and print response.text() onto the screen',
    },
    {
      title: 'HTTP requests, REST',
      theory: 'What is HTTP? Which HTTP methods do you know? What is REST?',
      task: 'Make 4 fetch() requests to https://jsonplaceholder.typicode.com with different HTTP methods',
    },
    {
      title: 'this, bind',
      theory: 'What is "this" in Javascript? Which values can it take? What does the value depend on? What about arrow functions?',
      task: 'Give 3-5 examples where "this" is used and can take different values: global context, object, class, arrow function',
    },
  ];

  contentEl.innerHTML = `
    <h2>Exam #3</h2>
  `;

  const questionsListElement = document.createElement('div');
  questionsListElement.id = 'exam3-questions-list';

  questions.forEach((q) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'exam3-question';

    const cardFrontContent = document.createElement('div');
    const cardBackContent = document.createElement('div');
    cardFrontContent.className = 'exam3-question-front';
    cardBackContent.className = 'exam3-question-back';

    cardFrontContent.append(Question(q))


    cardEl.append(cardFrontContent);
    cardEl.append(cardBackContent);

    questionsListElement.append(cardEl);
  });

  contentEl.append(questionsListElement);

  element.append(contentEl);

  return element;
};
