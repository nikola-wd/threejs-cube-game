class HUD {
  constructor(distance, jumps) {
    this.distance = distance;
    this.jumps = jumps;
    this.$distanceHUD = document.querySelector('.js-distance');
    this.$jumpsHUD = document.querySelector('.js-jumps');

    this._update();
  }

  _update() {
    this.$distanceHUD.textContent = `${this.distance.toFixed(2)}m`;
    this.$jumpsHUD.textContent = `${this.jumps} times`;
  }

  updateDistance(newDistance) {
    this.$distanceHUD.textContent = `${newDistance.toFixed(2)}m`;
  }
  updateJumps(newJumps) {
    this.$jumpsHUD.textContent = `${newJumps} times`;
  }
}

export default HUD;
