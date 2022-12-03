import { createCamera } from './camera.js';

export const Game3d = (state) => {
    
  const init = async () => {
    var engine = null;
    var scene = null;
    var sceneToRender = null;
    var canvas = document.getElementById("canvas");

    var startRenderLoop = function (engine, canvas) {
      console.log('start render loop');
        engine.runRenderLoop(function () {
            if (sceneToRender && sceneToRender.activeCamera) {
                sceneToRender.render();
            }
        });
    }
    
    var createDefaultEngine = function() {
      const defaultEngine =  new BABYLON.Engine(canvas, true, {
        preserveDrawingBuffer: true,
        stencil: true,
        disableWebGL2Support: false,
      });

      console.log('created default Engine: ', defaultEngine);

      return defaultEngine;
    };

    const initFunction = async function() {
      var asyncEngineCreation = async function() {
          console.log('asyncEngineCreation()');

          try {
            const defaultEngine = createDefaultEngine();
            console.log('created default Engine: ', defaultEngine);

            return defaultEngine;
          } catch(e) {
            console.log("the available createEngine function failed. Creating the default engine instead");
            return createDefaultEngine();
          }
      }

      engine = await asyncEngineCreation();

      if (!engine) throw 'engine should not be null.';

      startRenderLoop(engine, canvas);


      scene = createScene();
    };

    initFunction().then(() => {
      sceneToRender = scene;
      setTimeout(onMount);
    });


      let isForwardsPressed = false;
      let isBackwardsPressed = false;

    const onMount = () => {
      const moveForwardsBtn = document.querySelector('#move-forwards-btn');
      const moveBackwardsBtn = document.querySelector('#move-backwards-btn');

      [moveForwardsBtn, moveBackwardsBtn].forEach(btn => {
        btn.addEventListener('contextmenu', event => {
          event.preventDefault();
        });
      });

      ['mousedown', 'touchstart'].forEach(evt => moveForwardsBtn.addEventListener(evt, () => {
        isForwardsPressed = true;
      }));

      ['mouseup', 'touchend'].forEach(evt => moveForwardsBtn.addEventListener(evt, () => {
        isForwardsPressed = false;
      }));

        ['mousedown', 'touchstart'].forEach(evt => moveBackwardsBtn.addEventListener(evt, () => {
        isBackwardsPressed = true;
      }));

      ['mouseup', 'touchend'].forEach(evt => moveBackwardsBtn.addEventListener(evt, () => {
        isBackwardsPressed = false;
      }));
    };

    var createScene = function () {
      // This creates a basic Babylon Scene object (non-mesh)
      var scene = new BABYLON.Scene(engine);

      const initialTruckPosition = {
        x: 0,
        y: 50,
        z: 30,
      };

      let initialPlayerPosition = {
        y: 10,
        x: -130,
        z: -45,
      };

      const camera = createCamera({scene, canvas});
      camera.position.x = initialPlayerPosition.x;
      camera.position.y = initialPlayerPosition.y;
      camera.position.z = initialPlayerPosition.z;
      camera.rotation.y = Math.PI / 2 - 0.5;
      camera.rotation.x = -0.2;

      const assumedFramesPerSecond = 60;
      const earthGravity = -9.81;
      scene.gravity = new BABYLON.Vector3(0, earthGravity / assumedFramesPerSecond, 0);

      //camera.applyGravity = true;

      camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);

      scene.collisionsEnabled = true;
      camera.checkCollisions = true;

      // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
      var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

      // Default intensity is 1. Let's dim the light a small amount
      light.intensity = 0.7;

      let ground;
      BABYLON.SceneLoader.ImportMesh("", "/3d-models/terrain/", "scene.gltf", scene, function (meshes) {
        ground = meshes[0];
        ground.scaling = new BABYLON.Vector3(1, 1, 1);
        ground.position.y = 0;
        ground.position.x = 0;
        ground.position.z = 0;
        ground.checkCollisions = true;
      });

      let truck;
      BABYLON.SceneLoader.ImportMesh("", "/3d-models/truck/", "scene.gltf", scene, function (meshes) {
        truck = meshes[0];
        truck.scaling = new BABYLON.Vector3(0.2, 0.2, 0.2);
        truck.position.y = initialTruckPosition.y;
        truck.position.x = initialTruckPosition.x;
        truck.position.z = initialTruckPosition.z;
        truck.addRotation(0.5, 0, 0);
      });

      scene.onBeforeRenderObservable.add(() => {
        // Have to use quaternion for DeviceOrientationCamera and camera.rotation for universalcamera)
        const cameraRot = camera?.rotationQuaternion?.toEulerAngles() || camera.rotation;
        let phi = cameraRot.y;
        let theta = cameraRot.x + Math.PI / 2;
        var playerSpeed = 0.5;
        const r = playerSpeed;

        var x = r*parseFloat(Math.sin(phi) * Math.sin(theta));
        var z = r*parseFloat(Math.cos(phi) * Math.sin(theta));
        var y = r*parseFloat(Math.cos(theta));

        if (isForwardsPressed) {
          var forwards = new BABYLON.Vector3(x, y, z);
          camera.position.x += x;
          camera.position.y += y;
          camera.position.z += z;
        }

        if (isBackwardsPressed) {
          var backwards = new BABYLON.Vector3(-x, -y, -z);
          camera.position.x -= x;
          camera.position.y -= y;
          camera.position.z -= z;
        }
      });

      return scene;
  }


  };

  setTimeout(init);

  return `
    <canvas id="canvas"></canvas>
    <navbar>
      <img src="/img/dimon.jpg" id="move-backwards-btn" />
      <img src="/img/dimon.jpg" id="move-forwards-btn" />
    </navbar>

  `;
};
