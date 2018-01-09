import React from "react";
import styled from "styled-components";

const Red = styled.span`
  color: pink;
  text-shadow: 0 0 8px black;
`;

const Green = styled.span`
  color: lightgreen;
  text-shadow: 0 0 8px black;
`;

const Blue = styled.span`
  color: lightblue;
  text-shadow: 0 0 8px black;
`;

const TitleStyle = styled.h1`
  background: tomato;
  margin: 1.5rem 0;
  padding: 1.5rem 0;
  font-size: 1.5em;
  line-height: 1;
  text-align: center;
  // text-shadow: 1px 0 black, -1px 0 black, 0 1px black, 0 -1px black;
  // text-shadow: 0 0 8px black;
`;

const Title = () => (
  <TitleStyle>
    <Red>Red</Red> beats <Green>Green</Green> beats <Blue>Blue</Blue>
  </TitleStyle>
);

export default Title;
