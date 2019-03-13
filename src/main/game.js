class Game {
  constructor() {
    this.rolls = []
  }

  trackRoll(pinsDown) {
    this.rolls.push(pinsDown)
  }

  getScore() {
    const framesPlayed = this._calculateFramesPlayed()
    let rollIndex = 0
    let score = 0

    for (let frame = 0; frame < framesPlayed; frame++) {
      if (this._isStrike(rollIndex)) {
        if (this._isNextFrameFinished(rollIndex)) score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
        ++rollIndex;
      } else if (this._isSpare(rollIndex)) {
        if (this._isFirstTryOfNextFrameRolled(rollIndex)) score += 10 + this.rolls[rollIndex + 2]
        rollIndex += 2
      } else if (this._isFrameComplete(rollIndex)) {
        score += this.rolls[rollIndex] + this.rolls[rollIndex + 1]
        rollIndex += 2
      }
    }
    return score
  }

  _calculateFramesPlayed() {
    const strikes =  this.rolls
      .reduce((roll, acc) => roll === 10 ? acc + 1 : acc, 0)

    return strikes + Math.ceil((this.rolls.length - strikes) / 2)
  }

  _isNextFrameFinished (index) {
    return this._isFrameComplete(index + 1)
  }

  _isSpare (index) {
    return this.rolls[index] + this.rolls[index + 1] === 10
  }

  _isStrike (index) {
    return this.rolls[index] === 10
  }

  _isFrameComplete (index) {
    return this.rolls[index + 1] !== undefined
  }

  _isFirstTryOfNextFrameRolled (index) {
    return this.rolls[index + 2]
  }
}

export default Game