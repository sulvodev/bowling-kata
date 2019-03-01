import Game from '../main/game';

describe('Testing score traking bowling app - ', () => {
  test('can get the score of a game', () => {
    const game = new Game();

    game.trackRoll(5);

    expect(game.getScore()).toEqual(5);
  })

  test('insert the second try into the game', () => {
    const game = new Game();

    game.trackRoll(5); // first try

    game.trackRoll(3); // second try

    expect(game.getScore()).toEqual(8);
  })



})