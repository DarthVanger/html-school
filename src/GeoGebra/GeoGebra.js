const geo = [
  `<iframe src="https://www.geogebra.org/geometry/p8hw9dc4?embed" width="800" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>
`,
  `<iframe src="https://www.geogebra.org/geometry/umerztr3?embed" width="800" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>
`,
  `<iframe src="https://www.geogebra.org/geometry/mt2hbpur?embed" width="800" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>
`
];

export const GeoGebra = () => {
  setTimeout(() => {
    document.querySelectorAll('figure').forEach((fig, idx) => {
      const btn = fig.querySelector('button');

      //const i = fig.querySelector('iframe');
      //i.style.height = '0vh';
      //i.style.transition = 'all 2s';
      btn.addEventListener('click', e => {
        e.target.remove();
        fig.innerHTML += geo[idx];
      });
    });
  });

  return `
  <h2>GeoGebra</h2>
  <figure>
    <h3>Circles - The best :))</h3>
    <button>Show GeoGebra</button>
  </figure>
  <figure>
    <h3>Circles - Johnny Edition</h3>
    <button>Show GeoGebra</button>
  </figure>
  <figure>
    <h3>Steps - Napaleon Edition :D</h3>
    <button>Show GeoGebra</button>
  </figure>
  `;
}
