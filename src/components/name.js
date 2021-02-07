import React from 'react';
import picture from "../utils/professional.png"
import resume from "../utils/Resume.pdf"
import {motion} from 'framer-motion'
//ABOUT ME SECTION

const Name = () => {
const pageTransition = {
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opactity: 0,
        x: "-100vh"
    }
}
return (
<motion.div 
initial="out" animate="in" exit="out" variants={pageTransition}
className="namediv d-flex flex-column flex-wrap align-items-center justify-content-center mt-5 p-2">
    <div className="d-flex flex-row flex-wrap align-items-center justify-content-center p-2">
    <img className="img-fluid img-thumbnail px-3 py-3" src={picture} alt="responsive"></img>
    <div className="aboutmedescription d-flex flex-column">
    <h4 className="text-center slogan">Let's Build Something Together...</h4>
    <p className="text-justify px-3 mt-3">Hi I'm John! I am a web developer with strong business management experience and want to build a application with YOU. I'm seeking a role that will continue to allow me to build strong relationships with clients and provide an infinite drive for success.
I am currently obtaining a certification in Full Stack Development from the University of Pennsylvania. I am excited to increase my knowledge in the fundamentals and ethics of web development.
In my free time I enjoy making my own hot sauce, playing fantasy football, and reading any Batman comic I can! I enjoy meeting new people and exploring any new Mexican restaurant. Feel free to reach out and lets build something together!</p>
    <div className="d-flex flex-row flex-wrap justify-content-center">
    <a className="px-2" href={resume} download>Resume</a>
    <a className="px-2" href="mailto:jkhauth@gmail.com">Email</a>
    <a className="px-2" href="https://github.com/jkhauth">GitHub</a>
    <a className="px-2" href="https://www.linkedin.com/in/john-k-hauth/">LinkedIn</a>
    </div>
    </div>
    </div>
</motion.div>

 )}

export default Name;