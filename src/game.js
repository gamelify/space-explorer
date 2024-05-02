import BootScene from './scenes/BootScene.js'; // Adjust the path as necessary
import MainMenuScene from './scenes/MainMenuScene.js'; // Adjust the path as necessary
import GameScene from './scenes/GameScene.js'; // Adjust the path as necessary
import GameOverScene from './scenes/GameOverScene.js'; // Adjust the path as necessary

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [BootScene, MainMenuScene, GameScene, GameOverScene],
};

const game = new Phaser.Game(config);
