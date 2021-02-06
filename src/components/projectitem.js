import { logDOM } from '@testing-library/react';
import React from 'react';
// import dmmlogo from "../utlis/images/dmm-logo.png"
// src\utlis\images\dmm-logo.png
const ProjectItem = ({project}) => {

return (

<div className="d-flex mb-3 flex-column align-items-center justify-content-center projectdiv mx-3 p-2">
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
    <img className="img-fluid projectimg mx-2" src={project.imagesrc} alt="project-pic"></img>
    <div className="d-flex flex-column align-items-center justify-content-center">
    <h2 className="text-center sectionheader">{project.projecttitle}</h2>
    <div className="d-flex projectdescription">
    <p className="text-justify mb-0">{project.projectdescription}</p>
    </div>
    <h4 className="text-center">Languages used:</h4>
    <h4 className="text-center">{project.languages}</h4>
    <a href={project.applicationurl}>Application Url</a>
    <a href={project.githuburl}>GitHub Url</a>
    </div>
    </div>
</div>

 )}

export default ProjectItem;