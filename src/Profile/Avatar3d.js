export const Avatar3d = () => {
  console.log('Avatar3d()');
  setTimeout(async () => {
    var canvas = document.getElementById("avatarCanvas");

    console.log('canvas: ', canvas);
    var startRenderLoop = function (engine, canvas) {
      console.log('start render loop');
        engine.runRenderLoop(function () {
            if (sceneToRender && sceneToRender.activeCamera) {
                sceneToRender.render();
            }
        });
    }

    var engine = null;
    var scene = null;
    var sceneToRender = null;
    var createDefaultEngine = function() {
      const defaultEngine =  new BABYLON.Engine(canvas, true, {
        preserveDrawingBuffer: true,
        stencil: true,
        disableWebGL2Support: false,
      });

      console.log('created default Engine: ', defaultEngine);

      return defaultEngine;
    };

    var createScene = function () {

      // This creates a basic Babylon Scene object (non-mesh)
      var scene = new BABYLON.Scene(engine);
      scene.clearColor = BABYLON.Color3.Black();
    
      // This creates and positions a free camera (non-mesh)
      var camera = new BABYLON.ArcRotateCamera("camera1", - Math.PI / 3, 5 * Math.PI / 12, 50, new BABYLON.Vector3(0, 5, 0), scene);

      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 5, 0));
    
      // This attaches the camera to the canvas
      camera.attachControl(canvas, true);
        
      var defaultGridMaterial = new BABYLON.GridMaterial("default", scene);
      defaultGridMaterial.majorUnitFrequency = 5;
      defaultGridMaterial.gridRatio = 0.5;
      //
      var sphereMaterial = new BABYLON.StandardMaterial("Sphere Material", scene);
      sphereMaterial.diffuseTexture = new BABYLON.Texture("/img/tony.jpg", scene);
    
      //var sphere = BABYLON.Mesh.CreateSphere("sphere", 20, 9, scene);
     BABYLON.SceneLoader.ImportMeshAsync("him", "/src/Profile/Dude/", "Dude.babylon", scene).then((result) => {
        var sphere = result.meshes[0];
        sphere.scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);
                
        scene.beginAnimation(result.skeletons[0], 0, 100, true, 1.0);

        sphere.position.y = 0;
        sphere.position.x = -6;
        sphere.material = sphereMaterial; 
    });

    
      var groundMaterial = new BABYLON.GridMaterial("groundMaterial", scene);
      groundMaterial.majorUnitFrequency = 5;
      groundMaterial.minorUnitVisibility = 0.45;
      groundMaterial.gridRatio = 2;
      groundMaterial.backFaceCulling = false;
      groundMaterial.mainColor = new BABYLON.Color3(1, 1, 1);
      groundMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
      groundMaterial.opacity = 0.98;
    
      var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "textures/heightMap.png", 100, 100, 100, 0, 10, scene, false);
      ground.material = groundMaterial;
  
      var skyMaterial = new BABYLON.GridMaterial("skyMaterial", scene);
      skyMaterial.majorUnitFrequency = 6;
      skyMaterial.minorUnitVisibility = 0.43;
      skyMaterial.gridRatio = 0.5;
      skyMaterial.mainColor = new BABYLON.Color3(0, 0.05, 0.2);
      skyMaterial.lineColor = new BABYLON.Color3(0, 1.0, 1.0);	
      skyMaterial.backFaceCulling = false;
      
      var skySphere = BABYLON.Mesh.CreateSphere("skySphere", 30, 110, scene);
      skySphere.material = skyMaterial;

      BABYLON.SceneLoader.ImportMesh("", "/src/Profile/Matilda/", "scene.gltf", scene, function (meshes) {
      const scene = meshes[0];
      scene.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
});
      
      engine.runRenderLoop(function () {
        camera.alpha += 0.003;
      });	

      return scene;
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

    // Resize
    window.addEventListener("resize", function () {
      engine.resize();
    });
  });

  return `
    <canvas id="avatarCanvas"></canvas>
  `;
}
