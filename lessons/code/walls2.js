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
    top: 300;
    left: 0;
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

  function moveShipOnClick(event) {
    x = event.pageX - 320 / 2;
    y = event.pageY - 366 / 2;
    ship.style.left = x;
    ship.style.top = y;
  }

  document.addEventListener('click', moveShipOnClick);
  document.addEventListener('mousemove', showLines);
</script>
`;
