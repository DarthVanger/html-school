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
  // gamepad object is given to us inside the event object :)
  const gamepad = event.gamepad;

  document.querySelector('#joystick-status').innerHTML += `
    <p>Gamepad connected: ${gamepad.id}.</p>
    <p>The joystick has ${gamepad.buttons.length} buttons and ${gamepad.axes.length} axes.</p>
  `;

  startGame();
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
 * If you hold the button at max value,
 * the dog pic will move 60 pixels per second.
 *
 * navigator.getGamepads()[1] is the 2nd joystick,
 * and we use it's button[6] to move the cat pic :)
 *
 * gamepad.button[6] is used to move forward,
 * gamepead.button[7] is used to move backward.
 *
 */
function step() {
  // joystick #0
  const joystick0 = navigator.getGamepads()[0];

  // work with joystick only if it's connected
  if (joystick0 != null) {
    // Read kurok button values from joystick
    const dogLeftKurok = joystick0.buttons[6];
    const dogRightKurok = joystick0.buttons[7];

    joystickInfoEl.innerHTML = `Kurok 0 zna4enie: ${dogLeftKurok.value}<br>`;
    joystickInfoEl.innerHTML += `Kurok 1 zna4enie: ${dogRightKurok.value}`;

    // Update dog X coordinate based on joytsick button values
    xdog += dogLeftKurok.value;
    xdog -= dogRightKurok.value;

    // Update dog img position according to new X coddrinate
    let dogimg = document.querySelector('#dog');
    dogimg.style.left = xdog + 'px';
  }

  // joystick #1
  const joystick1 = navigator.getGamepads()[1];

  // work with joystick only if it's connected
  if (joystick1 != null) {
    // Read kurok button values from joystick
    const catLeftKurok = joystick1.buttons[6];
    const catRightKurok = joystick1.buttons[7];

    // Update cat X coordinate based on joytsick button values
    xcat += catLeftKurok.value;
    xcat -= catRightKurok.value;

    // Update cat img position according to new X coddrinate
    let catimg = document.querySelector('#cat');
    catimg.style.left = xcat + 'px';
  }
}

window.addEventListener("gamepadconnected", handleGamepadConnect);

/**
 * Call step() function 60 times per second.
 */
function startGame() {
  const fps = 60;
  setInterval(step, 1000 / fps);
}
