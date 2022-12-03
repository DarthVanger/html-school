import { createCamera } from './camera.js';

let pic;

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

      let slide = 0;

      const initialTruckPosition = {
        x: 400,
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
      //light.intensity = 0.7;

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

      let truckKeyFrame = 0;
      let truckAngle = 0;
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

        if (slide == 1) {
          const truckStopX = 0;
          if (truckKeyFrame == 0) {
            console.log('truckKeyFrame 0');
            if (truck.position.x >= -402) {
                truck.position.x -= 1; 
            }

            if (truck.position.x <= -400) {
              truckKeyFrame = 1;
            }
          }

          if (truckKeyFrame == 1) {
            console.log('truckKeyFrame 1');
            if (truck.position.x < truckStopX) {
              truck.position.x += 1; 
              if (truckAngle <= Math.PI) {
                truckAngle += 0.01;
                truck.addRotation(0, 0.01, 0);
              }
              if (truck.position.x >= truckStopX) {
                truckKeyFrame = 2;
              }
            }
          }

          if (truckKeyFrame == 2) {
            console.log('truckKeyFrame 2');
            if (truckAngle >= 0) {
              truckAngle -= 0.01;
              truck.addRotation(0, -0.01, 0);
            }
          }
        }

        if (slide == 2) {
          if (pic.position.y >= 60) {
            pic.position.y -= 0.5;
            light.intesity = Math.sin(Math.random());
          }
        }

        if (slide == 3) {
          if (pic.position.y >= 60) {
            pic.position.y -= 0.5;
            light.intesity = Math.sin(Math.random());
          }
        }

        if (slide == 4) {
          if (pic.position.y >= 60) {
            pic.position.y -= 0.5;
            light.intesity = Math.sin(Math.random());
          }
        }
      });

      const nextSlideBtn = document.querySelector('#next-slide-btn');
      nextSlideBtn.addEventListener('click', nextSlide);
      nextSlideBtn.addEventListener('contextmenu', e => e.preventDefault() && prevSlide());

      function nextSlide() {
        console.log('nextSlide');
        slide++;
        renderSlide(slide);
      }

      function prevSlide() {
        slide--;
        renderSlide(slide);
      }

      function renderSlide(slide) {
        console.log('rendering slide #', slide);
        if (slide == 1) {
          var colaMusic = new BABYLON.Sound("colaMusic", "/sounds/colaMusic.wav", scene, null, { autoplay: true });
        }

        if (slide == 2) {
          var picMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
          picMaterial.backFaceCulling = false;
          //picMaterial.diffuseTexture = new BABYLON.Texture("/src/Game3d/img/language-drops.png");
          picMaterial.diffuseTexture = new BABYLON.VideoTexture("video", "/video/kef.mp4", scene, true);
          pic = BABYLON.MeshBuilder.CreateGround("pic", { width: 100, height: 100});
          pic.position.y = 160;
          pic.rotation.x = -Math.PI / 2;
          pic.rotation.z = Math.PI / 2;
          pic.material = picMaterial;
        }

        if (slide == 3) {
          scene.removeMesh(pic);
          var picMaterial = new BABYLON.StandardMaterial("picMaterial", scene);
          picMaterial.backFaceCulling = false;
          picMaterial.diffuseTexture = new BABYLON.Texture("/src/Game3d/img/dimon-michigan.jpeg");
          pic = BABYLON.MeshBuilder.CreateGround("pic", { width: 100, height: 100});
          pic.position.y = 160;
          pic.rotation.x = -Math.PI / 2;
          pic.rotation.z = Math.PI / 2;
          pic.material = picMaterial;
        }

        if (slide == 4) {
          scene.removeMesh(pic);
          var picMaterial = new BABYLON.StandardMaterial("picMaterial", scene);
          picMaterial.backFaceCulling = false;
          picMaterial.diffuseTexture = new BABYLON.Texture("/src/Game3d/img/ivan-michigan.png");
          pic = BABYLON.MeshBuilder.CreateGround("pic", { width: 100, height: 100});
          pic.position.y = 160;
          pic.rotation.x = -Math.PI / 2;
          pic.rotation.z = Math.PI / 2;
          pic.material = picMaterial;
        }

        nextSlideBtn.style.display = 'none';
        setTimeout(() => {nextSlideBtn.style.display = 'block';}, 1000);
      }

      return scene;
  }


  };

  setTimeout(init);

  return `
    <canvas id="canvas"></canvas>
    <navbar>
      <div id="move-backwards-btn">
        <img src="/src/Game3d/img/arrow-down.png" />
      </div>
      <div id="next-slide-btn">
        Next
      </div>
      <div id="move-forwards-btn">
        <img src="/src/Game3d/img/arrow-up.png" />
      </div>
    </navbar>

  `;
};
