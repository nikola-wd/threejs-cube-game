const setSize = (canvasW, canvasH, camera, renderer) => {
  camera.aspect = canvasW / canvasH;
  camera.updateProjectionMatrix();

  renderer.setSize(canvasW, canvasH);
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(canvasW, canvasH, camera, renderer) {
    setSize(canvasW, canvasH, camera, renderer);

    window.addEventListener('resize', () => {
      setSize(canvasW, canvasH, camera, renderer);
      // any custom actions here
      this.onResize();
    });
  }

  // gets overwritten in App.js
  onResize() {}
}

export { Resizer };
