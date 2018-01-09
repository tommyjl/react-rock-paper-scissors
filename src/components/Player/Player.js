import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameTag = styled.h1`
  background: tomato;
  width: 100%;
  text-align: center;
  padding: 0.25em 0;
  margin: 0;
`;

const Player = ({ playerName, namePosition, children }) => (
  <Centered>
    {namePosition === "top" && <NameTag>{playerName}</NameTag>}
    {children}
    {namePosition === "bottom" && <NameTag>{playerName}</NameTag>}
  </Centered>
);

Player.propTypes = {
  playerName: PropTypes.string.isRequired,
  namePosition: PropTypes.oneOf(["top", "bottom"]).isRequired,
  children: PropTypes.element.isRequired
};

export default Player;
