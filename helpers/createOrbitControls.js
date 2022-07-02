import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const createOrbitControls = (camera, renderer) => {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;
  controls.autoRotate = true;
};

export { createOrbitControls };
