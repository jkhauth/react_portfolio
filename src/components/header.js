import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {

    const buttonStyle = {
        backgroundColor: "#104166",
        color: "white",
        borderRadius: "20px",
        border: "2px solid white",
        fontSize: "12px"
    }
    const headerstyle = {
        backgroundColor: "darkslategray"
    }
    return(
        <div style={headerstyle}>
        <h1 className="text-center mb-0">John Hauth</h1>
        <h3 className="text-center mb-0">Full-Stack</h3>
        <h3 className="text-center">Software Developer</h3>
        <div className="d-flex flex-row justify-content-center">
            <Link to="/">
            <button style={buttonStyle} className="mx-2">Home</button>
            </Link>
            <Link to="/aboutme">
            <button style={buttonStyle} className="mx-2">About Me</button>
            </Link>
            <Link to="/skills">
            <button style={buttonStyle} className="mx-2">Skills</button>
            </Link>
            <Link to="/projects">
            <button style={buttonStyle} className="mx-2">Projects</button>
            </Link>
        </div>
        <hr></hr>
        </div>
    )
}

export default Header;