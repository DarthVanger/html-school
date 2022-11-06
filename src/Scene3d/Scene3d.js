import { SvgSkills } from '../skills/SvgSkills.js';
import { SvgProfile } from '../Profile/SvgProfile.js';

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

    const skillsSvg = SvgSkills({
      ...state,
      ...skills,
    });

    const profileSvg = SvgProfile({
      ...state,
      ...skills,
      is3d: true,
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

      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 13, 0));

      light.intensity = 0.7;

      const light3 = new BABYLON.HemisphericLight("light3", new BABYLON.Vector3(0, 0, -1));

      // This attaches the camera to the canvas
      camera.attachControl(canvas, true);
    
      const wallSize = 100;
      const wallNorthPosition = {
        z: -83,
        x: -4,
        y: wallSize  / 2 + 10,
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
        y: harvardSize / 2 + 15,
      };

      var harvard = BABYLON.Mesh.CreateGroundFromHeightMap("harvard", "src/Scene3d/harvardHeight.png", harvardSize, harvardSize + 30, harvardSize, 0, 30, scene, false);
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

      var wall = BABYLON.Mesh.CreateGroundFromHeightMap("wall", "src/Scene3d/wallHeight.png", wallSize, wallSize + 17, wallSize, 0, 30, scene, false);
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
      wallMaterial.diffuseTexture = new BABYLON.Texture("/src/Scene3d/wall.jpeg");
      wallMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

      wall.material = wallMaterial;


      var skills = BABYLON.MeshBuilder.CreateGround("one", {width: 120, height: 120}, scene);
      skills.position.y = 45;
      skills.position.x = 48;
      skills.position.z = -25;
      skills.rotation.x = BABYLON.Tools.ToRadians(270);
      skills.rotation.y = BABYLON.Tools.ToRadians(90);
      skills.material = new BABYLON.StandardMaterial("oneMaterial", scene);
      skills.material.backFaceCulling = false; // So the material can also be seen from behind

      svgTexture(skills, skillsSvg);

      var profile = BABYLON.MeshBuilder.CreateGround("profile", {width: 120, height: 120}, scene);
      profile.position.y = 45;
      profile.position.x = -49;
      profile.position.z = -25;
      profile.rotation.x = BABYLON.Tools.ToRadians(270);
      profile.rotation.y = BABYLON.Tools.ToRadians(90);
      profile.rotation.z = BABYLON.Tools.ToRadians(180);
      profile.material = new BABYLON.StandardMaterial("profileMat", scene);
      profile.material.backFaceCulling = false; // So the material can also be seen from behind
      svgTexture(profile, profileSvg);

      function svgTexture(shape, svgString) {
        var oneSVGString = '<?xml version="1.0" encoding="UTF-8"?>' + svgString;
        var oneSVGBlob = new Blob([oneSVGString], {"type":'image/svg+xml'});
        var oneSVGURL = URL.createObjectURL(oneSVGBlob);
        var texture = new BABYLON.Texture(oneSVGURL, scene); // or you can just load the SVG as a file normally :v
        texture.hasAlpha = true; // enables transparency
        shape.material.diffuseTexture = texture;
        shape.material.backFaceCulling = false;
        shape.material.mainColor = new BABYLON.Color3(1, 1, 1);
        shape.material.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
        shape.material.reflectionColor = new BABYLON.Color3(0, 0, 0);
        shape.material.specularColor = new BABYLON.Color3(0, 0, 0);
      }

      BABYLON.SceneLoader.ImportMesh("", "/src/Scene3d/Matilda/", "scene.gltf", scene, function (meshes) {
        const scene = meshes[0];
        scene.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        scene.position.y = 0;
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

      let bong;

      let bongPosition = {
        y: 12,
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
        scene.position.x = 0;
        scene.position.y = 62;
        scene.scaling = new BABYLON.Vector3(50, 50, 50);
      });

      camera.position.y = boxPosition.y;
      camera.position.x = boxPosition.x;
      camera.position.z = boxPosition.z - + cameraRadius;

      let isBongMovingUp = true;
      engine.runRenderLoop(function () {
        if (bong) {

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
        if (e.key == "w"){isWPressed=true;}
        if (e.key == "a"){isAPressed=true;}
        if (e.key == "s"){isSPressed = true;}
        if (e.key == "d"){isDPressed=true;}
        if (e.key == "q") { isQPressed = true; }
        if (e.key == "e") { isEPressed = true; }
    });

    document.addEventListener('keyup', (e) => {
      if (e.key == "w") { isWPressed = false; }
      if (e.key == "a") { isAPressed = false; }
      if (e.key == "s") { isSPressed = false; }
      if (e.key == "d") { isDPressed = false; }
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
        const shipRotStep = cameraRotStep;

        if (isWPressed==true) {
          var forwards = new BABYLON.Vector3(x, y, z);
          ship.moveWithCollisions(forwards);
        }

        if (isSPressed==true) {
          var backwards = new BABYLON.Vector3(-x, -y, -z);
          ship.moveWithCollisions(backwards);
        }

        if (isQPressed==true) {
          ship.addRotation(-shipRotStep,0,0);
          camera.rotation.x -= cameraRotStep;
        }

        if (isEPressed==true) {
          ship.addRotation(shipRotStep,0,0);
          camera.rotation.x += cameraRotStep;
        }

        if (isAPressed==true) {
          ship.addRotation(0,-shipRotStep,0);
          camera.rotation.y -= cameraRotStep;
        }

        if (isDPressed==true) {
          ship.addRotation(0,shipRotStep,0);
          camera.rotation.y += cameraRotStep;
        }

        phi = camera.rotation.y;
        theta = camera.rotation.x + Math.PI / 2;

        var camX = ship.position.x - cameraRadius * parseFloat(Math.sin(phi) * Math.sin(theta));
        var camZ = ship.position.z - cameraRadius * parseFloat(Math.cos(phi) * Math.sin(theta));
        var camY = ship.position.y - cameraRadius * parseFloat(Math.cos(theta));

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
