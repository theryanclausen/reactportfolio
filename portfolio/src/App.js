import React, { Component } from "react";
import Splash from "./components/Splash";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

class App extends Component {
  render() {
    return (
      <>
        <Splash />
        <About />
        <Projects />
        <Experience />
      </>
    );
  }
}

export default App;
