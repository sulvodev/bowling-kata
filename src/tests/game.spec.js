import Game from '../main/game';

describe('Testing score traking bowling app - ', () => {
  test('insert the second try into the game', () => {
    const game = new Game();

    game.trackRoll(5); // first try
    game.trackRoll(3); // second try

    expect(game.getScore()).toEqual(8);
  })

  test('if Strike happens on the first try the score should be 0', () => {
    const game = new Game();

    game.trackRoll(10);
    expect(game.getScore()).toEqual(0);
  })

  test('If we have a Spare the score should be 0', () => {
    const game = new Game();
    game.trackRoll(6);
    game.trackRoll(4);
    expect(game.getScore()).toEqual(0);
  })

  test('if a Spare was made on the first frame and the next try is rolled, it should show the final score ', () => {
    const game = new Game();
    game.trackRoll(6);
    game.trackRoll(4);

    game.trackRoll(3);
    game.trackRoll(0);

    expect(game.getScore()).toEqual(16);
  })

  test('if a Strike was made on the first frame and the next frame is rolled, it should show the right score', () => {
    const game = new Game();
    game.trackRoll(10); // + plus the next two rolls

    game.trackRoll(3);
    game.trackRoll(2);
    expect(game.getScore()).toEqual(20);
  })
})