export default `
<style>
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    background: #202026;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 120vw;
    height: 120vh;
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
    z-index: 1;
    width: 100vw;
    height: 100vh;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  line {
    stroke: white;
    stroke-width: 5;
    stroke-dasharray: 12 12;
    animation: dash 20s linear;
  }

  text {
    fill: white;
    stroke: white;
  }

  .down {
    transform: rotate(0deg);
  }

  .left {
    transform: rotate(90deg);
  }

  .up {
    transform: rotate(180deg);
  }

  .right {
    transform: rotate(270deg);
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

  const audio = new Audio('song.webm');
  audio.volume = 0.5;

  let x = 0;
  let y = 0;

  const step = 20;

  document.addEventListener('keydown', moveShip);

  document.addEventListener('click', moveShipOnClick);

  document.addEventListener('mousemove', showLines);

  function moveShipOnClick(event) {
      x = event.pageX - 320 / 2;
      y = event.pageY - 366 / 2;
      ship.style.left = x;
      ship.style.top = y;
  }

  function moveShip(event) {

    if (event.key == 'ArrowUp') {
      y -= step;
      ship.style.top = y;
      video.style.top = -y / 5;
      ship.className = 'up';
    }

    if (event.key == 'ArrowDown') {
      y += step;
      ship.style.top = y;
      video.style.top = -y / 5;
      ship.className = 'down';
    }

    if (event.key == 'ArrowLeft') {
      x -= step;
      ship.style.left = x;
      video.style.left = -x / 5;
      ship.className = 'left';
    }

    if (event.key == 'ArrowRight') {
      x += step;
      ship.style.left = x;
      video.style.left = -x / 5;
      ship.className = 'right';
    }
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
