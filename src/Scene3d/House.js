BABYLON.SceneLoader.ImportMesh("", "/src/Scene3d/House/", "scene.gltf", scene, function (meshes) {
  const scene = meshes[0];
  scene.position.x = 0;
  scene.position.y = 62;
  scene.scaling = new BABYLON.Vector3(50, 50, 50);
});
