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
        y: 0,
        x: 0,
        z: 50,
      };

      const camera = createCamera({scene, canvas});
      //camera.position = new BABYLON.Vector3(0, 50, 0);
      camera.minZ = 2;
      camera.setTarget(new BABYLON.Vector3(boxPosition.x, boxPosition.y, boxPosition.z));

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

      // Our built-in 'sphere' shape.
      var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

      // Move the sphere upward 1/2 its height
      sphere.position.y = 1;


      let isForwardsPressed = false;
      let isBackwardsPressed = false;

      document.body.addEventListener('click', (e) => {
        if (isForwardsPressed || isBackwardsPressed) {
          isForwardsPressed = false;
          isBackwardsPressed = false;
          return
        }

        if (e.x >= screen.width / 2) {
          isForwardsPressed = true;
          return;
        }

        if (e.x < screen.width / 2) {
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
        ground.showBoundBox = true;
      });

      let ship;
      BABYLON.SceneLoader.ImportMesh("", "/src/Scene3d/SpaceShip/", "scene.gltf", scene, function (meshes) {
        const scene = meshes[0];
        scene.scaling = new BABYLON.Vector3(10, 10, 10);
        scene.position.y = 5;
        ship = scene;
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
      });

      return scene;
  }


  };

  setTimeout(init);

  return `
    <canvas id="canvas"></canvas>
  `;
};
