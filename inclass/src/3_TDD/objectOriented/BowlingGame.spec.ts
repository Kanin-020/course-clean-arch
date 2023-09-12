import { BowlingGame } from './BowlingGame';

describe('BowlingGame', () => {
  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it('should score 0 for a gutter game', () => {
    rollMany(game, 20, 0); // 20 rolls with 0 pins each
    expect(game.score()).toBe(0);
  });

  it('should score 20 for all ones', () => {
    rollMany(game, 20, 1); // 20 rolls with 1 pin each
    expect(game.score()).toBe(20);
  });

  it('should score 16 for a spare followed by a 3', () => {
    game.roll(5);
    game.roll(5); // Spare
    game.roll(3);
    rollMany(game, 17, 0); // 17 rolls with 0 pins each
    expect(game.score()).toBe(16);
  });

  it('should score 24 for a strike followed by a 3 and 4', () => {
    game.roll(10); // Strike
    game.roll(3);
    game.roll(4);
    rollMany(game, 16, 0); // 16 rolls with 0 pins each
    expect(game.score()).toBe(24);
  });

  it('should score 300 for a perfect game', () => {
    rollMany(game, 12, 10); // 12 strikes for a perfect game
    expect(game.score()).toBe(300);
  });

  function rollMany(game: BowlingGame, rolls: number, pins: number) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
});
