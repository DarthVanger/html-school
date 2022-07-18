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
    transform: rotate(-90deg);
  }

  .plasma {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    filter: hue-rotate(200deg);
    top: 140;
    left: 280;
  }
</style>

<body>
  <video autoplay loop muted>
    <source src="/video/space-1050p.mp4" type="video/mp4" />
  </video>
  <img class="ship" src="/game/ship.gif" />
  <img class="plasma" src="/img/plasma.gif" />
</body>

<script>
  var ship = document.querySelector('.ship');
  var plasma = document.querySelector('.plasma');

  var plasmaX = 280;
  var intervalId;
  var clickX;

  function movePlasma() {
    plasmaX += 5;
    plasma.style.left = plasmaX + 'px';

    if (plasmaX > screen.width) {
      clearInterval(intervalId);

      plasmaX = 280;
      plasma.style.left = plasmaX + 'px';
    }
  }

  function fire(event) {
    clickX = event.pageX;
    intervalId = setInterval(movePlasma, 50);
  }

  document.addEventListener('click', fire);
</script>
`;
