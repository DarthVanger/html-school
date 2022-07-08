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

  .plasma {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    filter: hue-rotate(200deg);
    top: 300;
    left: 120;
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

  var plasmaY = 300;
  var clickY;
  var intervalId;

  function fire(event) {
    clickX = event.pageX;
    console.log('clickX: ', clickX);
  }

  document.addEventListener('click', fire);
</script>
`;
