export const Novoe = () => {
  const element = document.createElement('div');
  element.id = 'novoe';
  
  element.innerHTML = `
    <h2>Novoe</h2>
    <figure>
      <video controls>
        <source src="/video/devtools-performance-tutorial.mp4" type="video/mp4">
      </video>
      <figcaption>DevTools Performance Tutorial by Van4ik</figcaption>
    </figure>
    
  `;

  return element;
};
