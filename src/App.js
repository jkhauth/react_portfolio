import React from 'react';
import Name from "./components/name"
import Projects from "./components/projects"
import Skills from './components/skill-abilities'
import Header from './components/header'
import {AnimatePresence} from 'framer-motion'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./styles/styles.css"


const App = () => {
//NAVIGATION TRANSITIONS
  return (
    <Router>
    <div className="App">
      <Header />
    <AnimatePresence exitBeforeEnter>
      <Switch>
      <Route path="/" exact component={Name}/>
      <Route path="/skills" component={Skills}/>
      <Route path="/Projects" component={Projects}/>
      </Switch>
    </AnimatePresence>
    </div>
    </Router>
  )
}

export default App;
