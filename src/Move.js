export default class Move {
  constructor(move) {
    if (!move || (move !== "rock" && move !== "paper" && move !== "scissors"))
      throw new Error("Move must be instantiated as rock, paper, or scissors");
    this.move = move;
  }

  static Rock() {
    return new Move("rock");
  }

  static Paper() {
    return new Move("paper");
  }

  static Scissors() {
    return new Move("scissors");
  }

  static Random() {
    const options = [Move.Rock(), Move.Paper(), Move.Scissors()];
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
  }

  playAgainst(opponentMove) {
    if (this.move === opponentMove.move) return "tie";

    const winConditions = [
      this.move === "rock" && opponentMove.move === "scissors",
      this.move === "paper" && opponentMove.move === "rock",
      this.move === "scissors" && opponentMove.move === "paper"
    ];

    const hasWon = winConditions.find(condition => condition === true);
    return hasWon ? "win" : "loss";
  }
}
