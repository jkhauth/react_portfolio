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
        <div style={footerstyle} className="footer mb-2">
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <button style={buttonStyle} className="px-2 mx-2" href={resume} download>Resume</button>
        <p style={dividerstyle} className="mb-0">|</p>
        <button style={buttonStyle} className="px-2 mx-2" href="mailto:jkhauth@gmail.com">Email</button>
        <p style={dividerstyle} className="mb-0">|</p>
        <button style={buttonStyle} className="px-2 mx-2" href="https://github.com/jkhauth">GitHub</button>
        <p style={dividerstyle} className="mb-0">|</p>
        <button style={buttonStyle} className="px-2 mx-2" href="https://www.linkedin.com/in/john-k-hauth/">LinkedIn</button>
        </div>
        </div>
    )
}

export default Footer;