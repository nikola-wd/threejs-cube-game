import { Clock } from 'three';

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.clock = new Clock();
    this.prevTime = performance.now();
    this.updateablesARR = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.update();
      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();
    const currentTime = performance.now();
    const deltaTime = (currentTime - this.prevTime) / 1000;
    this.prevTime = currentTime;

    this.updateablesARR.forEach((updateable) =>
      updateable.update(deltaTime, elapsedTime)
    );
    // console.log();
  }
}

export { Loop };
