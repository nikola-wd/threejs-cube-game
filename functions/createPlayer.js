import { BoxBufferGeometry, MeshLambertMaterial, Mesh, Vector3 } from 'three';

const createPlayer = () => {
  const boxHeight = 1.38;
  const basePosY = boxHeight / 2 + 0.004;
  const geometry = new BoxBufferGeometry(1, boxHeight, 1);
  const material = new MeshLambertMaterial({ color: 'white' });
  const player = new Mesh(geometry, material);
  player.castShadow = true;
  player.basePosY = basePosY;
  player.position.y = basePosY;
  player.position.x = 1;
  player.mass = 20;
  player.velocity = new Vector3();
  player.direction = new Vector3();
  // player.rotation.y = Math.PI / 3;
  return player;
};

export { createPlayer };
