import Game from '../main/game';

describe('Testing score traking bowling app - ', () => {
  let game;

  beforeEach(() => {
    game = new Game()
  })

  test('insert the second try into the game', () => {
    game.trackRoll(5); // first try
    game.trackRoll(3); // second try

    expect(game.getScore()).toEqual(8);
  })

  test('if Strike happens on the first try the score should be 0', () => {
    game.trackRoll(10);
    expect(game.getScore()).toEqual(0);
  })

  test('If we have a Spare the score should be 0', () => {
    game.trackRoll(6);
    game.trackRoll(4);
    expect(game.getScore()).toEqual(0);
  })

  test('if a Spare was made on the first frame and the next try is rolled, it should show the final score ', () => {
    game.trackRoll(6);
    game.trackRoll(4);

    game.trackRoll(3);
    game.trackRoll(0);

    expect(game.getScore()).toEqual(16);
  })

  test('if a Strike was made on the first frame and the next frame is rolled, it should show the right score', () => {
    game.trackRoll(10); // + plus the next two rolls

    game.trackRoll(3);
    game.trackRoll(2);
    expect(game.getScore()).toEqual(20);
  })

  test('After two strikes in a row it should show the correct score', () => {
    game.trackRoll(10);
    game.trackRoll(10);
    game.trackRoll(5);
    game.trackRoll(3);
    expect(game.getScore()).toEqual(51);
  })

  test('10th frame with spare', () => {
    for (let i = 1; i <= 18; i++) { game.trackRoll(0); }
    
    // 10Th frame
    game.trackRoll(5);
    game.trackRoll(5);
    game.trackRoll(7);


    expect(game.getScore()).toEqual(17);
  })

  test('10th frame with all strikes', () => {
    for (let i = 1; i <= 18; i++) { game.trackRoll(0); }
    
    // 10Th frame
    game.trackRoll(10);
    game.trackRoll(10);
    game.trackRoll(10);


    expect(game.getScore()).toEqual(30);
  })

  test('perfect game', () => {
    for (let i = 1; i <= 12; i++) { game.trackRoll(10); }

    expect(game.getScore()).toEqual(300);
  })

})