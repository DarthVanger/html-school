import { Homework42 } from '../../Homework/homeworks/Homework42.js';

export const Novoe = () => {
  const element = document.createElement('div');
  element.id = 'novoe';
  
  element.innerHTML = `
    <h2 class="h2">Novoe</h2>

    ${Homework42()}

    <figure class="figure">
      <video controls>
        <source src="/video/tipo-react.mp4" type="video/mp4">
      </video>
      <figcaption>Tipo React Tutorial By Van4ik</figcaption>
    </figure>
  `;

  return element;
};
