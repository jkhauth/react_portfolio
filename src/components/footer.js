import React from 'react';
import resume from "../utils/Resume.pdf"

const Footer = () => {

    const buttonStyle = {
        backgroundColor: "#104166",
        color: "white",
        borderRadius: "20px",
        border: "2px solid white",
        fontSize: "12px",
        height: "fit-content"
        }
    const dividerstyle = {
        fontSize: "20px"
    }
    const footerstyle = {
        marginTop: "50px"
    }
    return(
        <div style={footerstyle} className="footer">
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <a style={buttonStyle} className="px-2 mx-2" href={resume} download>Resume</a>
        <p style={dividerstyle} className="mb-0">|</p>
        <a style={buttonStyle} className="px-2 mx-2" href="mailto:jkhauth@gmail.com">Email</a>
        <p style={dividerstyle} className="mb-0">|</p>
        <a style={buttonStyle} className="px-2 mx-2" href="https://github.com/jkhauth">GitHub</a>
        <p style={dividerstyle} className="mb-0">|</p>
        <a style={buttonStyle} className="px-2 mx-2" href="https://www.linkedin.com/in/john-k-hauth/">LinkedIn</a>
        </div>
        <p className="text-center mb-0"><u>this jkhauth app was created with react</u></p>
        </div>
    )
}

export default Footer;