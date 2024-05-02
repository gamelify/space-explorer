class PowerUp extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, type) {
    super(scene, x, y, texture);

    // Add this sprite to the scene
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Set power-up properties
    this.type = type; // Type of power-up (e.g., 'shield', 'doubleBullet', 'speed')
    this.setVelocity(Phaser.Math.Between(-100, 100), 20);
    this.setCollideWorldBounds(true);
    this.setBounce(1);
  }

  activateEffect(player) {
    switch (this.type) {
      case 'shield':
        player.addShield(); // Assume there is a method to add a shield
        break;
      case 'doubleBullet':
        player.doubleBulletTime = 5000; // Player can shoot double bullets for 5 seconds
        break;
      case 'speed':
        player.speed += 100; // Increase player speed
        setTimeout(() => (player.speed -= 100), 5000); // Speed boost lasts for 5 seconds
        break;
    }

    this.destroy(); // Remove the power-up from the scene after activation
  }
}

export default PowerUp;
