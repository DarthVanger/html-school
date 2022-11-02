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
    
      var camera = new BABYLON.ArcRotateCamera("camera1",  - Math.PI / 3, 5 * Math.PI / 12, 50, new BABYLON.Vector3(0, 13, 0), scene);

      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 13, 0));

      light.intensity = 0.7;
    
      // This attaches the camera to the canvas
      camera.attachControl(canvas, true);
    
      var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
      //groundMaterial.majorUnitFrequency = 5;
      //groundMaterial.minorUnitVisibility = 0.45;
      //groundMaterial.gridRatio = 2;
      groundMaterial.backFaceCulling = false;
      //groundMaterial.mainColor = new BABYLON.Color3(1, 1, 1);
      //groundMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
      //groundMaterial.opacity = 0.98;

      groundMaterial.diffuseTexture = new BABYLON.Texture("/src/Profile/weed.png");
    
      var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "src/Profile/heightMap.png", 100, 82, 100, 0, 10, scene, false);
      ground.material = groundMaterial;

      const faceSize = 90;
      var face = BABYLON.Mesh.CreateGroundFromHeightMap("face", "src/Profile/faceHeight.png", faceSize, faceSize, faceSize, 0, 30, scene, false);
      face.rotation.x = -Math.PI / 2;
      face.rotation.y = Math.PI;
      face.rotation.z = 0;
      face.position.x = 0;
      face.position.y = faceSize / 2 + 12; 
      face.position.z = -103;
      var faceMaterial = new BABYLON.StandardMaterial("faceMaterial", scene);
      faceMaterial.majorUnitFrequency = 5;
      faceMaterial.minorUnitVisibility = 0.45;
      faceMaterial.gridRatio = 2;
      faceMaterial.backFaceCulling = false;
      faceMaterial.mainColor = new BABYLON.Color3(1, 1, 1);
      faceMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
      faceMaterial.opacity = 0.98;
      faceMaterial.backFaceCulling = false;
      faceMaterial.reflectionColor = new BABYLON.Color3(0, 0, 0);
      faceMaterial.diffuseTexture = new BABYLON.Texture("/img/dimon.jpg");

      //faceMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;

      face.material = faceMaterial;
  
      //var skyMaterial = new BABYLON.GridMaterial("skyMaterial", scene);
      //skyMaterial.majorUnitFrequency = 6;
      //skyMaterial.minorUnitVisibility = 0.43;
      //skyMaterial.gridRatio = 0.5;
      //skyMaterial.mainColor = new BABYLON.Color3(0, 0.05, 0.2);
      //skyMaterial.lineColor = new BABYLON.Color3(0, 1.0, 1.0);	
      //skyMaterial.backFaceCulling = false;

      //var skySphere = BABYLON.Mesh.CreateSphere("skySphere", 90, 330, scene);
      //skySphere.material = skyMaterial;

      BABYLON.SceneLoader.ImportMesh("", "/src/Profile/Matilda/", "scene.gltf", scene, function (meshes) {
        const scene = meshes[0];
        scene.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        scene.position.y = 6;
      });

      let bong;

      let boxPosition = {
        y: 18,
        height: 6,
      };

      let bongPosition = {
        y: boxPosition.y + boxPosition.height / 2,
      };

      BABYLON.SceneLoader.ImportMesh("", "/src/Profile/Bong/", "scene.gltf", scene, function (meshes) {
        const scene = meshes[0];
        scene.scaling = new BABYLON.Vector3(1, 1, 1);
        scene.position.y = bongPosition.y;
        scene.position.x = 0;
        scene.position.z = -10;
        bong = scene;
      });

      BABYLON.SceneLoader.ImportMesh("", "/src/Profile/House/", "scene.gltf", scene, function (meshes) {
        const scene = meshes[0];
        scene.scaling = new BABYLON.Vector3(50, 50, 50);
        scene.position.x = 0;
        scene.position.y = 62;
      });

      const box = BABYLON.MeshBuilder.CreateBox("box", {
        width: 6,
        height: 6,
        depth: 6,
      });

      box.position.y = boxPosition.y;
      box.position.x = 0;
      box.position.z = -10;

      var boxMaterial = new BABYLON.StandardMaterial("mat", scene);
boxMaterial.backFaceCulling = true;
      boxMaterial.reflectionTexture = new BABYLON.CubeTexture("/src/Profile/Cube/dimon", scene);
      boxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
      boxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
      boxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

      box.material = boxMaterial;

      let isBongMovingUp = true;
      engine.runRenderLoop(function () {
        camera.alpha += 0.001;
        if (bong) {

          box.rotation.y += 0.003;
          if (isBongMovingUp && bong.position.y >= bongPosition.y + 3) {
            isBongMovingUp = false;
          }

          if (bong.position.y <= bongPosition.y) {
            isBongMovingUp = true;
          }

          if (isBongMovingUp) {
            bong.position.y += 0.01;
          } else {
            bong.position.y -= 0.01;
          }
        }
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
