import React, { Component } from "react";
import Board from "./Board";
import Move from "../Move";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opponentShape: undefined,
      result: undefined
    };
    this.selectShape = this.selectShape.bind(this);
  }

  selectShape(yourShape) {
    const yourMove = new Move(yourShape);
    const opponentMove = Move.Random();
    const result = yourMove.playAgainst(opponentMove);

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
    const { result, opponentShape } = this.state;
    return (
      <Board
        opponentShape={opponentShape}
        selectShape={this.selectShape}
        result={result}
      />
    );
  }
}

export default Game;
