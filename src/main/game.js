class Game {
  constructor() {
    this.rolls = []
  }

  trackRoll(pinsDown) {
    this.rolls.push({ pinsDown })
  }

  getScore() {
    const score = this.rolls.reduce((accum, roll) => accum + roll.pinsDown, 0)
    return score !== 10 ? score : 0
  }
}

export default Game