export const Chapter = ({ chapter }) => {
  const element = document.createElement('article');
  element.className = 'chapter';

  const cover = document.createElement('img');
  img.src = chapter.cover;
  element.append(img);

  const title = document.createElement('h1');
  title.innerText = chapter.title;
  element.append(title);

  let step = localStorage.getItem('vangers-step') || 0;

  const paragraphs = Chapter1.paragraphs;

  function nextStep() {
    nextStepBtn.classList.add('push');
    setTimeout(() => { nextStepBtn.classList.remove('push') }, 4000);
    if (step > paragraphs.length - 1) return;
    step++;
    showStep(step);
  };

  function prevStep() {
    if (step < 1) return;
    step--;
    showStep(step);
  };

  function showStep(s) {
    console.log('Show step: ', s);
    localStorage.setItem('vangers-step', s);
    messageElement.innerHTML = paragraphs[s];
    video.play();
  }

  const messagePanel = document.createElement('article');
  const messageElement = document.createElement('p');
  messagePanel.id = 'message-panel';
  messageElement.innerHTML = paragraphs[step];
  messagePanel.append(messageElement);
  element.append(messagePanel);

  const nextStepBtn = document.createElement('img');
  nextStepBtn.src = '/img/vangers/next-button.png';
  nextStepBtn.id = 'next-step-img';
  nextStepBtn.addEventListener('click', nextStep);
  element.append(nextStepBtn);

  const prevStepBtn = document.createElement('img');
  prevStepBtn.src = '/img/vangers/prev-button.png';
  prevStepBtn.id = 'prev-step-img';
  prevStepBtn.addEventListener('click', prevStep);
  element.append(prevStepBtn);

  const backgroundImg = document.createElement('img');
  backgroundImg.src = '/img/vangers/fostral.jpg';
  backgroundImg.id = 'background-img';
  element.append(backgroundImg);

  return element;
};
