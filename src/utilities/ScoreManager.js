class ScoreManager {
  constructor(scene, initialScore) {
    this.scene = scene;
    this.score = initialScore;

    // Create score display
    this.scoreText = scene.add.text(16, 50, 'Score: ' + this.score, {
      fontSize: '32px',
      fill: '#ffffff',
    });
  }

  addPoints(points) {
    this.score += points;
    this.updateScoreText();
  }

  resetScore() {
    this.score = 0;
    this.updateScoreText();
  }

  updateScoreText() {
    this.scoreText.setText('Score: ' + this.score);
  }
}

export default ScoreManager;
