import React from 'react';
import Home from "./components/home"
import Name from "./components/name"
import Projects from "./components/projects"
import Skills from './components/skill-abilities'
import Header from './components/header'
import {AnimatePresence} from 'framer-motion'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import "./styles/styles.css"


const App = () => {

  const style = {
    width: "100%",
    height: "100%"
  };

  return (
    <Router>
    <div style={style} className="App">
      <Header />
    <AnimatePresence exitBeforeEnter>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/aboutme" component={Name}/>
      <Route path="/skills" component={Skills}/>
      <Route path="/Projects" component={Projects}/>
      </Switch>
    </AnimatePresence>
    </div>
    </Router>
  )
}

export default App;
