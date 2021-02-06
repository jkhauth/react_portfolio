import React from 'react';
import Name from "./components/name"
import Projects from "./components/projects"
import "./styles/main.css"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-right">John Hauth</h1>
        <h3 className="text-right">Full-Stack Software Engineer</h3>
      </header>
      <nav className="d-flex justify-content-end">
      <div className="d-flex flex-row justify-content-end align-items-center">
      <button className="mx-2">About Me</button>
      <button className="mx-2">Portfolio</button>
      <button className="mx-2">Skills</button>
      </div>
      </nav>
      <Name />
      <Projects />
      <footer className="mt-auto d-flex flex-column justify-content-center">
        <h4 className="text-center">Jkhauth copyright</h4>
        <h4 className="text-center">social media links here</h4>
      </footer>
    </div>
  );
}

export default App;
