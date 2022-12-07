const element = document.createElement('article');
export const Katakombi = () => {

  element.innerHTML = `
    <h1>Katakombi</h1>
    <div id="background">
    </div>
  `;

  let images = [];
  for (let i=1; i<=6; i++) {
    let img = document.createElement('img');
    let src = `/src/Katakombi/img/catacombs-${i}.jpeg`;

    img.src = src;
    images.push(img);
    element.append(img);
  }


  let isMusicPlaying = false;
  document.body.addEventListener('click', () => {
    if (!isMusicPlaying) {
      isMusicPlaying = true;
      const audio = new Audio('/video/catacombs.mp3');
      audio.play();
    }
  });

  return element;
}
