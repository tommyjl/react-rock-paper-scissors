import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Player from "./Player";
import Shape from "./Shape";

const Options = styled.div`
  display: flex;
  justify-content: center;
`;

const You = ({ selectShape }) => (
  <Player playerName="You" namePosition="bottom">
    <Options>
      <Shape shapeName="rock" selectShape={selectShape} />
      <Shape shapeName="scissors" selectShape={selectShape} />
      <Shape shapeName="paper" selectShape={selectShape} />
    </Options>
  </Player>
);

You.propTypes = {
  selectShape: PropTypes.func.isRequired
};

export default You;
