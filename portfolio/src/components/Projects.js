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
      margin: 0 auto;
      padding: 25px 0;
      @media (max-width:500px){
        font-size:54px;
      }
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
            blurb="I built this simple, retro inspired platformer using javaScript, webpack, and the phaser game engine. The rules to Help Ryan Study are simple, use the arrow keys to help Ryan collect Lambda coins and avoid the cat. Occasionally, a bonus coin featuring the logo of a technology learned at Lambda school will drop from the top of the screen."
          />
          <ProjectCard
            srcPath="bubblenote.gif"
            url="https://bubble-notes.netlify.com"
            title="Bubble Notes"
            blurb="Bubble Notes is an app that allows users to write down their thoughts and watch them float away in bubbles. Users can edit or pop bubbles. Programatically generated bubbles created with the styled components package. This project utilizes React hooks and the ReactN package for global state management. Sqlite3 database hosted on node/express server."

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
