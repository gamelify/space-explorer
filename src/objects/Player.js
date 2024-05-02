class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    // Add this sprite to the scene
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Set player properties
    this.setCollideWorldBounds(true); // Don't go out of the screen
    this.setScale(0.5); // Adjust size if necessary
    this.setDepth(1); // Ensures the player is above other objects on the render layer

    // Movement properties
    this.speed = 300;

    // Shooting properties
    this.lastFired = 0;
    this.fireRate = 300; // Milliseconds

    // Enable cursor keys input
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update(time) {
    this.handleMovement();
    this.handleShooting(time);
  }

  handleMovement() {
    this.setVelocity(0);

    // Handle keyboard inputs
    if (this.cursors.left.isDown) {
      this.setVelocityX(-this.speed);
    }
    if (this.cursors.right.isDown) {
      this.setVelocityX(this.speed);
    }
    if (this.cursors.up.isDown) {
      this.setVelocityY(-this.speed);
    }
    if (this.cursors.down.isDown) {
      this.setVelocityY(this.speed);
    }
  }

  handleShooting(time) {
    if (this.cursors.space.isDown && time > this.lastFired) {
      // Fire a bullet
      const bullet = this.scene.bullets.get(this.x, this.y - 50);
      if (bullet) {
        bullet.fire(this.x, this.y - 20);
        this.lastFired = time + this.fireRate;
      }
    }
  }
}

export default Player;
