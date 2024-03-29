import React from "react";
import styled from "styled-components";

import ArrowButton from './ArrowButton'

const ExperienceWrapper = styled.div`
  background: #08000c;
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
      @media (max-width:500px){
        font-size:54px;
      }
    }
    .middle {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        padding: 0 25px;
        @media (max-width:500px){
        display:none;
      }
      }
      .text {
        margin-right: 25px;
        max-width: 650px;

        p {
          line-height: 1.5;
          font-size: 24px;
          margin-bottom: 25px;
        }
        h4 {
          font-size: 36px;
          margin: 25px 0;
        }
        @media (max-width: 650px) {
          margin: 10px auto;
          width: 95%;
        }
        @media (max-width: 400px) {
          font-size: 22px;
        }
      }
      @media (max-width: 800px) {
        flex-direction: column-reverse;
      }
    }
  }
`;
export default () => {
  return (
    <ExperienceWrapper id="experience">
      <div className="container">
        <h2 className="title">Experience</h2>
        <div className="middle">
          <div className="text">
            <h4>Vegas.com</h4>
            <p>
              My main responsibility at Vegas.com is updating and maintaining internal applications, 
              primarily our admin server and ui for our multi-variant proxy, which facilitates A/B 
              and Blue/Green testing. I updated that application from Java based Wicket/Spring Boot to
              React/Express with Apollo Graphql for data management. I created a custom Gitlab Webhook 
              that can serve the latest bundle to a selected internal test environment when a new fix or 
              feature is merged into select branches.
            </p>
            <p>
              I primarily work with React, Apollo, Graphql, TypeScript and Prisma. I manage non-production 
              releases using openShift.
            </p>

          </div>

          <img
            src={require("../assets/vegascom.svg")}
            alt="lambda school"
          />
        </div>
        <ArrowButton destination='education'/>

      </div>
    </ExperienceWrapper>
  );
};
