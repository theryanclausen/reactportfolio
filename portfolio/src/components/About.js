import React from "react";
import styled from "styled-components";
import ArrowButton from "./ArrowButton";

const AboutWrapper = styled.div`
  background: linear-gradient(to top, #060923 0%, #330a2d 43%);
  width: 100%;
  min-height: 100vh;
  color: white;
  padding-bottom: 50px;
  .container {
    width: 85%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 84px;
      margin: 25px auto;
      @media (max-width: 500px) {
        font-size: 54px;
      }
    }
    .middle {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .headshot {
        width: 300px;
        border-radius: 50%;
        @media (max-width: 500px) {
          display: none;
        }
      }
      p {
        margin-left: 25px;
        width: 650px;
        line-height: 1.5;
        font-size: 28px;
        @media (max-width: 650px) {
          margin: 10px auto;
          width: 95%;
        }
        @media (max-width: 400px) {
          font-size: 22px;
        }
      }
      @media (max-width: 650px) {
        flex-direction: column;
      }
    }
    .logo-box {
      width: 75%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @media (max-width: 650px) {
        width: 95%;
      }
      img {
        margin: 25px;
        width: 100px;
        height: 100px;
        @media (max-width: 400px) {
          width: 75px;
          height: 75px;
        }
      }
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
          <img src={require("../assets/react-logo.png")} alt="react" />{" "}
          <img src={require("../assets/vue-logo.png")} alt="vue" />
          <img src={require("../assets/node-logo.png")} alt="node" />
          <img src={require("../assets/sql-logo.png")} alt="sql" />
          <img
            src={require("../assets/javascript-logo.png")}
            alt="javascript"
          />
          <img src={require("../assets/python-logo.png")} alt="python" />
          <img src={require("../assets/phaser-logo.png")} alt="phaser" />
        </div>
        <ArrowButton destination="projects" />
      </div>
    </AboutWrapper>
  );
};
