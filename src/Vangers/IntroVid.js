export const IntroVid = () => {
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
        resumeMusic();
        video.play();
      }, fadeDuration);
    }, introVidDuration);
  });

  return introVid;
};
