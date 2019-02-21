import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../logo.png";

const AppLogoSpin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

const StyledSplash = styled.div`
  text-align: center;
  background-color: #006172;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 28px ;
  color: white;
  header {
    position:relative;
    width: 400px;
    .over-top{
      position:absolute;
      width:100%;
      top: 70px;
      padding:4px;
      z-index:10;
      font-size:100px;
      font-family: 'Cabin Sketch', cursive;
      fill:red ;
      p{
        font-size:154px;
        letter-spacing:10px;
      }
    }
    .react-boiler {
      font-family:"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      overflow:hidden;
      width:400px;
      line-height:1.4;
      .App-logo {
        animation: ${AppLogoSpin} infinite 20s linear;
        height: 400px;
        border-radius:50%;
        pointer-events: none;
      }
      .App-link {
        color: #61dafb;
        cursor: pointer;
      }
    }
  }
`;

export default () => {
  return (
    <StyledSplash>
      <header>
        <div className='over-top'>
          <p>Ryan</p>Clausen
        </div>
        <div className="react-boiler">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Full Stack Web Developer
          </p>
          <p className="App-link">Learn More</p>
        </div>
      </header>
    </StyledSplash>
  );
};
