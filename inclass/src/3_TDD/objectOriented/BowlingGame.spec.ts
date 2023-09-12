import BowlingGame from "./BowlingGame";

describe('BowlingGame', () => {
  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it('debería invocar una función roll', () => {
    game.roll(5); // Agregar un lanzamiento de prueba
    // Puedes agregar expectativas aquí para verificar el comportamiento deseado
  });

  it('debería calcular el score de un gutterGame (juego con score 0)', () => {
    for (let i = 0; i < 20; i++) {
      game.roll(0); // Agregar 20 lanzamientos con 0 bolos derribados
    }
    expect(game.score()).toBe(0);
  });

  it('debería calcular el score de un juego con puras tiradas de 1 (juego con score 20)', () => {
    for (let i = 0; i < 20; i++) {
      game.roll(1); // Agregar 20 lanzamientos con 1 bolos derribado en cada uno
    }
    expect(game.score()).toBe(20);
  });

  it('debería calcular el score de un juego con un spare y el resto en 0', () => {
    game.roll(5);
    game.roll(5); // Un spare
    for (let i = 0; i < 18; i++) {
      game.roll(0); // Agregar 18 lanzamientos con 0 bolos derribados
    }
    expect(game.score()).toBe(10); // 10 puntos por el spare
  });

  it('debería calcular el score de un juego con un strike y el resto en 0', () => {
    game.roll(10); // Un strike
    for (let i = 0; i < 18; i++) {
      game.roll(0); // Agregar 18 lanzamientos con 0 bolos derribados
    }
    expect(game.score()).toBe(10); // 10 puntos por el strike
  });

  it('debería calcular el score de un juego perfecto (score 300)', () => {
    for (let i = 0; i < 12; i++) {
      game.roll(10); // 12 strikes (un juego perfecto)
    }
    expect(game.score()).toBe(300);
  });
});
