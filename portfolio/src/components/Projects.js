import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'

const ProjectsWrapper = styled.div`
    background: #E18261;
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
    .middle{

    }
    .App-link{
      margin:30px auto;
      font-size:38px;
      cursor:pointer;
    }
    }
`
export default () => {
  return (
    <ProjectsWrapper id="projects">
    <div className='container'>
    <h2 className='title'>Projects</h2>
    <div className='middle'>stuff</div>

    <Link to="experience" smooth={true} duration={1000}className="App-link">Experience</Link>

    </div>
      
    </ProjectsWrapper>
  )
}
