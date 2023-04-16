export const Staroe = () => {
  const element = document.createElement('div');
  element.id = 'staroe';
  
  element.innerHTML = `
    <h2 class="h2">Staroe</h2>
    <figure class="figure">
      <video controls>
        <source src="/video/tipo-react.mp4" type="video/mp4">
      </video>
      <figcaption>Tipo React Tutorial By Van4ik</figcaption>
    </figure>

    <figure class="figure">
      <video controls>
        <source src="/video/devtools-performance-tutorial.mp4" type="video/mp4">
      </video>
      <figcaption>DevTools Performance Tutorial by Van4ik</figcaption>
    </figure>
    <figure class="figure">
      <video controls>
        <source src="/video/devtools-performance-tutorial-part-2.mp4" type="video/mp4">
      </video>
      <figcaption>DevTools Performance: ДРГУА ЧАСТЬ</figcaption>
    </figure>
    
  `;

  return element;
};
