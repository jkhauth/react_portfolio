import React from 'react';
import ProjectItem from "./projectitem"
import projectAPI from "../utils/projectAPI.json"
const projectData = projectAPI
const project = projectData.projects
//MAIN PROJECTS SECTION

const Projects = () => {

return (
<div className="d-flex flex-wrap align-items-center justify-content-center mt-5">
    {project.map((project) => (<ProjectItem key={project.id} project={project}/>))}
</div>

 )}

export default Projects;