import React from 'react';


const ProjectItem = ({project}) => {

    const projectimgstyle = {
        maxWidth: "250px",
        border: "1px solid white"
      };

    const buttonStyle = {
    backgroundColor: "#104166",
    color: "white",
    borderRadius: "20px",
    border: "2px solid white",
    fontSize: "12px"
    }
    
return (

<div className="d-flex mb-3 flex-column align-items-center justify-content-center projectdiv mx-3 p-2">
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
    <img style={projectimgstyle} className="img-fluid projectimg mx-2" src={project.imagesrc} alt="project-pic"></img>
    <div className="d-flex flex-column align-items-center justify-content-center">
    <h2 className="text-center sectionheader">{project.projecttitle}</h2>
    <div className="d-flex flex-row">
    <i className="fab fa-html5 mx-2"></i>
    <i className="fab fa-css3-alt mx-2"></i>
    <i className="fab fa-js-square mx-2"></i>
    <button style={buttonStyle} href={project.applicationurl}>Application Url</button>
    <button style={buttonStyle} href={project.githuburl}>GitHub Url</button>
    </div>
    <div className="d-flex projectdescription">
    <p className="text-justify mb-0">{project.projectdescription}</p>
    </div>

    </div>
    </div>
</div>

 )}

export default ProjectItem;