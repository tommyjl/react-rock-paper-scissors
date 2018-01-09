import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Title from "./Title";
import Opponent from "../Player/Opponent";
import Results from "./Results";
import You from "../Player/You";

const Layout = styled.div`
  background: papayawhip;
  color: white;
  display: grid;
  height: 100vh;
  grid-template-rows: max-content 1fr max-content 1fr;
  align-items: center;
`;

const Board = ({ opponentShape, selectShape, result }) => (
  <Layout>
    <Title />
    <Opponent shape={opponentShape} />
    <Results result={result} />
    <You selectShape={selectShape} />
  </Layout>
);

Board.propTypes = {
  opponentShape: PropTypes.oneOf(["rock", "paper", "scissors"]),
  selectShape: PropTypes.func.isRequired,
  result: PropTypes.string
};

Board.defaultProps = {
  opponentShape: undefined,
  result: undefined
};

export default Board;
