const joystickStatusEl = document.querySelector('#joystick-status');
const joystickInfoEl = document.querySelector('#joystick-info');
let xdog = 0;
let xcat = 0;

/**
 * When we press any button on Joystick, it "connects" to the website.
 * This function will be called when we press any button for the first time
 * on this website.
 * 
 * handleGamepadConnect() prints info about the connected gamepad: 
 * - gamepad.id (something like "XBoX DualShock bla bla")
 * - gamepad.buttons.length (number of button on the joystick, for example 18 on PlayStation or XBoX joystick)
 * - gamepad.axes.length (number of joystick axes. On PlayStation or XBoX it's 4)
 */
function handleGamepadConnect(event) {
  const gamepad = event.gamepad;

  document.querySelector('#joystick-status').innerHTML += `
    <p>Gamepad connected: ${gamepad.id}.</p>
    <p>The joystick has ${gamepad.buttons.length} buttons and ${gamepad.axes.length} axes.</p>
  `;
}

/**
 * step() is called every fps (every 60 seconds).
 * It reads buttons 6 and 7 from two gamepads.
 * Button 6 is LR (left bottom joystick button).
 * Button 7 is RR (right bottom joystick button).
 * These buttons feel the strength of press.
 * gamepad.buttons[6].value is a number from 0 to 1,
 * it shows with how much force the button is pressed.
 * 
 * We take the button force number and use it to change
 * the x coordinate of the dog picture :)
 * Since step() is called 60 times per sec, the picture moves very fast.
 * So we divide the button value by 100.
 * So when button is fully pressed, it's value is 1,
 * and dog pic will move 1/100 pixel each fps.
 *
 * navigator.getGamepads()[1] is the 2nd joystick,
 * and we use it's button[6] to move the cat pic :)
 *
 * gamepad.button[6] is used to move forward,
 * gamepead.button[7] is used to move backward.
 *
 */
function step() {
  const gamepad0 = navigator.getGamepads()[0];
  const gamepad1 = navigator.getGamepads()[1];

  const kurok0 = gamepad0.buttons[6];
  const kurok01 = gamepad0.buttons[7];
  const kurok1 = gamepad1.buttons[6];
  const kurok11 = gamepad1.buttons[7];

  joystickInfoEl.innerHTML = `Kurok 0 zna4enie: ${kurok0.value}<br>`;
  joystickInfoEl.innerHTML += `Kurok 1 zna4enie: ${kurok1.value}`;
  let dogimg = document.querySelector('#dog');
  let catimg = document.querySelector('#cat');
  xdog += kurok0.value / 100;
  xcat += kurok1.value / 100;
  xdog -= kurok01.value / 100;
  xcat -= kurok11.value / 100;
  dogimg.style.left = xdog + 'px';
  catimg.style.left = xcat + 'px';
}

window.addEventListener("gamepadconnected", handleGamepadConnect);

/**
 * "gamepadconnected" event is fired only when user visit website the first time.
 * If user then refreshes the browser tab, the gamepad is already connected.
 * So the "gamepadconnected" event is not fired, and we need to call the
 * handleGamepadConnect() function manually.
 * 
 * We check if gamepad is already connected by getting the first joystick:
 * gamepad = navigator.getGamepads()[0]
 * If it is not undefined, then it is already connected, and we need to call
 * handleGamepadConnect() function manually.
 */ 
gamepad = navigator.getGamepads()[0];
if (gamepad) {
  handleGamepadConnect(gamepad);
}

/**
 * Call step() function 60 times per second.
 */
const fps = 60;
setInterval(step, 1000 / fps);
