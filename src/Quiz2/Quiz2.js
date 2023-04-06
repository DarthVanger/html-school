export const Quiz2 = () => {
  const element = document.createElement('div');
  element.innerHTML = `
    <h2>Quiz2</h2>
  `;

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
  return element;
};
