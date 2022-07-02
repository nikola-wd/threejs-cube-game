import { createCamera } from '../functions/createCamera';
import { createGround } from '../functions/createGround';
import { createLights } from '../functions/createLights';
import { createPlayer } from '../functions/createPlayer';
import { createRenderer } from '../functions/createRenderer';
import { createScene } from '../functions/createScene';
import { Resizer } from './Resizer';
import { Loop } from './Loop';
import MovementController from './MovementController';
import { createOrbitControls } from '../helpers/createOrbitControls';

const canvasW = window.innerWidth;
const canvasH = window.innerHeight;

let camera,
  scene,
  renderer,
  lights,
  ground,
  player,
  characterMovementControls,
  resizer,
  loop,
  orbitControls;

class App {
  constructor() {
    scene = createScene();
    lights = createLights();
    renderer = createRenderer(canvasW, canvasH);
    ground = createGround();
    player = createPlayer();
    camera = createCamera(canvasW, canvasH, player);
    // new
    camera.position.set(0, 2, 5);
    camera.lookAt(scene.position);
    // end new
    // orbitControls = createOrbitControls(camera, renderer);
    characterMovementControls = new MovementController(player, camera);
    loop = new Loop(camera, scene, renderer);

    scene.add(camera, ...lights, ground, player);
    document.body.appendChild(renderer.domElement);
    resizer = new Resizer(canvasW, canvasH, camera, renderer);
    this.setupEvents();
    loop.updateablesARR.push(characterMovementControls);

    this.render();
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }

  setupEvents() {
    // SETUP EVENTS ----------------------------------------------------------
    if (characterMovementControls) {
      console.log(
        'Previous implementation of keyboard controlls. Not needed now'
      );
    }
  }
}

export { App };
