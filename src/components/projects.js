import React from 'react';
import ProjectItem from "./projectitem"
import projectAPI from "../utils/projectAPI.json"
import {motion} from 'framer-motion'
const projectData = projectAPI
const project = projectData.projects
//MAIN PROJECTS SECTION

const Projects = () => {
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
<motion.div initial="out" animate="in" exit="out" variants={pageTransition} className="d-flex flex-row flex-wrap align-items-center justify-content-center mt-5">
    <div className="d-flex flex-column justify-content-center">
    <h1 className="sectionheader text-center">Projects</h1>
    {project.map((project) => (<ProjectItem key={project.id} project={project}/>))}
    </div>
</motion.div>

 )}

export default Projects;