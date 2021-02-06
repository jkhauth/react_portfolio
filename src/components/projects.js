import React from 'react';
import ProjectItem from "./projectitem"
import projectAPI from "../utlis/projectAPI.json"
const projectData = projectAPI
const project = projectData.projects
//MAIN PROJECTS SECTION

const Projects = () => {

return (
<div className="d-flex flex-column align-items-center justify-content-center mt-5">
    <h1 className="text-center sectionheader">Projects:</h1>
    {project.map((project) => (<ProjectItem key={project.id} project={project}/>))}
</div>

 )}

export default Projects;