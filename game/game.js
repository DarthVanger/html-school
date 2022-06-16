const ship = document.querySelector('img');

let x = 0;
let y = 0;

const step = 20;

document.addEventListener('keydown', e => {
  console.log('keydown');
  if (e.key == 'ArrowUp') {
    y -= step;
    ship.style.top = y;
    ship.className = 'up';
  }
  if (e.key == 'ArrowDown') {
    y += step;
    ship.style.top = y;
    ship.className = 'down';
  }
  if (e.key == 'ArrowLeft') {
    x -= step;
    ship.style.left = x;
    ship.className = 'left';
  }
  if (e.key == 'ArrowRight') {
    ship.className = 'right';
    x += step;
    ship.style.left = x;
  }
});
