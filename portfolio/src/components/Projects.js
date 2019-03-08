import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import ProjectCard from "./ProjectCard";

const ProjectsWrapper = styled.div`
  background: linear-gradient(to top,#08000c  0%, #060923 43%) ;
  min-height: 105vh;
  .container {
    width: 90%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 84px;
      margin: 25px auto;
    }
    .middle {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @media(max-width:750px){
    flex-direction: column;
    align-items:center;
  }
    }
    .App-link {
      margin: 30px auto;
      font-size: 38px;
      cursor: pointer;
    }
  }
`;
export default () => {
  return (
    <ProjectsWrapper id="projects">
      <div className="container">
        <h2 className="title">Projects</h2>
        <div className="middle">
          <ProjectCard
            srcPath="thercdotcom.gif"
            url="http://theryanclausen.com"
            title="Film Portfolio"
            blurb="Lorem ipsum dolor sit amet, clita alterum no eos. Prima oblique quaerendum in has. Duis praesent dissentiunt vis et. Ex dicta expetenda suscipiantur his, autem veritus honestatis ei eum. At sea tempor accusam, cu debet libris usu. Id nam aperiri gubergren, diam dictas ea sit. Mei at illum debet habemus, mel ne utinam appareat, vim at fabellas eleifend."
          />
          <ProjectCard
            srcPath="familytabs.gif"
            url="https://family-tabs.netlify.com"
            title="Family Tabs"
            blurb="Lorem ipsum dolor sit amet, clita alterum no eos. Prima oblique quaerendum in has. Duis praesent dissentiunt vis et. Ex dicta expetenda suscipiantur his, autem veritus honestatis ei eum. At sea tempor accusam, cu debet libris usu. Id nam aperiri gubergren, diam dictas ea sit. Mei at illum debet habemus, mel ne utinam appareat, vim at fabellas eleifend."
          />
          <ProjectCard
            srcPath="hrs.gif"
            url="https://help-ryan-study.netlify.com"
            title="Help Ryan Study"
            blurb="Lorem ipsum dolor sit amet, clita alterum no eos. Prima oblique quaerendum in has. Duis praesent dissentiunt vis et. Ex dicta expetenda suscipiantur his, autem veritus honestatis ei eum. At sea tempor accusam, cu debet libris usu. Id nam aperiri gubergren, diam dictas ea sit. Mei at illum debet habemus, mel ne utinam appareat, vim at fabellas eleifend."
          />
          <ProjectCard
            srcPath="bubblenote.gif"
            url="https://bubble-notes.netlify.com"
            title="Bubble Notes"
            blurb="Lorem ipsum dolor sit amet, clita alterum no eos. Prima oblique quaerendum in has. Duis praesent dissentiunt vis et. Ex dicta expetenda suscipiantur his, autem veritus honestatis ei eum. At sea tempor accusam, cu debet libris usu. Id nam aperiri gubergren, diam dictas ea sit. Mei at illum debet habemus, mel ne utinam appareat, vim at fabellas eleifend."

          />
        </div>

        <Link
          to="experience"
          smooth={true}
          duration={1000}
          className="App-link"
        >
          Experience
        </Link>
      </div>
    </ProjectsWrapper>
  );
};
