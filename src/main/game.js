class Game {
  constructor() {
    this.score = 0;
  }

  trackRoll(pinsDown) {
    this.score += pinsDown;
  }

  getScore() { 
    return this.score;
  }
}

export default Game;