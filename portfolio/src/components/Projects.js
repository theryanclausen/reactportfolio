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
      justify-content: space-around;
      @media(max-width:750px){
    flex-direction: column;
    align-items:center;
  }
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
            blurb="I built my film portfolio using plain old CSS and HTML. I felt that maximizing the potential of minimal tools was a perfect reflection of the ingenuity I displayed throughout my career as an independent film maker. I apply that same ingenuity to every project I approach in my career as a full stack developer."
          />
          <ProjectCard
            srcPath="familytabs.gif"
            url="https://family-tabs.netlify.com"
            title="Family Tabs"
            blurb="Family Tabs is an app that allows for families to create a shared calendar. Children are allowed to propose events for inclusion in the calendar while parents are allowed to approve or deny children events and create events of their own. This was a group project built in conjunction with three other Lambda School developers. My role in the project was back end database management, front end state management using the React Context Api, and event creating, editing, and sorting using the react-select package."
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
          🡣
        </Link>
      </div>
    </ProjectsWrapper>
  );
};
