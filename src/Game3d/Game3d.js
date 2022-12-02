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
    });

    var createScene = function () {
      // This creates a basic Babylon Scene object (non-mesh)
      var scene = new BABYLON.Scene(engine);

      let boxPosition = {
        y: 10,
        x: -130,
        z: -45,
      };

      const camera = createCamera({scene, canvas});
      //camera.position = new BABYLON.Vector3(0, 50, 0);
      camera.minZ = 1;
      const camDist = 10;
      camera.position.x = boxPosition.x;
      camera.position.y = boxPosition.y;
      camera.position.z = boxPosition.z + camDist;
      camera.rotation.y = Math.PI / 2 - 0.5;
      camera.rotation.x = -0.2;

      const assumedFramesPerSecond = 60;
      const earthGravity = -9.81;
      scene.gravity = new BABYLON.Vector3(0, earthGravity / assumedFramesPerSecond, 0);

      camera.applyGravity = true;

      camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);

      scene.collisionsEnabled = true;
      camera.checkCollisions = true;

      // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
      var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

      // Default intensity is 1. Let's dim the light a small amount
      light.intensity = 0.7;


      let isForwardsPressed = false;
      let isBackwardsPressed = false;

      document.body.addEventListener('click', (e) => {
        if (isForwardsPressed || isBackwardsPressed) {
          isForwardsPressed = false;
          isBackwardsPressed = false;
          return
        }

        if (e.x >= screen.width / 2 && e.y >= screen.height / 2) {
          isForwardsPressed = true;
          return;
        }

        if (e.x < screen.width / 2 && e.y >= screen.height / 2) {
          isBackwardsPressed = true;
          return;
        }
      });

      let ground;
      BABYLON.SceneLoader.ImportMesh("", "/3d-models/terrain/", "scene.gltf", scene, function (meshes) {
        ground = meshes[0];
        ground.scaling = new BABYLON.Vector3(1, 1, 1);
        ground.position.y = 0;
        ground.position.x = 0;
        ground.position.z = 0;
        ground.checkCollisions = true;
      });

      const truckStart = {
        x: 0,
        y: 50,
        z: 20,
      };

      let truck;
      BABYLON.SceneLoader.ImportMesh("", "/3d-models/truck/", "scene.gltf", scene, function (meshes) {
        truck = meshes[0];
        truck.scaling = new BABYLON.Vector3(0.2, 0.2, 0.2);
        truck.position.y = truckStart.y;
        truck.position.x = truckStart.x;
        truck.position.z = truckStart.z;
        truck.addRotation(0.5, 0, 0);
      });

      let ship;
      BABYLON.SceneLoader.ImportMesh("", "/src/Scene3d/SpaceShip/", "scene.gltf", scene, function (meshes) {
        const scene = meshes[0];
        scene.scaling = new BABYLON.Vector3(10, 10, 10);
        scene.position.y = 5;
        ship = scene;
        const camDist = 2;
        ship.position.y = boxPosition.y;
        ship.position.x = boxPosition.x;
        ship.position.z = boxPosition.z;
        ship.addRotation(0, Math.PI, 0);
      });

      scene.onBeforeRenderObservable.add(() => {
        //if (ground.intersectsMesh(hitBox) && scene.getMeshByName("car").intersectsMesh(hitBox)) {
        //    return;
        //}
        //camera.rotation.x += 0.01;
        //
        let phi = camera.rotation.y;
        let theta = camera.rotation.x + Math.PI / 2;
        var playerSpeed = 0.5;
        const r = playerSpeed;

        var x = r*parseFloat(Math.sin(phi) * Math.sin(theta));
        var z = r*parseFloat(Math.cos(phi) * Math.sin(theta));
        var y = r*parseFloat(Math.cos(theta));

        const cameraRotStep = 0.05;
        const shipRotStep = cameraRotStep;

        
        if (isForwardsPressed) {
          var forwards = new BABYLON.Vector3(x, y, z);
          ship.moveWithCollisions(forwards);
          camera.position.x += x;
          camera.position.y += y;
          camera.position.z += z;
        }

        if (isBackwardsPressed) {
          var backwards = new BABYLON.Vector3(-x, -y, -z);
          ship.moveWithCollisions(backwards);
          camera.position.x -= x;
          camera.position.y -= y;
          camera.position.z -= z;
        }

        const deg = 10;

        const iframe = getIframe();

        const rot = {
          x: camera.rotation.x / Math.PI * 180 + 5,
          y: camera.rotation.y / Math.PI * 180 + 60,
          z: camera.rotation.z / Math.PI * 180 + 10,
        };

        const cam = {
          x: camera?.position.x * 30 || 0,
          y: camera?.position.y * 30 || 0,
          z: (camera?.position.z * 30) || 0,
        };

        const cameraOriginDistance = Math.hypot(boxPosition - cam.x, boxPosition - cam.y, boxPosition - cam.z) || 30;
        const R = cameraOriginDistance;
        console.log("R: ", R);

        const shift = {
          x: 1500,
          y: -300,
          z: 0,
        };

        const pos = {
          x: R * Math.sin(camera.rotation.y) * 10 + shift.x,
          y: R * Math.sin(camera.rotation.x) * 10 + shift.y,
          z: cam.z + shift.z,
        }

        console.log('pos: ', pos);
        iframe.style.transform = '';
        iframe.style.transform += `perspective(500px)`;
        iframe.style.transform += `translate3d(${-pos.x}px, ${-pos.y}px, ${pos.z}px)`;
        iframe.style.transform += `rotate3d(1, 0, 0, ${rot.x}deg)`;
        iframe.style.transform += `rotate3d(0, 1, 0, ${rot.y}deg)`;
        iframe.style.transform += `rotate3d(0, 0, 1, ${rot.z}deg)`;
        //iframe.style.transform += `translate3d(0, 0, ${pos.z}px)`;
        //iframe.style.transform += ` perspective(${pos.y}px)`;
        //iframe.style.transform += ` perspective(${pos.y}px)`;

      });

      return scene;
  }


  };

  const getIframe = () => document.querySelector('iframe');

  setTimeout(init);

  return `
    <canvas id="canvas"></canvas>
    <iframe src="src/slides.html#lesson24-page0"width="100%" height="100%"></iframe>
  `;
};
