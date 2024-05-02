class HealthManager {
  constructor(scene, initialValue) {
    this.scene = scene;
    this.health = initialValue;
    this.maxHealth = initialValue;

    // Create health display
    this.healthText = scene.add.text(16, 16, 'Health: ' + this.health, {
      fontSize: '32px',
      fill: '#ffffff',
    });
  }

  takeDamage(amount) {
    this.health -= amount;
    this.health = Math.max(this.health, 0); // Prevent health from going negative
    this.updateHealthText();

    // Check for game over condition
    if (this.health <= 0) {
      this.scene.events.emit('gameOver');
    }
  }

  addHealth(amount) {
    this.health += amount;
    this.health = Math.min(this.health, this.maxHealth); // Prevent health from exceeding max
    this.updateHealthText();
  }

  resetHealth() {
    this.health = this.maxHealth;
    this.updateHealthText();
  }

  updateHealthText() {
    this.healthText.setText('Health: ' + this.health);
  }
}

export default HealthManager;
