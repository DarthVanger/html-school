export const StartScreen = ({ onClick }) => {
  const element = document.createElement('div');

  element.addEventListener('click', onClick);

  const textOverlay = document.createElement('div');
  textOverlay.className = 'overlay';
  textOverlay.style = 'cursor: pointer';
  textOverlay.innerHTML = `
    <p>13 3ABDAHb</p>
    <p>3 Java...Script</p>
  `;

  const hint = document.createElement('p');
  hint.className = 'kata-hint';
  hint.innerHTML = `
    Natysny Myshkou na ekrani v bud-iake misce
  `;

  element.append(hint);

  element.append(textOverlay)
  return element;
};
