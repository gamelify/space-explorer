class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenuScene' });
  }

  preload() {
    // Load any assets for the menu
    this.load.image('background', 'assets/menu-background.png');
  }

  create() {
    // Add background
    this.add.image(400, 300, 'background');

    // Menu title
    this.title = this.add
      .text(400, 150, 'Space Explorer', {
        font: '40px Arial',
        fill: '#ffffff',
      })
      .setOrigin(0.5);

    // Start game button
    this.startButton = this.add
      .text(400, 300, 'Start Game', {
        font: '32px Arial',
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start('GameScene');
      })
      .on('pointerover', () => {
        this.startButton.setStyle({ fill: '#ff0' });
      })
      .on('pointerout', () => {
        this.startButton.setStyle({ fill: '#ffffff' });
      });

    // Settings button
    this.settingsButton = this.add
      .text(400, 400, 'Settings', {
        font: '32px Arial',
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start('SettingsScene'); // Assumes a SettingsScene exists
      })
      .on('pointerover', () => {
        this.settingsButton.setStyle({ fill: '#ff0' });
      })
      .on('pointerout', () => {
        this.settingsButton.setStyle({ fill: '#ffffff' });
      });
  }
}

export default MainMenuScene;
