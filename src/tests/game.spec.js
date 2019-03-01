import Game from '../main/game';

describe('Testing score traking bowling app - ', () => {
  test('can create a game', () => {
    const game = new Game();
  })

  test('can track one roll', () => {
    const game = new Game();

    game.trackRoll(5);
  })
})