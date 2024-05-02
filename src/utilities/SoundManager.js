class SoundManager {
  constructor(scene) {
    this.scene = scene;
    // Store references to sound objects
    this.sounds = {
      backgroundMusic: null,
      explosionSound: null,
      shootingSound: null,
      powerUpSound: null,
    };
  }

  preloadSounds() {
    // Load audio files
    this.scene.load.audio(
      'backgroundMusic',
      'assets/sounds/backgroundMusic.mp3'
    );
    this.scene.load.audio('explosion', 'assets/sounds/explosion.mp3');
    this.scene.load.audio('shoot', 'assets/sounds/shoot.mp3');
    this.scene.load.audio('powerUp', 'assets/sounds/powerUp.mp3');
  }

  createSounds() {
    // Create sound objects from loaded audio files
    this.sounds.backgroundMusic = this.scene.sound.add('backgroundMusic', {
      loop: true,
    });
    this.sounds.explosionSound = this.scene.sound.add('explosion');
    this.sounds.shootingSound = this.scene.sound.add('shoot');
    this.sounds.powerUpSound = this.scene.sound.add('powerUp');
  }

  playBackgroundMusic() {
    this.sounds.backgroundMusic.play();
  }

  playSound(soundName) {
    if (this.sounds[soundName]) {
      this.sounds[soundName].play();
    }
  }

  stopBackgroundMusic() {
    this.sounds.backgroundMusic.stop();
  }

  setVolume(soundName, volume) {
    if (this.sounds[soundName]) {
      this.sounds[soundName].setVolume(volume);
    }
  }
}

export default SoundManager;
