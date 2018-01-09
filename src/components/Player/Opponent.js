import React from "react";
import PropTypes from "prop-types";
import Player from "./Player";
import Shape from "./Shape";

const Opponent = ({ shape }) => (
  <Player playerName="Opponent" namePosition="top">
    <Shape shapeName={shape} clickable />
  </Player>
);

Opponent.propTypes = {
  shape: PropTypes.oneOf(["rock", "paper", "scissors"])
};

Opponent.defaultProps = {
  shape: undefined
};

export default Opponent;
