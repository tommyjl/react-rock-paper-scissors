import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ResultStyle = styled.h1`
  text-align: center;
  color: tomato;
  margin: 0;
  height: 1.5em;
  font-size: 1.5em;
  line-height: 1;
`;

function verboseResult(result) {
  let resultText = "";
  if (result === "win") resultText = "You won.";
  if (result === "loss") resultText = "You lost.";
  if (result === "tie") resultText = "You tied.";
  return resultText;
}

const Results = ({ result, score }) => {
  const text = verboseResult(result) || score;
  return <ResultStyle>{text}</ResultStyle>;
};

Results.propTypes = {
  result: PropTypes.string,
  score: PropTypes.string
};

Results.defaultProps = {
  result: undefined,
  score: undefined
};

export default Results;
