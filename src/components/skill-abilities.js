import React from 'react';
import {motion} from 'framer-motion'
import picture from "../utils/professional.png"
//MAIN PROJECTS SECTION

const Skills = () => {
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

const badestyle = {
    height: "auto",
    width: "65px"
}
const badestyle2 = {
    height: "auto",
    width: "84px"
}
const badestyle3 = {
    height: "auto",
    width: "120px"
}

const textbox = {
    maxWidth: "530px"
}

const imgstyle = {
    height: "auto"
}

return (
<motion.div initial="out" animate="in" exit="out" variants={pageTransition} className="d-flex flex-column flex-wrap align-items-center justify-content-center px-2 mt-3">
    <div className="d-flex flex-column justify-content-center align-items-center skillscontent p-2">
    <h1 className="text-center sectionheader skillshead">Skills & Abilites</h1>
    <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
    <img style={imgstyle} className="img-fluid img-thumbnail px-3 py-3" src={picture} alt="computer gif credit to the curious brain"></img>
    <div className="d-flex flex-column px-2 justify-content-center">
    <h2 className="text-center skillshead"><u>Business meets tech...</u></h2>
    <div style={textbox}>
    <p className="text-justify">Over the past several years, I have held various leadership positions within the hospitality industry. Hard work, determination, and a passion for customer service is what has afforded me these positions and learning opportunities. In each new role, I dedicated myself to bringing the best customer service to our patrons, hitting my company and personal goals every time they were assigned.</p> <p> I am grateful for this time in this industry as it  taught me how to be a team player and adaptablity when situations become difficult. While I love working in teams and providing mentorship to my colleagues, I also shine when working independently. I hold myself accountable to producing the highest quality work.</p>
    </div>
    <div className="d-flex flex-wrap flex-row justify-content-center">
    <div className="d-flex flex-column flex-wrap mx-2">
    <h4>Education:</h4>
    <h5><u>East Stroudsburg University:</u></h5> 
    <h6>Bachelors of Science 2011-2016</h6>
    <h5><u>University of Philadelphia:</u></h5>
    <h6>Full-Stack Development 2020-2021</h6>
    </div>
    <div className="d-flex flex-column justify-content-center">
    <div className="d-flex flex-wrap flex-row">
    {/* Framework section */}
    <div className="d-flex flex-column align-items-center mx-2 ">
    <h4 className="text-center font-italic"><u>Frameworks:</u></h4>
    <img style={badestyle} alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=plastic&logo=react&logoColor=%2361DAFB"/>
    <img style={badestyle} alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=plastic&logo=node.js&logoColor=white"/>
    <img style={badestyle} alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=plastic"/>
    <img style={badestyle} alt="jQuery" src="https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=plastic&logo=jquery&logoColor=white"/>
    <img style={badestyle} alt="SASS" src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=plastic&logo=SASS&logoColor=white"/>
    </div>
    <div className="d-flex flex-column align-items-center mb-3">
    {/* Languages section */}
    <h4 className="text-center font-italic"><u>Languages:</u></h4>
    <img style={badestyle2} alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=plastic&logo=javascript&logoColor=%23F7DF1E"/>
    <img style={badestyle} alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=plastic&logo=html5&logoColor=white"/>
    <img style={badestyle} alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=plastic&logo=css3&logoColor=white"/>
    </div>
    </div>
    <div className="d-flex flex-wrap flex-row">
    {/* Database section */}
    <div className="d-flex flex-column align-items-center mx-2 mb-2">
    <h4 className="text-center font-italic"><u>Databases:</u></h4>
    <img style={badestyle2} alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=plastic&logo=node.js&logoColor=white"/>
    <img style={badestyle2} alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=plastic&logo=mongodb&logoColor=white"/>
    <img style={badestyle} alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?&style=plastic&logo=mysql&logoColor=white"/>
    </div>
    <div className="d-flex flex-column align-items-center">
    {/* Design section */}
    <h4 className="text-center font-italic"><u>Design:</u></h4>
    <img style={badestyle} alt="Adobe XD" src="https://img.shields.io/badge/adobe%20xd%20-%23FF26BE.svg?&style=plastic&logo=adobe%20xd&logoColor=white"/>
    <img style={badestyle3} alt="Adobe Photoshop" src="https://img.shields.io/badge/adobe%20photoshop%20-%2331A8FF.svg?&style=plastic&logo=adobe%20photoshop&logoColor=white"/>
    <img style={badestyle} alt="Figma" src="https://img.shields.io/badge/figma%20-%23F24E1E.svg?&style=plastic&logo=figma&logoColor=white"/>
    </div>
    </div>
    <div className="d-flex flex-column align-items-center">
    {/* Operating section */}
    <h4 className="text-center font-italic"><u>Operating System:</u></h4>
    <img style={badestyle2} alt="Windows 10" src="https://img.shields.io/badge/Windows-0078D6?style=plastic&logo=windows&logoColor=white" />
    <img style={badestyle2} alt="Android" src="https://img.shields.io/badge/Android-3DDC84?style=plastic&logo=android&logoColor=white" />
    <img style={badestyle} alt="IOS" src="https://img.shields.io/badge/iOS-000000?style=plastic&logo=ios&logoColor=white" />
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
</motion.div>

 )}

export default Skills;