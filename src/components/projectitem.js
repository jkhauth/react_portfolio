import React from 'react';

const ProjectItem = ({project}) => {

return (

<div className="d-flex mb-3 flex-column align-items-center justify-content-center projectdiv mx-3 p-2">
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
    <img className="img-fluid projectimg mx-2" src={project.imagesrc} alt="project-pic"></img>
    <div className="d-flex flex-column align-items-center justify-content-center">
    <h2 className="text-center sectionheader">{project.projecttitle}</h2>
    <div className="d-flex flex-row">
    <i class="fab fa-html5 mx-2"></i>
    <i class="fab fa-css3-alt mx-2"></i>
    <i class="fab fa-js-square mx-2"></i>
    </div>
    <div className="d-flex projectdescription">
    <p className="text-justify mb-0">{project.projectdescription}</p>
    </div>
    <a href={project.applicationurl}>Application Url</a>
    <a href={project.githuburl}>GitHub Url</a>
    </div>
    </div>
</div>

 )}

export default ProjectItem;