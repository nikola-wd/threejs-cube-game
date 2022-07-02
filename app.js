import { Clock } from 'three';

import MovementController from './classes/MovementController';
import { createPlayer } from './functions/createPlayer';
import { createCamera } from './functions/createCamera';
import { createGround } from './functions/createGround';
import { createLights } from './functions/createLights';
import { createRenderer } from './functions/createRenderer';
import { App } from './classes/App';
import { createScene } from './functions/createScene';
// import ThirdPersonCamera from './classes/ThirdPersonCamera';

const canvasW = window.innerWidth;
const canvasH = window.innerHeight;

let scene, camera, renderer;
let lights;
let clock;

function main() {
  const app = new App();
  // start the animation loop
  app.start();
}

// main();

let characterMovementControls;
// let thirdPersonCamera;

let controls;

// TEMP
let player, plane;
// end:TEMP

/*

function init() {
  // SCENE
  scene = createScene();

  // RENDERER ----------------------------------------------------------------
  renderer = createRenderer(canvasW, canvasH);
  document.body.appendChild(renderer.domElement);

  // LIGHTS ----------------------------------------------------------------
  lights = createLights();
  scene.add(...lights);

  // PLANE -----
  plane = createGround();
  scene.add(plane);

  // PLAYER -----
  player = createPlayer();
  scene.add(player);

  // CAMERA -----
  camera = createCamera(canvasW, canvasH, player);
  scene.add(camera);

  // ORBIT CONTROLS ----------------------------------------------------
  // controls = createOrbitControls(camera, renderer);

  characterMovementControls = new MovementController(player, camera);

  // thirdPersonCamera = new ThirdPersonCamera({
  //   camera: camera,
  //   target: cube,
  // });

  // RESPONSIVE ----------------------------------------------------------------
  window.addEventListener('resize', () => {
    renderer.setSize(canvasW, canvasH);
    camera.aspect = canvasW / canvasH;
  });

  // helper for camera ----------------------------------------------------------------
  function updateCamera() {
    camera.updateProjectionMatrix();
  }

  // CLOCK ----------------------------------------------------------------
  clock = new Clock();

  // SETUP EVENTS ----------------------------------------------------------
  if (characterMovementControls) {
    window.addEventListener(
      'keydown',
      (e) => characterMovementControls.updateOnKeyDown(e),
      false
    );
    window.addEventListener(
      'keyup',
      (e) => characterMovementControls.updateOnKeyUp(e),
      false
    );
  }
}

// END INIT() ----------------------------------------------------------------

// ANIMATION LOOP ----------------------------------------------------------------
const animate = (deltaTime) => {
  requestAnimationFrame(animate);
  // const timeElapsedS = clock.getElapsedTime() * 0.001;
  const timeElapsedS = deltaTime * 0.001;

  // controls.update();

  // animate here --------
  if (characterMovementControls) {
    characterMovementControls.update();
  }

  // end animate here ----

  if (renderer) {
    renderer.render(scene, camera);

    // if (thirdPersonCamera) {
    //   thirdPersonCamera.Update(timeElapsedS);
    // }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  init();
  animate();
});

*/

function main() {
  const app = new App();
  // start the animation loop
  app.start();
}

main();
