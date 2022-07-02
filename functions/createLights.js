import { SpotLight, AmbientLight } from 'three';

const createLights = () => {
  const spotLight = new SpotLight(0xffffff);
  spotLight.castShadow = true;
  spotLight.position.set(0, 28, 0);
  spotLight.intensity = 0.7;

  const ambientLight = new AmbientLight(0xffffff, 0.4); // soft white light

  return [ambientLight, spotLight];
};

export { createLights };
