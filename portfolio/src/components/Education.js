import React from "react";
import styled from "styled-components";

import ArrowButton from './ArrowButton'

const EducationWrapper = styled.div`
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
        border-radius: 50%;
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
    <EducationWrapper id="education">
      <div className="container">
        <h2 className="title">Education</h2>
        <div className="middle">
          <div className="text">
            <h4>Lambda School</h4>
            <p>
              In my time as a student at Lambda school I have built a multitude
              of projects both on my own and as a part of teams using the agile
              methodology.
            </p>
            <p>
              During my time as a full time Lambda student, I also served as a
              part time teaching assistant for students on the part time track.
              My duties included code review and debugging, one on one
              mentorship, and weekly live review lectures in which I answered
              student questions and live coded a project relevant to the
              curriculum of the week.
            </p>

            <p>To get in touch, send me an email at theryanclausen@gmail.com</p>
          </div>

          <img
            src={require("../assets/lambdaschool-logo.jpg")}
            alt="lambda school"
          />
        </div>
        <ArrowButton end destination='splash'/>

      </div>
    </EducationWrapper>
  );
};
