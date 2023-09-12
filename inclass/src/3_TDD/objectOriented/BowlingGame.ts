type State = { pins: number[] };

const MAX_PINS: number = 10;
const SECOND_ROLL_OFFSET: number = 1;
const THIRD_ROLL_OFFSET: number = 2;

export class BowlingGame {

  private state: State;

  constructor() {
    this.state = { pins: [] };
  }

  public roll(pins: number) {

    this.state.pins.push(pins);

  }

  public score(): number {
    const FRAMES = 10;
    let score = 0;
    let firstRoll = 0;

    for (let frame = 0; frame < FRAMES; frame++) {

      if (this.isStrike(firstRoll)) {

        score += this.scoreForStrike(firstRoll);

        firstRoll += 1;

      } else if (this.isSpare(firstRoll)) {

        score += this.scoreForSpare(firstRoll);

        firstRoll += 2;

      } else {

        score += this.scoreForFrame(firstRoll);

        firstRoll += 2;

      }

    }

    return score;

  }

  private isStrike(firstRoll: number): boolean {

    let isStrike: boolean = false;

    isStrike = this.state.pins[firstRoll] === 10;

    return isStrike;

  }

  private isSpare(firstRoll: number): boolean {

    let isSpare: boolean = false;

    isSpare = this.state.pins[firstRoll] + this.state.pins[firstRoll + SECOND_ROLL_OFFSET] === MAX_PINS;

    return isSpare;

  }

  private scoreForStrike(firstRoll: number): number {

    let scoreValue: number = 0;

    scoreValue = MAX_PINS + this.state.pins[firstRoll + SECOND_ROLL_OFFSET] + this.state.pins[firstRoll + THIRD_ROLL_OFFSET];

    return scoreValue;

  }

  private scoreForFrame(firstRoll: number): number {

    let scoreValue: number = 0;

    scoreValue = this.state.pins[firstRoll] + this.state.pins[firstRoll + SECOND_ROLL_OFFSET];

    return scoreValue;

  }

  private scoreForSpare(firstRoll: number): number {

    let scoreValue: number = 0;

    scoreValue = MAX_PINS + this.state.pins[firstRoll + THIRD_ROLL_OFFSET];

    return scoreValue;

  }

}

export default BowlingGame;
