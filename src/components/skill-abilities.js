import React from 'react';
import {motion} from 'framer-motion'
import picture from "../utils/professional.png"
//MAIN PROJECTS SECTION

const Skills = () => {
const pageTransition = {
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opactity: 0,
        x: "-100vh"
    }
}

const badestyle = {
    height: "auto",
    width: "65px"
}
return (
<motion.div initial="out" animate="in" exit="out" variants={pageTransition} className="d-flex flex-column flex-wrap align-items-center justify-content-center px-2 mt-3">
    <div className="d-flex flex-column justify-content-center align-items-center skillscontent p-2">
    <h1 className="text-center sectionheader skillshead">Skills & Abilites</h1>
    <div className="d-flex flex-row justify-content-center flex-wrap">
    <img className="img-fluid img-thumbnail px-3 py-3" src={picture} alt="computer gif credit to the curious brain"></img>
    <div className="d-flex flex-column px-2">
    <h2 className="text-center">This are my skills</h2>
    <h4 className="text-center">Languages:</h4>
    <div className="d-flex flex-column align-items-center">
    <img style={badestyle} alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=plastic&logo=react&logoColor=%2361DAFB"/>
    <img style={badestyle} alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=plastic&logo=node.js&logoColor=white"/>
    <img style={badestyle} alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=plastic&logo=javascript&logoColor=%23F7DF1E"/>
    <img style={badestyle} alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=plastic&logo=html5&logoColor=white"/>
    <img style={badestyle} alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=plastic&logo=css3&logoColor=white"/>
    </div>
    </div>
    </div>
    </div>
</motion.div>

 )}

export default Skills;