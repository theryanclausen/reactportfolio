import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

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
    }
    .App-link {
      margin: 130px auto;
      font-size: 138px;
      cursor: pointer;
    }
  }
`;
export default () => {
  return (
    <ExperienceWrapper id="experience">
      <div className="container">
      <h2 className='title'>
        Experience
      </h2>
        <Link
          to="splash"
          smooth={true}
          duration={1000}
          className="App-link"
        >
          ▲
        </Link>
      </div>
    </ExperienceWrapper>
  );
};
