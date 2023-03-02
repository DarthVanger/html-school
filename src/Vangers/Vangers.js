export const Vangers = () => {
  const element = document.createElement('section');
  element.id = 'vangers';

  document.body.className = 'vangers-page';

  let step = localStorage.getItem('vangers-step') || 0;

  const paragraphs = ;

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

  const videoContainer = document.createElement('div');
  videoContainer.id = 'video-container';
  const video = document.createElement('video');
  video.src = '/video/vangers/fostral.mp4';
  videoContainer.append(video);
  element.append(videoContainer);

  const introVid = document.createElement('video');
  introVid.id = 'intro-vid';
  introVid.src = '/video/vangers/open.mp4';
  const introVidDuration = 5000;
  const fadeDuration = 1000;
  setTimeout(() => {
      introVid.volume = 0;
  }, 4500);

  introVid.addEventListener('click', () => {
    introVid.play();
    setTimeout(() => {
      introVid.classList.add('fade-out-1s');
      setTimeout(() => {
        introVid.remove();
        playMusic();
        video.play();
      }, fadeDuration);
    }, introVidDuration);
  });
  element.append(introVid);

  return element;
};

const audio = new Audio('/video/vangers/fostral.mp3');
audio.loop = true;
audio.volume = 0.1;

const playMusic = () => {
  audio.play();
};
