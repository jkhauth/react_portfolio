import React from 'react';


const ProjectItem = ({project}) => {

return (

<div className="d-flex mb-2 flex-column align-items-center justify-content-center projectdiv">
    <h2 className="text-center sectionheader">{project.projecttitle}</h2>
    <div className="d-flex flex-row flex-wrap">
    <img src="#" alt="project-pic"></img>
    <p className="text-center">{project.projectdescription}</p>
    </div>
    <h4>{project.languages}</h4>
    <a href={project.applicationurl}>Application Url</a>
    <a href={project.githuburl}>GitHub Url</a>
</div>

 )}

export default ProjectItem;