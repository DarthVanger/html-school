import { ChapterCover } from './ChapterCover.js';

export const Chapter = ({ chapter, onChapterEnd }) => {
  const element = document.createElement('article');
  element.className = 'chapter';

  //element.append(ChapterCover({ chapter }));

  const title = document.createElement('h1');
  title.innerText = chapter.title;
  //element.append(title);

  let step = localStorage.getItem('vangers-step') || 0;

  const paragraphs = chapter.paragraphs;

  const hintElement = document.createElement('div');
  hintElement.id = 'hint';
  element.append(hintElement);

  async function nextStep() {
    nextStepBtn.classList.add('push');
    setTimeout(() => { nextStepBtn.classList.remove('push') }, 4000);

    console.debug('Chatper: check step:', step);
    const { isValid, hint } = await chapter.checkStep(step);

    if (!isValid) {
      console.log('hintElement: ', hintElement);
      hintElement.innerHTML = hint;
      return;
    }

    if (step > paragraphs.length - 1) {
      console.info('Chapter: no more steps, chapter end');
      onChapterEnd();
    } else {
      step++;
      showStep(step);
    }
  };

  function prevStep() {
    if (step < 1) return;
    step--;
    showStep(step);
  };

  function showStep(s) {
    console.info('Chapter: Show step:', s);
    localStorage.setItem('vangers-step', s);
    messageElement.innerHTML = paragraphs[s];
    video.play();
  }

  const backgroundImg = document.createElement('img');
  backgroundImg.src = '/img/vangers/fostral.jpg';
  backgroundImg.id = 'background-img';
  element.append(backgroundImg);

  const videoContainer = document.createElement('div');
  videoContainer.id = 'video-container';
  const video = document.createElement('video');
  video.src = '/video/vangers/fostral.mp4';
  videoContainer.append(video);
  element.append(videoContainer);

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

  return element;
};
