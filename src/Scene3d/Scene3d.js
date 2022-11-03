import { SvgSkills } from '../skills/SvgSkills.js';

export const Scene3d = (state) => {
  console.log('Scene3d()');

  const init = async () => {
    var canvas = document.getElementById("avatarCanvas");

    const skills = await fetch('/tree')
      .then(r => r.json())
      .then(r => {
        let t = {};
        t.skills = r.skills;
        t.levels = r.levels;
        t.points = r.points;
        t.categoryLevels = r.categoryLevels;
        t.lecturePoints = r.lecturePoints;
        t.questPoints = r.questPoints;
        return t;
      });

    console.log('Scene3d state: ', state);
    console.log('Scene3d skills: ', skills);
    const svg = SvgSkills({
      ...state,
      ...skills,
    });


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
        y: 10,
        x: 0,
        z: -20,
      };

      var scene = new BABYLON.Scene(engine);
      scene.clearColor = BABYLON.Color3.Black();
    
      // https://www.babylonjs-playground.com/#Y2XX5A
      var camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(0, 0, 0), scene);
      const cameraRadius = 20;

      camera.rotation.x = 0;
      camera.rotation.y = 0;
      camera.rotation.z = 0;

      camera.attachControl(canvas, true);

      camera.checkCollisions=false;

      //camera.fov = Math.PI / 2;

      // Add a light
      var light1 = new BABYLON.PointLight("light1", new BABYLON.Vector3(0,4,0), scene);
      light1.diffuse = new BABYLON.Color3(1, 0.4, 0.4);
      light1.specular = new BABYLON.Color3(0.5, 0.2, 0.2);
      light1.intensity = 1;
      light1.range = 10;

      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 13, 0));

      light.intensity = 0.7;

      const light3 = new BABYLON.HemisphericLight("light3", new BABYLON.Vector3(5, 5, 5));

      // This attaches the camera to the canvas
      camera.attachControl(canvas, true);
    
      const wallSize = 100;
      const wallNorthPosition = {
        z: -103,
        x: -4,
        y: wallSize / 2,
      };

      var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
      groundMaterial.backFaceCulling = false;
      groundMaterial.diffuseTexture = new BABYLON.Texture("/src/Scene3d/weed.png");
      var ground = BABYLON.Mesh.CreateGround("ground", 100, 150, 100, 0, 10, scene );
      ground.position.z = -20;
      ground.material = groundMaterial;

      const harvardSize = 100;

      const wallSouthPosition = {
        z: 53,
        x: -4,
        y: harvardSize / 2,
      };

      var harvard = BABYLON.Mesh.CreateGroundFromHeightMap("harvard", "src/Scene3d/harvardHeight.png", harvardSize, harvardSize, harvardSize, 0, 30, scene, false);
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
      harvardMaterial.diffuseTexture = new BABYLON.Texture("/src/Scene3d/harvard.jpeg");
      harvardMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

      harvard.material = harvardMaterial;

      var wall = BABYLON.Mesh.CreateGroundFromHeightMap("wall", "src/Scene3d/wallHeight.png", wallSize, wallSize, wallSize, 0, 30, scene, false);
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
      wallMaterial.reflectionColor = new BABYLON.Color3(0, 0, 0);
      wallMaterial.diffuseTexture = new BABYLON.Texture("/src/Scene3d/wall.jpeg");
      wallMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

      var oneMesh = BABYLON.MeshBuilder.CreateGround("one", {width: 100, height: 100}, scene);
      oneMesh.position.y = 25;
      oneMesh.position.x = 48;
      oneMesh.position.z = -5;
      oneMesh.rotation.x = BABYLON.Tools.ToRadians(270);
      oneMesh.rotation.y = BABYLON.Tools.ToRadians(90);
      oneMesh.material = new BABYLON.StandardMaterial("oneMaterial", scene);
      ground.material.backFaceCulling = false; // So the material can also be seen from behind


      var oneSVGString = '<?xml version="1.0" encoding="UTF-8"?>' + svg;
      console.log('oneSVGString: ', oneSVGString);
      var oneSVGBlob = new Blob([oneSVGString], {"type":'image/svg+xml'});
      var oneSVGURL = URL.createObjectURL(oneSVGBlob);
      var oneTexture = new BABYLON.Texture(oneSVGURL, scene); // or you can just load the SVG as a file normally :v
      console.log('oneTexture: ', oneTexture);
      oneTexture.hasAlpha = true; // enables transparency
      oneMesh.material.diffuseTexture = oneTexture;
      oneMesh.material.backFaceCulling = false;
      oneMesh.material.mainColor = new BABYLON.Color3(1, 1, 1);
      oneMesh.material.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
      oneMesh.material.reflectionColor = new BABYLON.Color3(0, 0, 0);
      oneMesh.material.specularColor = new BABYLON.Color3(0, 0, 0);

      BABYLON.SceneLoader.ImportMesh("", "/src/Scene3d/Matilda/", "scene.gltf", scene, function (meshes) {
        const scene = meshes[0];
        scene.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        scene.position.y = 0;
      });

      let bong;

      let bongPosition = {
        y: 18,
      };

      BABYLON.SceneLoader.ImportMesh("", "/src/Scene3d/Bong/", "scene.gltf", scene, function (meshes) {
        const scene = meshes[0];
        scene.scaling = new BABYLON.Vector3(1, 1, 1);
        scene.position.y = bongPosition.y;
        scene.position.x = 0;
        scene.position.z = -10;
        bong = scene;
      });

      BABYLON.SceneLoader.ImportMesh("", "/src/Scene3d/House/", "scene.gltf", scene, function (meshes) {
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
      box.rotation.y = 0;
      box.rotation.x = 0;
      box.rotation.z = 0;
      camera.position.y = boxPosition.y;
      camera.position.x = boxPosition.x;
      camera.position.z = boxPosition.z;

      var boxMaterial = new BABYLON.StandardMaterial("mat", scene);
boxMaterial.backFaceCulling = true;
      boxMaterial.reflectionTexture = new BABYLON.CubeTexture("/src/Scene3d/Cube/dimon", scene);
      boxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
      boxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
      boxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

      box.material = boxMaterial;

      let isBongMovingUp = true;
      engine.runRenderLoop(function () {
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
      if (e.keyCode == 87) { isWPressed = false; }
      if (e.keyCode == 65) { isAPressed = false; }
      if (e.keyCode == 83) { isSPressed = false; }
      if (e.keyCode == 68) { isDPressed = false; }
      if (e.key == "q") { isQPressed = false; }
      if (e.key == "e") { isEPressed = false; }
    });

      scene.registerBeforeRender (() => {
        if (!scene.isReady()){return;}

        if (!(isWPressed || isSPressed || isQPressed || isEPressed || isAPressed || isDPressed)) {
          return;
        }

        let phi = camera.rotation.y;
        let theta = camera.rotation.x + Math.PI / 2;
        var playerSpeed = 0.5;
        const r = playerSpeed;

        var x = r*parseFloat(Math.sin(phi) * Math.sin(theta));
        var z = r*parseFloat(Math.cos(phi) * Math.sin(theta));
        var y = r*parseFloat(Math.cos(theta));

        const cameraRotStep = 0.05;

        if (isWPressed==true) {
          var forwards = new BABYLON.Vector3(x, y, z);
          box.moveWithCollisions(forwards);
        }

        if (isSPressed==true) {
          var backwards = new BABYLON.Vector3(-x, -y, -z);
          box.moveWithCollisions(backwards);
        }

        if (isQPressed==true) {
          box.addRotation(-0.01,0,0);
          camera.rotation.x -= cameraRotStep;
        }

        if (isEPressed==true) {
          box.addRotation(0.01, 0, 0);
          camera.rotation.x += cameraRotStep;
        }

        if (isAPressed==true) {
          box.addRotation(0,-0.01,0);
          camera.rotation.y -= cameraRotStep;
        }

        if (isDPressed==true) {
          box.addRotation(0,0.01,0);
          camera.rotation.y += cameraRotStep;
        }

        phi = camera.rotation.y;
        theta = camera.rotation.x + Math.PI / 2;

        var camX = box.position.x - cameraRadius * parseFloat(Math.sin(phi) * Math.sin(theta));
        var camZ = box.position.z - cameraRadius * parseFloat(Math.cos(phi) * Math.sin(theta));
        var camY = box.position.y - cameraRadius * parseFloat(Math.cos(theta));

        camera.position.x = camX;
        camera.position.y = camY;
        camera.position.z = camZ;
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
  }

  setTimeout(init);

  return `
    <canvas id="avatarCanvas"></canvas>
  `;
};
