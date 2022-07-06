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

  .ship {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.1s linear;
  }

  .wall {
    position: absolute;
    top: 0;
    left: 300;
    right: 0;
    height: 100vh;
    opacity: 0.7;
    cursor: not-allowed;
  }
</style>

<body>
  <video autoplay loop muted>
    <source src="/video/space-1050p.mp4" type="video/mp4" />
  </video>
  <img class="wall" src="/img/ice.gif"/>
  <img class="ship" src="/game/ship.gif" />
</body>

<script>
  const ship = document.querySelector('.ship');
  const video = document.querySelector('video');

  let x = 0;
  let y = 0;

  const step = 20;

  document.addEventListener('click', moveShipOnClick);

  document.addEventListener('mousemove', showLines);

  function moveShipOnClick(event) {
  if (event.pageX < 200) {
      x = event.pageX - 320 / 2;
      y = event.pageY - 366 / 2;
      ship.style.left = x;
      ship.style.top = y;
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
