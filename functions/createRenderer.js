import { WebGLRenderer } from 'three';

const createRenderer = (canvasW, canvasH) => {
  const renderer = new WebGLRenderer({ antialias: true });
  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;
  renderer.shadowMap.enabled = true;
  renderer.setSize(canvasW, canvasH);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 0);

  return renderer;
};

export { createRenderer };
