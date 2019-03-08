import React, { Component } from "react";
import Splash from "./components/Splash";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Nav from "./components/Nav";
import styled from 'styled-components'

const PageContainer = styled.div`
  overflow:hidden;

`

class App extends Component {
  render() {
    return (
      <PageContainer>
      <Nav />
        <Splash /> 
        <About />
        <Projects />
        <Experience />
      </PageContainer>
    );
  }
}

export default App;
