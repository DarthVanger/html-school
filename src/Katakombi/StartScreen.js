export const StartScreen = ({ onClick }) => {
  const element = document.createElement('div');
  const startImg = document.createElement('img');
  startImg.src = '/img/katakombi/zastavka.jpeg';
  startImg.id = 'kata-start-image';

  element.addEventListener('click', onClick);

  element.append(startImg);

  const textOverlay = document.createElement('div');
  textOverlay.className = 'overlay';
  textOverlay.style = 'cursor: pointer';
  textOverlay.innerHTML = `
    <p>13 3ABDAHb</p>
    <p>/7o Java...Script</p>
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
