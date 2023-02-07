export const Video = ({src}) => {
  const element = document.createElement('video');
  element.innerHTML = `
    <source src="${src}" type="video/mp4">
  `;
  element.className = 'bg-img';
  element.volume = 0.5;

  //setTimeout(() => {
  //  element.play();
  //});

  return element;
};
