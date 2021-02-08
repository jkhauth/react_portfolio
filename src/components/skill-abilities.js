import React from 'react';
import {motion} from 'framer-motion'
import picture from "../utils/computer.gif"
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
return (
<motion.div initial="out" animate="in" exit="out" variants={pageTransition} className="d-flex flex-column flex-wrap align-items-center justify-content-center px-2 mt-5">
    <div className="d-flex flex-column skillscontent p-2">
    <h1 className="text-center sectionheader skillshead">Skills & Abilites</h1>
    <div className="d-flex flex-row flex-wrap">
    <img className="img-fluid px-2" src={picture} alt="computer gif credit to the curious brain"></img>
    <div className="d-flex flex-column px-2">
    <h2 className="text-center">This are my skills</h2>
    <h4 className="text-center">responsive web pages</h4>
    </div>
    </div>
    </div>
</motion.div>

 )}

export default Skills;