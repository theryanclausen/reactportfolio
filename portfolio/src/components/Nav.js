import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'
import { twitterPathD, linkedinPathD, githubPathD } from '../assets/svgs'


const StyledHeader = styled.header`
background: linear-gradient(to top,#06092303 0%,	 #060923A8 44%, #330a2d 93%) ;
position: fixed;
top:0;
width: 100%;
height:32px;
z-index:5;
/* box-shadow: 0 24px 52px 0 lightblue; */
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;
  .links{
    display:flex;
    justify-content: space-between;
    align-items:start;
    cursor:pointer;
    width:35%;
    color: lightblue;
    a{
      /* font-family: 'Aleo', serif; */
      font-family: 'Sarabun', sans-serif; 

      margin-right:5px;
      &:hover{
        color:white;
        transition: 500ms;
      }
    }
  }
  .icon-container {
    display: flex;
    align-items: center;
    margin-right:20px;
    .icon {
      max-height:24px;
      max-width: 24px;
      fill-opacity: 0;
      stroke: lightblue;
      stroke-width: 2px;
      stroke-linecap: 'round';
      stroke-linejoin: 'round';
      transition: all 500ms;
      margin: 5px;
      cursor: pointer;
      &:hover {
        fill-opacity: 1;
      }
    }
    .github {
      &:hover {
        stroke: white;
        fill: black;
      }
    }
    .twitter {
      &:hover {
        stroke: #1da1f2;
        fill: #1da1f2;
      }
    }
    .linkedin {
      stroke-width: 1px;

      &:hover {
        stroke: #0077b5;
        fill: white;
      }
    }

  }
}
`

const Nav = () => {
return (
  <StyledHeader>
    <div className="header-container">
    <div className='links'>
    <Link to="splash" smooth={true} duration={1000}>🡡</Link>
    <Link to="about" smooth={true} duration={1000}>About</Link>
    <Link to="projects" smooth={true} duration={1000}>Projects</Link>
    <Link to="experience" smooth={true} duration={1000}>Experience</Link>
    


    </div>
      <div className="icon-container">
        <a
          href="https://github.com/theryanclausen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="github icon" xmlns="http://www.w3.org/2000/svg">
            <path className="path" d={githubPathD} />
          </svg>
        </a>
        <a
          href="https://twitter.com/theryanclausen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="twitter icon" xmlns="http://www.w3.org/2000/svg">
            <path className="path" d={twitterPathD} />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-clausen-6285b816b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="linkedin icon" xmlns="http://www.w3.org/2000/svg">
            <path className="path" d={linkedinPathD} />
            <rect className="path" x="2" y="9" width="4" height="12" />
            <circle className="path" cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>

    </div>
  </StyledHeader>
)
}

export default Nav