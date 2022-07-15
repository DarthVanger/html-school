const svg = `
<style>
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 120vw;
    height: 120vh;
    object-fit: cover;
  }

  svg {
    position: absolute;
    width: 100vw;
    height: 100vh;
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
</style>

<body>
  <video autoplay loop muted>
    <source src="/video/space-1050p.mp4" type="video/mp4" />
  </video>
  <svg>
    <line x1="0" y1="0" x2="600" y2="600" stroke="black" />
    <text x="200" y="100">x: 0</text>
  </svg>
</body>

<script>
  // Task: on "mousemove" event change line x2 and y2
  // to event.pageX and event.pageY.
  // Also show X coordinate inside the <text> element.
</script>
`;

export default svg;
