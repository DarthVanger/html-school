console.log('app.js xuyyyyyyyy');

const fps = 1;
const shahedVx = 10;

const shahed = document.querySelector('#shahed');
const bullet = document.querySelector('#bullet');
const circle = document.querySelector('#circle');

let shahedX = 300;
let circleX = 0;
let bulletX = 0;
let bulletY = 0;
let bulletWidth = 30;
let bulletHeight = 30;


// 10px per fps
const Va = 10;

// 50px per fps or
const Vx = 30;
const Vy = 40;

// Меняем размер клетчатого баг-граунда заданного в CSS )
// Клетка шириной и длиной нашего шага - нашей скорости)
document.body.style.backgroundSize = `${Vx}px ${Vy}px`;

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

let stepNum = 0;
function step() {
  stepNum +=1;
  shahedX += shahedVx;
  circleX += Vx;
  bulletX += Vx;
  bulletY += Vy;

  bullet.style.left = bulletX + 'px';
  bullet.style.top = bulletY + 'px';
  shahed.style.left = shahedX + 'px';

  // Calculate speed of the bullet
  const speed = Math.sqrt(Vx*Vx + Vy*Vy);
  // Calculate distance bullet traveled
  const distance = speed * stepNum;
  // Set circle radius to the distance bullet traveled
  circle.setAttribute('r', distance);
}

setInterval(step, 1000 / fps);

