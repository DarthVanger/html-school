export const Bong = ({ scene, y }) => BABYLON.SceneLoader.ImportMesh("", "/src/Scene3d/Bong/", "scene.gltf", scene, function (meshes) {
    const scene = meshes[0];
    scene.scaling = new BABYLON.Vector3(1, 1, 1);
    scene.position.y = y;
    scene.position.x = 0;
    scene.position.z = -10;
  });
