import React from 'react';
import ProjectItem from "./projectitem"
import projectAPI from "../utils/projectAPI.json"
import { Fade } from "react-awesome-reveal";
const projectData = projectAPI
const project = projectData.projects
//MAIN PROJECTS SECTION

const Projects = () => {

return (
<div className="d-flex flex-row flex-wrap align-items-center justify-content-center mt-3">
    <div className="d-flex flex-column justify-content-center">
    <Fade>
    <h1 className="sectionheader text-center">Projects</h1>
    {project.map((project) => (<ProjectItem key={project.id} project={project}/>))}
    </Fade>
    </div>
</div>

 )}

export default Projects;