import React from "react";
import styled from "styled-components";
import {Link} from 'react-scroll'

const AboutWrapper = styled.div`
  background: #b9f6d9;
  width: 100%;
  min-height: 105vh;
  .container {
    width: 85%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 84px;
      margin: 25px auto;
    }
    .middle {
      width: 100%;
      display:flex;
      align-items:center ;
      justify-content:space-around;
      .headshot {
        width: 300px;
        border-radius: 50%;
      }
      p{
        width:650px;
        line-height:1.5;
        font-size:28px;
      }
    }
    .logo-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .App-link{
      margin:30px auto;
      font-size:38px;
      cursor:pointer;
    }
  }
`;
export default () => {
  return (
    <AboutWrapper id="about">
      <div className="container">
        <h2 className="title">About Me</h2>
        <div className="middle">
          <img
            className="headshot"
            src={require("../assets/ryan-img.jpg")}
            alt="headshot"
          />
          <p>
            Hey everybody, my name is Ryan and I am a fullstack developer. I am
            currently a full time student and part time teaching assistant at
            Lambda School. I also enjoy learning new technologies and building
            neat things on my own.
          </p>
        </div>
        <div className="logo-box">
          <img src={require("../assets/react-logo.png")} alt="react" />
          <img src={require("../assets/node-logo.png")} alt="node" />
          <img src={require("../assets/sql-logo.png")} alt="sql" />
          <img
            src={require("../assets/javascript-logo.png")}
            alt="javascript"
          />
          <img src={require("../assets/python-logo.png")} alt="python" />
          <img src={require("../assets/phaser-logo.png")} alt="phaser" />
        </div>
        <Link to="projects" smooth={true} duration={1000}className="App-link">Projects</Link>

      </div>
    </AboutWrapper>
  );
};
