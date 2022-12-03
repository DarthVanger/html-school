export const createCamera = ({scene, canvas}) => {
  return deviceOrientationCamera({scene, canvas});
  //return universalCamera({scene, canvas});
  //return flyCamrea({scene, canvas});
};

const deviceOrientationCamera = ({scene, canvas}) => {
  // Parameters : name, position, scene
  var camera = new BABYLON.DeviceOrientationCamera("DevOr_camera", new BABYLON.Vector3(0, 0, 0), scene);

  // Targets the camera to a particular position
  //camera.setTarget(new BABYLON.Vector3(0, 0, -10));
  //camera.setTarget(new BABYLON.Vector3(0, 0, -10));

  // Sets the sensitivity of the camera to movement and rotation
  camera.angularSensibility = 10;
  camera.moveSensibility = 10;

  // Attach the camera to the canvas
  camera.attachControl(canvas, true);

  return camera;
}

const universalCamera = ({scene, canvas}) => {
  // Parameters : name, position, scene
  var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);

  // Targets the camera to a particular position. In this case the scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // Attach the camera to the canvas
  camera.attachControl(canvas, true);

  return camera;
}

const flyCamrea = ({scene, canvas}) => {
  // Parameters: name, position, scene
  var camera = new BABYLON.FlyCamera("FlyCamera", new BABYLON.Vector3(0, 5, -10), scene);

  // Airplane like rotation, with faster roll correction and banked-turns.
  // Default is 100. A higher number means slower correction.
  camera.rollCorrect = 10;
  // Default is false.
  camera.bankedTurn = true;
  // Defaults to 90° in radians in how far banking will roll the camera.
  camera.bankedTurnLimit = Math.PI / 2;
  // How much of the Yawing (turning) will affect the Rolling (banked-turn.)
  // Less than 1 will reduce the Rolling, and more than 1 will increase it.
  camera.bankedTurnMultiplier = 1;

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  return camera;
};
