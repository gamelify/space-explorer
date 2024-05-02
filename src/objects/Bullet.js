class Bullet extends Phaser.Physics.Arcade.Image {
  constructor(scene) {
    super(scene, 0, 0, 'bullet');
    this.speed = 400; // Speed of the bullet
    this.born = 0; // Time since new bullet spawned
    this.lifespan = 1000; // Lifespan of the bullet in milliseconds
  }

  // Fire the bullet from the player's position
  fire(x, y) {
    this.setPosition(x, y - 20); // Adjust so it appears to fire from the ship
    this.setActive(true);
    this.setVisible(true);
    this.born = 0; // Reset lifespan counter
  }

  // Update the bullet position
  update(time, delta) {
    this.y -= (this.speed * delta) / 1000;
    this.born += delta;
    if (this.born > this.lifespan) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}

export default Bullet;
