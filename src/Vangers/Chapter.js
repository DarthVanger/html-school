import { ChapterCover } from './ChapterCover.js';

export const Chapter = ({ chapter, onChapterEnd }) => {
  const element = document.createElement('article');
  element.className = 'chapter';
  const storageKey = `vangers-step-${chapter.title}`;

  //element.append(ChapterCover({ chapter }));

  const title = document.createElement('h1');
  title.innerText = chapter.title;
  //element.append(title);

  let step = localStorage.getItem(storageKey) || 0;

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
    localStorage.setItem(storageKey, s);
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
  video.volume = 1;
  videoContainer.append(video);
  element.append(videoContainer);

  // create an audio context and hook up the video element as the source
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var source = audioCtx.createMediaElementSource(video);

  // create a gain node
  var gainNode = audioCtx.createGain();
  gainNode.gain.value = 3; // double the volume
  source.connect(gainNode);

  // connect the gain node to an output destination
  gainNode.connect(audioCtx.destination);


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
