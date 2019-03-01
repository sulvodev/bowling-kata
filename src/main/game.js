class Game {
  constructor() {
    this.score = 0;
    this.try = 0;
  }

  trackRoll(pinsDown) {
    this.try += 1;
    const newScore = this.score + pinsDown;
    const strike = this.try === 1 && pinsDown === 10;
    const spare = this.try === 2 && newScore === 10;
    if (spare) {
      this.score = 0;
    } else if (!strike) { 
      this.score = newScore
    }
  }

  getScore() {
    return this.score;
  }
}

export default Game;