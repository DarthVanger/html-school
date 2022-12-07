const element = document.createElement('article');
export const Katakombi = () => {
  element.innerHTML = `
    <h1>Katakombi</h1>
    <div id="background">
      <img src="/src/Katakombi/img/catacombs-6.jpeg" />
      <img src="/src/Katakombi/img/catacombs-1.jpeg" />
      <img src="/src/Katakombi/img/catacombs-2.jpeg" />
      <img src="/src/Katakombi/img/catacombs-3.jpeg" />
      <img src="/src/Katakombi/img/catacombs-4.jpeg" />
      <img src="/src/Katakombi/img/catacombs-5.jpeg" />
    </div>
  `;

  return element;
}
