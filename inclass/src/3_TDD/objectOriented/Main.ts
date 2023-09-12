import BowlingGame from './BowlingGame';

main();

function main(): void {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(1);
    bowlingGame.roll(4);
    bowlingGame.roll(4);
    bowlingGame.roll(5);
    bowlingGame.roll(6);
    bowlingGame.roll(4);
    bowlingGame.roll(5);
    bowlingGame.roll(5);
    bowlingGame.roll(10);
    bowlingGame.roll(0);
    bowlingGame.roll(1);
    bowlingGame.roll(7);
    bowlingGame.roll(3);
    bowlingGame.roll(6);
    bowlingGame.roll(4);
    bowlingGame.roll(10);
    bowlingGame.roll(2);
    bowlingGame.roll(8);
    bowlingGame.roll(6);


    const finalScore: number = bowlingGame.score();

    console.log(`Final Score: ${finalScore}`);

}
