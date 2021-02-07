import React, {useState} from 'react';
import Name from "./components/name"
import Projects from "./components/projects"
import Skills from './components/skill-abilities';
import Header from './components/header'
import { useTransition, animated } from "react-spring";
import "./styles/styles.css"


const App = () => {
    const [show] = useState(true)
    const [show2] =useState(true)
    const lefttransitions = useTransition(show, null, {
    delay: 5,
    from: { transform: 'translate3d(-600px,0,0)' },
    enter: { transform: 'translate3d(0, 0px, 0)' },
    })

    const righttransitions = useTransition(show2, null, {
      delay: 5,
      from: { transform: 'translate3d(700px,0,0)' },
      enter: { transform: 'translate3d(0, 0px, 0)' },
      })

  return (
    <div className="App">
      <div className="d-flex flex-column justify-content-center application">
      <header className="App-header">
      </header>
      <Header/>
      {/* NAVAGATION */}
      {/* <animated.div style={props}>HELLLLOOO</animated.div> */}
      <nav className="d-flex justify-content-end">
      <div className="d-flex flex-row justify-content-end align-items-center">
      <button className="mx-2">About Me</button>
      <button className="mx-2">Skills</button>
      <button className="mx-2">Portfolio</button>
      </div>
      </nav>
      {/* ABOUTME SECTION */}
      {lefttransitions.map(({ item, key, props }) =>item && 
        <animated.div key={key} style={props}>
        <div className="aboutmesection d-flex">
        <Name />
        </div>
        </animated.div>)}
      {/* SKILLS SECTION */}
      {righttransitions.map(({ item, key, props }) =>item && 
        <animated.div key={key} style={props}>
        <div className="skillssection d-flex justify-content-end">
        <Skills />
        </div>
        </animated.div>)}
      {/* PROJECTS SECTION */}
      <h1 className="text-center sectionheader">Projects</h1>
      <Projects />
      <footer className="mt-auto d-flex flex-column justify-content-center">
        <h4 className="text-center">Jkhauth copyright</h4>
        <h4 className="text-center">social media links here</h4>
      </footer>
      </div>
    </div>
  );
}

export default App;
