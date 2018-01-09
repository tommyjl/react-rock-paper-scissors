import React, { Component } from "react";
import Board from "./Board";
import Move from "../Move";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opponentShape: undefined,
      result: undefined,
      wins: 0,
      losses: 0
    };
    this.selectShape = this.selectShape.bind(this);
  }

  selectShape(yourShape) {
    const yourMove = new Move(yourShape);
    const opponentMove = Move.Random();
    const result = yourMove.playAgainst(opponentMove);

    if (result === "win") {
      this.setState(prevState => ({ wins: prevState.wins + 1 }));
    } else if (result === "loss") {
      this.setState(prevState => ({ losses: prevState.losses + 1 }));
    }

    this.setState({ opponentShape: opponentMove.move, result });
    this.resetState(500);
  }

  resetState(milliseconds) {
    setTimeout(
      () =>
        this.setState({
          opponentShape: undefined,
          result: undefined
        }),
      milliseconds
    );
  }

  render() {
    const { result, opponentShape, wins, losses } = this.state;
    return (
      <Board
        opponentShape={opponentShape}
        selectShape={this.selectShape}
        result={result}
        score={`${wins}–${losses}`}
      />
    );
  }
}

export default Game;
