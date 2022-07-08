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
  <img class="ship" src="/game/ship.gif" />
</body>

<script>
  // Make ship move on click.
  // See W3Schools lesson: https://www.w3schools.com/jsref/met_document_addeventlistener.asp
</script>
`;
