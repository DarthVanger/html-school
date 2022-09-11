export const NeuralArt = () => {
  setTimeout(() => {
    const figures = document.querySelectorAll('#neural-art figure');
    let points = [];
    figures.forEach((figure) => {
      const pointsSpan = figure.querySelector('.points');
      const p = pointsSpan ? parseInt(pointsSpan.innerHTML) : 0;
      points.push({figure, p}); 
    });

    console.log('points: ', points);

    const sortedPoints = points.sort((a, b) => b.p - a.p);
    console.log('sortedPoints: ', sortedPoints);
    const sortedFigures = sortedPoints.map(p => p.figure);
    const clones = [...figures].map(f => f.cloneNode());
    console.log('clones: ', clones);
    const grid = document.querySelector('.grid');
    figures.forEach(f => f.remove());
    sortedFigures.forEach(s => grid.append(s));
  });

  return `
    <article id="neural-art">
      <h1>NeuraL ArT</h1>
      <div class="grid">
        <figure>
          <img src="src/NeuralArt/img/dimon/bavovnyatko-1.jpg" />
          <figcaption>Dimon Da Vinci</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/dimon/bavovnyatko-2.jpg" />
          <figcaption>Dimon Da Vinci</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/johnny/concept-art-1.jpg" />
          <figcaption>Johnny Ke Nobi</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/johnny/concept-art-2.jpg" />
          <figcaption>Johnny Ke Nobi</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/johnny/fallout-1.jpg" />
          <figcaption>Johnny Ke Nobi</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/johnny/fallout-2.jpg" />
          <figcaption>Johnny Ke Nobi</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/johnny/fallout-logo-1.jpg" />
          <span class="points">3</span>
          <figcaption>Johnny Ke Nobi</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/johnny/it-school-1.jpg" />
          <span class="points">2</span>
          <figcaption>Johnny Ke Nobi</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/johnny/jedi-1.jpg" />
          <figcaption>Johnny Ke Nobi</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/johnny/jedi-2.jpg" />
          <figcaption>Johnny Ke Nobi</figcaption>
        </figure>

        <figure>
          <img src="src/NeuralArt/img/van4ik/cyberpunk-rasta-1.jpg" />
          <figcaption>Van4ik Da Vin4ik</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/van4ik/logo-cyberpunk-1.jpg" />
          <figcaption>Van4ik Da Vin4ik</figcaption>
          <span class="points">3</span>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/van4ik/logo-cyberpunk-2.jpg" />
          <span class="points">1</span>
          <figcaption>Van4ik Da Vin4ik</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/van4ik/logo-mj/01.jpg" />
          <span class="points">2</span>
          <figcaption>Van4ik Da Vin4ik</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/van4ik/logo-mj/02.jpg" />
          <span class="points">3</span>
          <figcaption>Van4ik Da Vin4ik</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/van4ik/logo-mj/03.jpg" />
          <span class="points">3</span>
          <figcaption>Van4ik Da Vin4ik</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/van4ik/logo-mj/04.jpg" />
          <span class="points">2</span>
          <figcaption>Van4ik Da Vin4ik</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/van4ik/logo-mj/05.jpg" />
          <span class="points">6</span>
          <figcaption>Van4ik Da Vin4ik</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/van4ik/logo-mj/06.jpg" />
          <span class="points">1</span>
          <figcaption>Van4ik Da Vin4ik</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/van4ik/logo-mj/07.jpg" />
          <span class="points">6</span>
          <figcaption>Van4ik Da Vin4ik</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/van4ik/logo-mj/08.jpg" />
          <span class="points">1</span>
          <figcaption>Van4ik Da Vin4ik</figcaption>
        </figure>

        <figure>
          <img src="src/NeuralArt/img/harvard-1.jpg" />
          <figcaption>Students :)</figcaption>
        </figure>
        <figure>
          <img src="src/NeuralArt/img/harvard-2.jpg" />
          <figcaption>Students :)</figcaption>
        </figure>
      </div>
    </article>
  `;
};
