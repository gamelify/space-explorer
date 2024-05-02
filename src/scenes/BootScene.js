class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    // Display a loading label
    let loadingText = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        'Loading...',
        {
          font: '20px Arial',
          fill: '#ffffff',
        }
      )
      .setOrigin(0.5, 0.5);

    // Preload necessary assets for the game
    this.load.image('spaceship', 'assets/spaceship.png');
    this.load.image('asteroid', 'assets/asteroid.png');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('powerup', 'assets/powerup.png');
    this.load.image('background', 'assets/space-background.png');
    this.load.image('menu-background', 'assets/menu-background.png');

    // Load sounds if your game includes them
    this.load.audio('backgroundMusic', 'assets/sounds/backgroundMusic.mp3');
    this.load.audio('explosion', 'assets/sounds/explosion.wav');
    this.load.audio('shoot', 'assets/sounds/shoot.wav');
    this.load.audio('powerUp', 'assets/sounds/powerUp.wav');

    // Handle loading complete event
    this.load.on('complete', () => {
      loadingText.setText('Loading Complete! Click to continue.');
      this.input.once('pointerdown', () => {
        this.scene.start('MainMenuScene');
      });
    });
  }

  create() {
    // Additional setups if necessary (typically you would start the next scene here if not waiting for user interaction)
  }
}

export default BootScene;
