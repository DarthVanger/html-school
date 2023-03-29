export const Dictation = () => {
  const element = document.createElement('div');
  element.className = 'dictation';

  const dictationItems = [
      ['()', 'parentheses'],
      ['[]', 'brackets'],
      ['{}', 'curly braces'],
      ['<>', 'angle brackets'],
      ['?', 'question mark'],
      [':', 'colon'],
      [';', 'semicolon'],
      [',', 'comma'],
      ['.', 'dot'],
      ['&', 'and sign (ampersand)'],
      ['$', 'dollar sign'],
      ['!', 'exclamation mark'],
      ['отступ', 'indentation'],
      ['внутри', 'inside'],
      ['вне', 'outside'],
      ['изменить', 'modify'],
      ['элемент', 'element'],
  ];

  let currentDictationItem = 0;
  const nextDictationItem = () => {
      element.innerHTML += `<li>${dictationItems[currentDictationItem][0]}</li>`;
      currentDictationItem++;

      if (currentDictationItem == dictationItems.length) {
          showDictationAnswers(currentDictationItem);
      }
  };

  element.addEventListener('click', nextDictationItem);

  const showDictationAnswers = (questionNum) => {
      const lis = element.querySelectorAll('li');
      lis.forEach((l, idx) => {
          if (idx === 0) return;
          l.innerHTML += ' &mdash; ' + dictationItems[idx - 1][1];
      });
  };

  return element;
};
