console.log('app.js xuyyyyyyyy');

fps = 1;

const bullet = document.querySelector('#bullet');

let bulletX = 0;
let bulletY = 0;
let bulletWidth = 30;
let bulletHeight = 30;

// 10px per fps
const Va = 10;

// 50px per fps or
const Vx = 30;
const Vy = 40;

const point = {
  x: 300,
  y: 400,
};

// Math.hypot = Sqrt(x^2 + y^2)
const dlina = Math.hypot(point.x, point.y);
const px = point.x / dlina;
const py = point.y / dlina;

console.log(`px is:${px},py is: ${py}`)

console.log('screen with is : ', screen.width);
console.log('steps : ', point.x / Vx);
console.log('time : ', 10 / fps + 'sec');

function step() {
  bulletX += Vx;
  bulletY += Vy;
  const bottomRightCornerX = bulletX - bulletWidth;
  const bottomRightCornerY = bulletY - bulletHeight;
  bullet.style.left = bottomRightCornerX + 'px';
  bullet.style.top = bottomRightCornerY + 'px';
}

setInterval(step, 1000 / fps);

