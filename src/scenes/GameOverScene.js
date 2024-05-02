class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  create() {
    // Background
    this.add.rectangle(0, 0, 800, 600, 0x000000, 0.5).setOrigin(0);

    // Game Over Text
    let gameOverText = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY - 100,
        'GAME OVER',
        {
          font: '48px Arial',
          fill: '#ff0000',
        }
      )
      .setOrigin(0.5);

    // Score Display
    let scoreText = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        'Score: ' + this.sys.game.config.score,
        {
          font: '32px Arial',
          fill: '#ffffff',
        }
      )
      .setOrigin(0.5);

    // Restart Game Button
    let restartButton = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 100,
        'Restart Game',
        {
          font: '24px Arial',
          fill: '#00ff00',
        }
      )
      .setOrigin(0.5)
      .setInteractive();

    restartButton.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
    restartButton.on('pointerover', () => {
      restartButton.setStyle({ fill: '#ff0' });
    });
    restartButton.on('pointerout', () => {
      restartButton.setStyle({ fill: '#00ff00' });
    });

    // Return to Main Menu Button
    let mainMenuButton = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 150,
        'Main Menu',
        {
          font: '24px Arial',
          fill: '#00ff00',
        }
      )
      .setOrigin(0.5)
      .setInteractive();

    mainMenuButton.on('pointerdown', () => {
      this.scene.start('MainMenuScene');
    });
    mainMenuButton.on('pointerover', () => {
      mainMenuButton.setStyle({ fill: '#ff0' });
    });
    mainMenuButton.on('pointerout', () => {
      mainMenuButton.setStyle({ fill: '#00ff00' });
    });
  }
}

export default GameOverScene;
