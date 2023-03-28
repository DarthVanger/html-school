export const Exam2 = () => {
  const element = document.createElement('div');

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
  ];

  element.innerHTML = `
    <h2>Exam #2</h2>
  `;

  questions.forEach((q) => {
    const questionEl = document.createElement('div');

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

    answerInput.addEventListener('input', () => {
      const answer = answerInput.value;
      const isAnswerCorrect = q.answer.test(answer);
      if (isAnswerCorrect) {
        answerStatusEl.innerHTML = 'Answer is Correct!';
        answerStatusEl.style.border = 'solid green 2px';
      } else {
        answerStatusEl.innerHTML = 'Answer is INCORRECT!';
        answerStatusEl.style.border = 'solid red 2px';
      }
    });

    element.append(questionEl);
  });


  return element;
};
