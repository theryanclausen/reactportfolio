import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

const randomInt = (min, max) => Math.random() * (max - min + 1) + min;

const glow = keyframes`
0% {
    box-shadow: inherit;
    transform: rotate(0deg);
  }
  19% {
    opacity: 1;
  }
  20% {
    opacity: .7;
  }
  21% {
    opacity: 1;
  }
  50% {
    box-shadow: 0px 1px ${() => randomInt(6, 11)}px ${() =>
  randomInt(3, 7)}px #f9eaea4d;
  }
  100% {
    transform: rotate(360deg);
    box-shadow: 0px 0px 5px 1px #f9eaea;
  }
`;

const shoot = keyframes`
0% {
  transform: scale(0) translate3d(0, 0, 0);
  opacity: 0;
}
25% {
  opacity: 1;
}
35% {
  transform:scale(2) translate3d(-555px, 800px, 0) ;
  opacity: 0;
}
100% {
  transform: translate3d(0px, 0px, 0);
  opacity: 0;
}
`;

const StyledSplash = styled.div`
  text-align: center;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(
    to top,
    #330a2d 0%,
    #060923 44%,
    #08000c 65%,
    #000000 100%
  );
  min-height: 105vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
  header {
    position: relative;
    width: 400px;
    h1 {
      font-size: 66px;
      margin: 65px 0;
    }
    h2 {
      font-size: 44px;
      margin: 25px 0 44px;
    }
  }
  a {
    transition: all 500ms;
    font-family: "Cabin Sketch", cursive;
    font-size: 38px;
    &:hover {
      color: lightblue;
    }
  }
`;

const Star = styled.div`
  position: absolute;
  left: ${() => randomInt(1, 97)}%;
  top: ${() => randomInt(1, 100)}%;
  border-radius: 50%;
  box-shadow: ${() => randomInt(-1, 1)}px 0px ${() => randomInt(18, 34)}px 6px
    #edeeff;
  background: #fffbed;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  animation: ${glow} ${() => randomInt(5, 11)}s ease-in-out infinite;
`;

const ShootingStar = styled.div`
  width: 4px;
  height: 4px;
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 205, 205, 1);
  right: ${() => randomInt(8, 60)}%;
  top: ${() => randomInt(1, 40)}%;
  animation: ${shoot} ${() => randomInt(5, 9)}s ease-in-out infinite;
  animation-delay: ${() => randomInt(1, 82)}s;
  transform: translate3d(0, 0, 0);
  opacity: 0;
`;

export default () => {
  return (
    <StyledSplash id="splash">
      {new Array(199).fill("").map((x, i) => (
        <Star key={i} size={randomInt(1, 4)} />
      ))}
      {new Array(14).fill("").map((x, i) => (
        <ShootingStar key={i} />
      ))}
      <header>
        <h1>Ryan Clausen</h1>
        <h2>Fullstack Developer</h2>
        <Link to="about" smooth={true} duration={1000} className="App-link">
          Learn More
        </Link>
      </header>
    </StyledSplash>
  );
};
