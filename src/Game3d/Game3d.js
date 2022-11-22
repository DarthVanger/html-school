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

      // This creates and positions a free camera (non-mesh)
      var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

      // Enable mouse wheel inputs.
      camera.inputs.addMouseWheel();
      
      // Change the mouse wheel Y axis to controll the cameras height in the scene:
      //camera.inputs.attached["mousewheel"].wheelYMoveRelative = BABYLON.Coordinate.Y;
      
      // Revese the mouse wheel Y axis direction:
      // camera.inputs.attached["mousewheel"].wheelPrecisionY = -1;

      // This targets the camera to scene origin
      camera.setTarget(BABYLON.Vector3.Zero());

      // This attaches the camera to the canvas
      camera.attachControl(true);

      // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
      var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

      // Default intensity is 1. Let's dim the light a small amount
      light.intensity = 0.7;

      // Our built-in 'sphere' shape.
      var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

      // Move the sphere upward 1/2 its height
      sphere.position.y = 1;

      // Our built-in 'ground' shape.
      var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

      BABYLON.SceneLoader.ImportMesh("", "/3d-models/terrain/", "scene.gltf", scene, function (meshes) {
        const scene = meshes[0];
        scene.scaling = new BABYLON.Vector3(1, 1, 1);
        scene.position.y = 0;
        scene.position.x = 0;
        scene.position.z = 0;
      });

      return scene;
  }


  };

  setTimeout(init);

  return `
    <canvas id="canvas"></canvas>
  `;
};
