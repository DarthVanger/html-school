const ship = document.querySelector('#ship-translator');
const rotator = document.querySelector('#ship-rotator');

let x = 0;
let y = 0;

const step = 20;

document.addEventListener('keydown', e => {
  console.log('keydown');
  if (e.key == 'ArrowUp') {
    y -= step;
    ship.style.top = y;
    rotator.className = 'up';
  }
  if (e.key == 'ArrowDown') {
    y += step;
    ship.style.top = y;
    rotator.className = 'down';
  }
  if (e.key == 'ArrowLeft') {
    x -= step;
    ship.style.left = x;
    rotator.className = 'left';
  }
  if (e.key == 'ArrowRight') {
    rotator.className = 'right';
    x += step;
    ship.style.left = x;
  }
});
