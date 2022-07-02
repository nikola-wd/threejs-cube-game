import {
  PlaneBufferGeometry,
  MeshLambertMaterial,
  Mesh,
  TextureLoader,
  RepeatWrapping,
} from 'three';

const createGround = () => {
  const planeGeometry = new PlaneBufferGeometry(100, 100, 10, 10);
  const planeMaterial = new MeshLambertMaterial({
    color: 0x4e9816,
  });
  const texture = new TextureLoader().load('../assets/grassNormalMap.png');
  texture.wrapS = RepeatWrapping;

  texture.wrapT = RepeatWrapping;
  texture.repeat.set(30, 30);
  planeMaterial.map = texture;
  console.log(texture);
  const plane = new Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;
  plane.rotation.x = -Math.PI / 2;

  return plane;
};

export { createGround };
