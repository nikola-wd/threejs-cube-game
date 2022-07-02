import * as THREE from 'three';
// import gsap from 'gsap';
import { GRAVITY } from '../constants';
import THREEx from '../state/KeyboardState';
import HUD from './HUD';

class MovementController {
  constructor(character, camera) {
    this.keyboard = new THREEx.KeyboardState();
    console.log(this.keyboard);

    this._camera = camera;
    this.character = character;

    this._idleDisablers = ['A', 'D', 'W', 'S', 'Q', 'E'];
    this._canJump = true;
    this._jumpVelocity = 60;
    this._runningMultiplier = 1;
    this._baseMovementSpeed = 70;
    this._movementSpeed;
    this.setMovementSpeed();

    this._rotateAngle;
    this._movementDistance;

    this.stat_distanceTravelled = 0;
    this.stat_jumps = 0;
    this.HUD = new HUD(this.stat_distanceTravelled, this.stat_jumps);

    this._speed = 0.1;
    this._idle = true;
    this._jumpBase = this.character.basePosY;
  }

  setMovementSpeed() {
    this._movementSpeed = this._baseMovementSpeed * this._runningMultiplier;
  }

  rotate(left_or_right) {
    const directionModified = left_or_right === 'left' ? 1 : -1;
    this.character.rotateOnAxis(
      new THREE.Vector3(0, 1, 0),
      this._rotateAngle * directionModified
    );
  }

  moveFB(deltaTime) {
    this.character.velocity.z -=
      this.character.direction.z * this._movementSpeed * deltaTime;
  }

  moveLR(deltaTime) {
    this.character.velocity.x +=
      this.character.direction.x * this._movementSpeed * deltaTime;
  }

  jump() {
    if (this._canJump) {
      console.log('jump here');
      this.character.velocity.y += this._jumpVelocity;
      this._canJump = false;
      this.stat_jumps += 1;
      this.HUD.updateJumps(this.stat_jumps);
    }
  }

  updateDistanceHUD() {
    this.stat_distanceTravelled += this._speed;
    this.HUD.updateDistance(this.stat_distanceTravelled);
  }

  playOrStopIdleAnim(elapsedTime) {
    if (this._idle) {
      const color = Math.floor(Math.sin(elapsedTime) * 50) + 100;
      this.character.material.color.set(`rgb(${color}, ${color}, ${color})`);
    } else {
      this.character.material.color.set('white');
    }
  }

  checkAndUpdateIdle() {
    if (
      this._idleDisablers.some((key) => this.keyboard.pressed(key)) ||
      !this._canJump
    ) {
      this._idle = false;
      this.updateDistanceHUD();
    } else {
      this._idle = true;
    }
  }

  // should maybe be placed in the camera class
  updateCamera() {
    const relativeCameraOffset = new THREE.Vector3(0, 2, 2);
    const cameraOffset = relativeCameraOffset.applyMatrix4(
      this.character.matrixWorld
    );

    this._camera.position.x = cameraOffset.x;
    this._camera.position.y = cameraOffset.y;
    this._camera.position.z = cameraOffset.z;
    const cameraLookAt = [
      this.character.position.x,
      this.character.position.y + 1,
      this.character.position.z,
    ];
    this._camera.lookAt(...cameraLookAt);
  }

  update(deltaTime, elapsedTime) {
    if (this.keyboard.pressed('shift')) {
      this._runningMultiplier = 2;
      console.log('shift pressed');
    } else {
      this._runningMultiplier = 1;
    }
    this.setMovementSpeed();

    this._rotateAngle = (Math.PI / 2) * deltaTime; // pi/2 radians (90 degrees) per second

    // movement
    this._movementDistanceZ = this.character.velocity.z * deltaTime;
    this._movementDistanceX = this.character.velocity.x * deltaTime;
    this.character.velocity.x -= this.character.velocity.x * 10.0 * deltaTime;
    this.character.velocity.z -= this.character.velocity.z * 10.0 * deltaTime;
    // jump
    this.character.velocity.y -= GRAVITY * this.character.mass * deltaTime;

    this.character.direction.z =
      Number(this.keyboard.pressed('W')) - Number(this.keyboard.pressed('S'));
    this.character.direction.x =
      Number(this.keyboard.pressed('E')) - Number(this.keyboard.pressed('Q'));
    this.character.direction.normalize(); // this ensures consistent movements in all directions

    // events
    if (this.keyboard.pressed('space')) {
      this.jump();
    }

    this.character.position.y += this.character.velocity.y * deltaTime;
    if (this.character.position.y <= this._jumpBase) {
      this.character.velocity.y = 0;
      this.character.position.y = this._jumpBase;
      this._canJump = true;
    }

    if (this.keyboard.pressed('A')) {
      this.rotate('left');
    }
    if (this.keyboard.pressed('D')) {
      this.rotate('right');
    }

    // if forward/backward
    if (this.keyboard.pressed('W') || this.keyboard.pressed('S')) {
      this.moveFB(deltaTime);
    }

    // if move left/right
    if (this.keyboard.pressed('Q') || this.keyboard.pressed('E')) {
      this.moveLR(deltaTime);
    }

    this.character.translateZ(this._movementDistanceZ);
    this.character.translateX(this._movementDistanceX);

    // update camera
    this.updateCamera();

    // Update idle state and HUD
    this.checkAndUpdateIdle();

    this.playOrStopIdleAnim(elapsedTime);
  }
}

export default MovementController;
