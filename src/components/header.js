import React, {useState} from 'react';
import { useTransition, animated } from "react-spring";
import {Link} from 'react-router-dom'

const Header = () => {
    const [show] = useState(true)
    const transitions = useTransition(show, null, {
    delay: 5,
    from: { transform: 'translate3d(0,-300px,0)' },
    enter: { transform: 'translate3d(0, 0px, 0)' },
    })
    return(transitions.map(({ item, key, props }) =>item && 
        <animated.div key={key} style={props}>
        <h1 className="text-center">John Hauth</h1>
        <h3 className="text-center">Full-Stack Software Developer</h3>
        <div className="d-flex flex-row justify-content-center">
            <Link to="/">
            <button className="mx-2">Home</button>
            </Link>
            <Link to="/skills">
            <button className="mx-2">Skills</button>
            </Link>
            <Link to="/projects">
            <button className="mx-2">Projects</button>
            </Link>
        </div>
        </animated.div>
    ))
}

export default Header;