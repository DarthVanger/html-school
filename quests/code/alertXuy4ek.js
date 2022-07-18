const alertXuy4ek = `
<h1>Alert Xuy4ek</h1>
`;

export default alertXuy4ek;

// not used, needs refactoring to new format
// of steps and checks for quests like in innerHTML quest
const check = () => {
  const code = getInnerText(editor);
  let step = 0;

  if (!/<script>/.test(code)) {
    showMentorAtCursor('Вписуй &lt;script&gt;, блять)');
  }

  if (/<script>[\n]/.test(code)) {
    showMentorAtCursor('Красава! Теперь закрывающий &lt;/script&gt;! :)');
    step++;
  }

  if (/<\/script>/.test(code)) {
    showMentorAtCursor('ОГОНЬ! Внутри тега пиши alert');
    step++;
  }

  if (/<script>\s*alert\s*[^<]*<\/script>/.test(code)) {
    showMentorAtCursor('Скобку круглую открывающую)');
    step++;
  }

  if (/<script>\s*alert[(]\s*[^<]*<\/script>/.test(code)) {
    showMentorAtCursor('Кавычки)');
    step++;
  }

  if (/<script>\s*alert[(]['"][^<]*<\/script>/.test(code)) {
    showMentorAtCursor('хуйчек )');
    step++;
  }

  if (/<script>\s*alert[(]['"][^'"<\s]+[^<]*<\/script>/.test(code)) {
    showMentorAtCursor('Закрывающие кавычки)');
    step++;
  }

  if (/<script>\s*alert[(]['"][^'"]+['"]\s*[^<]*<\/script>/.test(code)) {
    showMentorAtCursor('Закрыть круглую скобку)');
    step++;
  }

  if (/<script>\s*alert[(]['"][^'"]+['"][)]\s*[^<]*<\/script>/.test(code)) {
    showMentorAtCursor('Точку с запятой блять!');
    step++;
  }

  if (/<script>\s*alert[(]['"][^'"]+['"][)];\s*<\/script>/.test(code)) {
    showMentorAtCursor(`
      <p>
        Ваще огонь ! 🔥🔥🔥
      </p>
      <p>
        Запускай йопта! Должно пахать)
      </p>
    `);
    step++;
  }

  if (step !== currentStep) {
    nextStep(step);
  }
};
