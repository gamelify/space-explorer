import Player from '../objects/Player.js';
import Asteroid from '../objects/Asteroid.js';
import Bullet from '../objects/Bullet.js';
import PowerUp from '../objects/PowerUp.js';
import ScoreManager from '../utilities/ScoreManager.js';
import HealthManager from '../utilities/HealthManager.js';
import SoundManager from '../utilities/SoundManager.js';

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.image('spaceship', 'assets/spaceship.png');
    this.load.image('asteroid', 'assets/asteroid.png');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('powerup', 'assets/powerup.png');
    this.load.image('background', 'assets/space-background.png');
  }

  create() {
    // Background
    this.add.tileSprite(0, 0, 800, 600, 'background').setOrigin(0, 0);

    // Sound manager
    this.soundManager = new SoundManager(this);
    this.soundManager.preloadSounds();
    this.soundManager.createSounds();

    // Player
    this.player = new Player(this, 400, 300, 'spaceship');

    // Asteroids
    this.asteroids = this.physics.add.group({
      classType: Asteroid,
      repeat: 5,
      key: 'asteroid',
    });

    // Bullets
    this.bullets = this.physics.add.group({
      classType: Bullet,
      maxSize: 20,
      runChildUpdate: true,
    });

    // Power-ups
    this.powerUps = this.physics.add.group({
      classType: PowerUp,
      repeat: 2,
      key: 'powerup',
    });

    // Score and health managers
    this.scoreManager = new ScoreManager(this, 0);
    this.healthManager = new HealthManager(this, 100);

    // Collisions
    this.physics.add.collider(
      this.player,
      this.asteroids,
      this.handlePlayerAsteroidCollision,
      null,
      this
    );
    this.physics.add.overlap(
      this.bullets,
      this.asteroids,
      this.handleBulletAsteroidCollision,
      null,
      this
    );

    // Input
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    this.player.update(time);
    this.asteroids.children.iterate((asteroid) => {
      asteroid.update();
    });
    this.powerUps.children.iterate((powerUp) => {
      powerUp.update();
    });
  }

  handlePlayerAsteroidCollision(player, asteroid) {
    this.healthManager.takeDamage(10);
    asteroid.destroy();
    this.soundManager.playSound('explosion');
  }

  handleBulletAsteroidCollision(bullet, asteroid) {
    bullet.destroy();
    asteroid.destroy();
    this.scoreManager.addPoints(10);
    this.soundManager.playSound('explosion');
  }
}

export default GameScene;
