import { Topbar } from '../../Topbar.js';

export const Exam2 = () => {
  const element = document.createElement('div');

  const contentEl = document.createElement('div');

  element.append(Topbar({ backUrl: '/#/exam' }));
  contentEl.className = 'exam2-content'

  const questions = [
    {
      code: `
        let x = "100px" + "100px";
      `,
      question: 'Чему равен x?',
      answer: /['"]?100px100px['"]?/,
    },
    {
      code: `
        let x = 100 + 100;
      `,
      question: 'Чему равен x?',
      answer: /200/,
    },
    {
      code: `
        let x = '100px';
        x = x + '100px';
      `,
      question: 'Чему равен x?',
      answer: /['"]?100px100px['"]?/,
    },
    {
      code: `
        let x = '100px';
        x += '100px';
      `,
      question: 'Чему равен x?',
      answer: /['"]?100px100px['"]?/,
    },
    {
      code: `
        let x = '100px';
        let y = x + '100px';
      `,
      question: 'Чему равен y?',
      answer: /['"]?100px100px['"]?/,
    },
    {
      code: `
        let x = 100;
        let y = x + '100px';
      `,
      question: 'Чему равен y?',
      answer: /['"]?100100px['"]?/,
    },
    {
      code: `
        let x = 100;
        let y = x + 'px';
      `,
      question: 'Чему равен y?',
      answer: /['"]?100px['"]?/,
    },
    {
      code: `
        let x = 100;
        let y = x + '100';
      `,
      question: 'Чему равен y?',
      answer: /['"]?100100['"]?/,
    },
    {
      code: `
        let x = 100;
        let y = x + 100;
      `,
      question: 'Чему равен y?',
      answer: /200/,
    },
    {
      code: `
        let x = 100;
        let y = x + 100 + 'px';
      `,
      question: 'Чему равен y?',
      answer: /['"]?100100px['"]?/,
    },
    {
      code: `
        let x = 100;
        let y = x + 100 + 'px';
        let z = x / y;
      `,
      question: 'Чему равен z?',
      answer: /NaN/,
    },
    {
      code: `
        let x = 100;
        let y = x + 100 + 'px';
        let z = x * y;
      `,
      question: 'Чему равен z?',
      answer: /NaN/,
    },
    {
      code: `
        let x = 100;
        let y = x + 100 + 'px';
        let z = x * y * Math.sqrt(2);
      `,
      question: 'Чему равен z?',
      answer: /NaN/,
    },
    {
      code: `
        let x = 100;
        let y = x + 'px';
        let z = y + 3.14; 
      `,
      question: 'Чему равен z?',
      answer: /['"]?100px3.14['"]?/,
    },
    {
      code: `
      let x = 100;
      let y = x + 'px';
      let w = y + x - y * 2;
      `,
      question : 'Чему равен w?',
      answer: /undefined/,
    },
    {
      code: `
      let x = Infinity;
      let a = x - 999999;
      `,
      question : 'Чему равен a?',
      answer: /Infinity/,
    },
    {
      code : `
      let x = 3/0;
      `,
      question : 'Чему равен x?',
      answer: /Infinity/,
    },
    {
      code: `
      function IWallet(x) {
        let food = 'less' + x + ' food';
        const life = 'live' 
        return null }
      const salary = IWallet('money');
      `,
      question : 'Чему равна твоя зарплата(salary)?',
      answer: /null/,
    },
    {
      code : `
      let choise;
      if(choise) {
        choise = 'Пукать в диван';
      } else {
        choise = 'Нужно учиться';
      }
      choise === 'Пукать в диван';
      `,
      question : 'Наш выбор(choise) правильный?',
      answer : /true/,
    },
    {
      code: `
      let boolean = true;
      boolean !== false
      `,
      question : 'Чему равен boolean?',
      answer : /true/,
    },
  ];

  contentEl.innerHTML = `
    <h2>Exam #2</h2>
  `;

  questions.forEach((q) => {
    const questionEl = document.createElement('div');
    questionEl.className = 'questionElExam2'

    const questionTextEl = document.createElement('h3');
    questionTextEl.innerHTML = `Question: ${q.question}`;
    questionEl.append(questionTextEl);

    const codeEl = document.createElement('pre');
    codeEl.innerHTML = `<code>${q.code}</code>`;
    questionEl.append(codeEl);

    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    questionEl.append(answerInput);

    const answerStatusEl = document.createElement('div');
    answerStatusEl.innerHTML = 'Not answered yet';
    questionEl.append(answerStatusEl);
    answerStatusEl.className = 'answerStatusExam2El';

    answerInput.addEventListener('input', () => {
      const answer = answerInput.value;
      const isAnswerCorrect = q.answer.test(answer);
      if (isAnswerCorrect) {
        answerStatusEl.innerHTML = 'Answer is Correct!';
        answerStatusEl.style.border = 'solid green 2px';
        questionEl.classList.add('exam2-correct-answer')
      } else {
        answerStatusEl.innerHTML = 'Answer is INCORRECT!';
        answerStatusEl.style.border = 'solid red 2px';
        questionEl.classList.remove('exam2-correct-answer')
      }
    });

    contentEl.append(questionEl);
  });

  element.append(contentEl);

  return element;
};
