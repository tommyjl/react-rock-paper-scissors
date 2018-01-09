import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Ball = styled.div`
  background: linear-gradient(gray, black);
  ${props => props.red && "background: linear-gradient(pink, red);"};
  ${props => props.green && "background: linear-gradient(lightgreen, green);"};
  ${props => props.blue && "background: linear-gradient(lightblue, blue);"};

  border-radius: 50%;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.3),
    inset 0 -10px 20px rgba(255, 239, 213, 0.5), 0px 4px 6px rgba(0, 0, 0, 0.6);
  color: tomato;
  height: 100px;
  margin: 4px;
  width: 100px;
  transition: 0.2s transform;
  transform: rotate(15deg);
  z-index: 1;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${props =>
    props.clickable &&
    css`
      &:hover {
        transform: rotate(15deg) scale(1.2);
        z-index: 2;
        cursor: pointer;
      }
    `};
`;

Ball.propTypes = {
  red: PropTypes.bool,
  green: PropTypes.bool,
  blue: PropTypes.bool
};

export default Ball;
