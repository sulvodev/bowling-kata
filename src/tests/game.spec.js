import Game from '../main/game';

describe('Testing score traking bowling app - ', () => {
  test('can track one roll', () => {
    const game = new Game();

    game.trackRoll(5);
  })

  test('can get the score of a game', () => {
    const game = new Game();

    game.trackRoll(5);

    expect(game.getScore()).toEqual(5);
  })
})