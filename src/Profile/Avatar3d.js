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

      let boxSize = 4;
      let boxPosition = {
        y: 20,
        x: 0,
        z: -20,
      };

      // This creates a basic Babylon Scene object (non-mesh)
      var scene = new BABYLON.Scene(engine);
      scene.clearColor = BABYLON.Color3.Black();
    
      // https://www.babylonjs-playground.com/#Y2XX5A
       var camera = new BABYLON.FollowCamera("camera", new BABYLON.Vector3(0, 0, 0), scene);

      // The goal distance of camera from target
      camera.radius = boxSize + 10;
      // The goal height of camera above local origin (centre) of target
      camera.heightOffset = 10;
      //Acceleration of camera in moving from current to goal position
      camera.cameraAcceleration = 0.05;
      //The speed at which acceleration is halted 
      camera.maxCameraSpeed = 10;
      // This attaches the camera to the canvas
      camera.attachControl(canvas, true);

      // turn off camera collisions
      camera.checkCollisions=false;

      //camera.fov = Math.PI / 2;

       // Add a light
      var light1 = new BABYLON.PointLight("light1", new BABYLON.Vector3(0,4,0), scene);
      light1.diffuse = new BABYLON.Color3(1, 0.4, 0.4);
      light1.specular = new BABYLON.Color3(0.5, 0.2, 0.2);
      light1.intensity = 4;
      light1.range = 10;

      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 13, 0));

      light.intensity = 0.7;
    

    // gravity
    scene.gravity = new BABYLON.Vector3(0, -9.81, 0);

    // no gravity for camera
    camera.applyGravity = false;
    
    // camera elipsoid
    camera.ellipsoid = new BABYLON.Vector3(0.2, 0.2, 0.2);

    const wallSize = 100;
    const wallNorthPosition = {
      z: -103,
      x: -4,
      y: wallSize / 2,
    };

   // walls
//    var wallNorth=BABYLON.MeshBuilder.CreatePlane("wallNorth", {width: wallSize, height: wallSize, subdivsions: 1}, scene);
//    wallNorth.position.y = wallNorthPosition.y;
//    wallNorth.position.x = wallNorthPosition.x;
//    wallNorth.position.z = wallNorthPosition.z;
//    //wallNorth.addRotation(0, Math.PI, 0);
//    //wallNorth.material=groundMaterial;
//    wallNorth.checkCollisions=true;

    //var wallSouth=BABYLON.MeshBuilder.CreatePlane("wallSouth", {width: 16, height: 2.7, subdivsions: 1}, scene);
    //wallSouth.position.y=1.35;
    //wallSouth.position.x=8;
    //wallSouth.position.z=0;
    //wallSouth.addRotation(0, Math.PI/2, 0);
    //wallSouth.material=wall_mat;
    //wallSouth.checkCollisions=true;
    
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

      const harvardSize = 100;

      const wallSouthPosition = {
        z: 53,
        x: -4,
        y: harvardSize / 2,
      };

      var harvard = BABYLON.Mesh.CreateGroundFromHeightMap("harvard", "src/Profile/harvardHeight.png", harvardSize, harvardSize, harvardSize, 0, 30, scene, false);
      harvard.rotation.x = -Math.PI / 2;
      //harvard.rotation.y = Math.PI;
      harvard.rotation.z = 0;
      harvard.position.x = wallSouthPosition.x;
      harvard.position.y = wallSouthPosition.y;
      harvard.position.z = wallSouthPosition.z;
      var harvardMaterial = new BABYLON.StandardMaterial("harvardMaterial", scene);
      harvardMaterial.majorUnitFrequency = 5;
      harvardMaterial.minorUnitVisibility = 0.45;
      harvardMaterial.gridRatio = 2;
      harvardMaterial.backFaceCulling = false;
      harvardMaterial.mainColor = new BABYLON.Color3(1, 1, 1);
      harvardMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
      harvardMaterial.opacity = 0.98;
      harvardMaterial.backFaceCulling = false;
      harvardMaterial.reflectionColor = new BABYLON.Color3(0, 0, 0);
      harvardMaterial.diffuseTexture = new BABYLON.Texture("/src/Profile/harvard.jpeg");
      harvardMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

      harvard.material = harvardMaterial;

      var wall = BABYLON.Mesh.CreateGroundFromHeightMap("wall", "src/Profile/wallHeight.png", wallSize, wallSize, wallSize, 0, 30, scene, false);
      wall.rotation.x = -Math.PI / 2;
      wall.rotation.y = Math.PI;
      wall.rotation.z = 0;
      wall.position.x = wallNorthPosition.x;
      wall.position.y = wallNorthPosition.y; 
      wall.position.z = wallNorthPosition.z;
      var wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
      wallMaterial.majorUnitFrequency = 5;
      wallMaterial.minorUnitVisibility = 0.45;
      wallMaterial.gridRatio = 2;
      wallMaterial.backFaceCulling = false;
      wallMaterial.mainColor = new BABYLON.Color3(1, 1, 1);
      wallMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
      wallMaterial.opacity = 0.98;
      wallMaterial.backFaceCulling = false;
      wallMaterial.reflectionColor = new BABYLON.Color3(0, 0, 0);
      wallMaterial.diffuseTexture = new BABYLON.Texture("/src/Profile/wall.jpeg");
      wallMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

      wall.material = wallMaterial;
  
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


      let bongPosition = {
        y: 18,
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
        width: boxSize,
        height: boxSize,
        depth: boxSize,
      });

      box.position.y = boxPosition.y;
      box.position.x = boxPosition.x;
      box.position.z = boxPosition.z; 
      box.rotation.y = Math.PI;

      var boxMaterial = new BABYLON.StandardMaterial("mat", scene);
