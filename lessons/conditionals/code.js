export default `
<style>
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.1s linear;
    z-index: 1;
  }

  svg {
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: 100vh;
  }

  line {
    stroke: white;
    stroke-width: 5;
    stroke-dasharray: 12 12;
  }

  text {
    fill: white;
    stroke: white;
  }
</style>

<body>
  <img src="ship.gif" />
  <video autoplay loop muted>
    <source src="/video/space-1050p.mp4" type="video/mp4" />
  </video>
  <svg>
    <line x1="0" y1="0" x2="600" y2="600" stroke="black" />
    <text x="100" y="100">x: 0</text>
  </svg>
</body>

<script>
  const ship = document.querySelector('img');
  const video = document.querySelector('video');

  let x = 0;
  let y = 0;

  const step = 20;

  document.addEventListener('click', moveShipOnClick);

  document.addEventListener('mousemove', showLines);

  function moveShipOnClick(event) {
      x = event.pageX - 320 / 2;
      y = event.pageY - 366 / 2;
      ship.style.left = x;
      ship.style.top = y;
  }

  function showLines(event) {
      var line = document.querySelector('line');
      var text = document.querySelector('text');

      line.setAttribute('x2', event.pageX);
      line.setAttribute('y2', event.pageY);

      text.setAttribute('x', event.pageX + 20);
      text.setAttribute('y', event.pageY);
      text.textContent = 'X: ' + event.pageX;

  }
</script>
`;
