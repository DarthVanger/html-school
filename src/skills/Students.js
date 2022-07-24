export const Students = (state) => {
  const classes = (student) => {
    if (student === state.student) {
      return 'selected';
    }
    return '';
  }
  return `
    <header>
      <a href="#johnny" class="${classes('johnny')}">Johnny</a>
      <a href="#tony" class="${classes('tony')}">Tony</a>
      <a href="#dimon" class="${classes('dimon')}">Dimon</a>
    </header>
  `;
};
