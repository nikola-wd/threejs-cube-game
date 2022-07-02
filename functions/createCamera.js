import * as THREE from 'three';

const createCamera = (canvasW, canvasH, player) => {
  const camera = new THREE.PerspectiveCamera(75, canvasW / canvasH, 1, 1000);
  // camera.position.set(player.position.x + 2, 2, 5);
  return camera;
};

export { createCamera };
