class Asteroid extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    // Add this sprite to the scene
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Set asteroid properties
    this.setCollideWorldBounds(true); // Allows the asteroid to bounce off game boundaries
    this.setBounce(1); // Full bounce when hitting boundaries or other objects
    this.setScale(0.5); // Adjust the scale according to your game design

    // Randomize initial velocity
    const angle = Phaser.Math.Between(0, 360);
    const speed = Phaser.Math.Between(50, 150); // Speed range can be adjusted
    this.setVelocity(speed * Math.cos(angle), speed * Math.sin(angle));

    // Rotation
    this.rotationSpeed = Phaser.Math.FloatBetween(0.01, 0.05); // Random rotation speed
  }

  update() {
    this.angle += this.rotationSpeed * Phaser.Math.RAD_TO_DEG; // Update angle to rotate asteroid
  }
}

export default Asteroid;