boxMaterial.backFaceCulling = true;
      boxMaterial.reflectionTexture = new BABYLON.CubeTexture("/src/Profile/Cube/dimon", scene);
      boxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
      boxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
      boxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

      box.material = boxMaterial;

      let isBongMovingUp = true;
      engine.runRenderLoop(function () {
        //camera.alpha += 0.001;
        if (bong) {

          //box.rotation.y += 0.003;
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


   var playerMesh=[];

    // Player "character" version 1. They're a bit boxy, but it works.
    var playerMesh = BABYLON.Mesh.CreateBox("playerMesh", 5.0, scene);
    playerMesh.position.x=0;
    playerMesh.position.z=0;
    playerMesh.position.y=1;
    //playerMesh.checkCollisions=true;
    //camera.lockedTarget = playerMesh;
    camera.lockedTarget = box;

    // WASD control of Player "character".
    let isWPressed = false;
    let isAPressed = false;
    let isSPressed = false;
    let isDPressed = false;
    let isQPressed = false;
    let isEPressed = false;

    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 87){isWPressed=true;}
        if (e.keyCode == 65){isAPressed=true;}
        if (e.keyCode == 83){isSPressed = true;}
        if (e.keyCode == 68){isDPressed=true;}
        if (e.key == "q") { isQPressed = true; }
        if (e.key == "e") { isEPressed = true; }
    });

    document.addEventListener('keyup', (e) => {
      console.log('e: ', e);
      if (e.keyCode == 87) { isWPressed = false; }
      if (e.keyCode == 65) { isAPressed = false; }
      if (e.keyCode == 83) { isSPressed = false; }
      if (e.keyCode == 68) { isDPressed = false; }
      if (e.key == "q") { isQPressed = false; }
      if (e.key == "e") { isEPressed = false; }
    });

      scene.registerBeforeRender (() => {
        if (!scene.isReady()){return;}

        const phi = box.rotation.y;
        const theta = box.rotation.x;
        var playerSpeed=0.2;
        const r =  playerSpeed;

        var x = r*parseFloat(Math.sin(phi) * Math.sin(theta));
        var z = r*parseFloat(Math.cos(phi) * Math.sin(theta));
        var y = r*parseFloat(Math.cos(theta));

        if (isWPressed || isSPressed) {

          if (isWPressed==true) {
            //box.locallyTranslate(new BABYLON.Vector3(0, 0, 0.1));
            var forwards = new BABYLON.Vector3(-x, y, -z);
            box.moveWithCollisions(forwards);
          }

          if (isSPressed==true) {
            //box.locallyTranslate(new BABYLON.Vector3(0, 0, -0.1));
            var backwards = new BABYLON.Vector3(x, y, z);
            box.moveWithCollisions(backwards);
          }
        }

        if (isQPressed==true) {
          box.addRotation(-0.05,0,0);
        }

        if (isEPressed==true) {
          box.addRotation(0.05, 0, 0);
        }

        if (isAPressed==true) {
          box.addRotation(0,-0.05,0);
        }

        if (isDPressed==true) {
          box.addRotation(0,0.05,0);
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
