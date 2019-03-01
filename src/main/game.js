class Game {
  constructor() {
    this.score = 0;
  }

  trackRoll(pinsDown) {
    if (pinsDown !== 10) this.score += pinsDown;
  }

  getScore() {
    return this.score;
  }
}

export default Game;