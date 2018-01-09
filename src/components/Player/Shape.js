import React from "react";
import PropTypes from "prop-types";
import Ball from "./Ball";

function Shape({ shapeName, selectShape }) {
  const colour = {
    red: shapeName === "rock",
    green: shapeName === "scissors",
    blue: shapeName === "paper"
  };

  return !selectShape ? (
    <Ball {...colour} />
  ) : (
    <Ball {...colour} clickable onClick={() => selectShape(shapeName)} />
  );
}

Shape.propTypes = {
  shapeName: PropTypes.oneOf(["rock", "paper", "scissors", "question"]),
  selectShape: PropTypes.func
};

Shape.defaultProps = {
  shapeName: "question",
  selectShape: undefined
};

export default Shape;
