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
        <h1 className="text-right">John Hauth</h1>
        <h1 className="text-right">Software Developer</h1>
        <ul className="text-right">
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/skills">
            <li>Skills</li>
            </Link>
            <Link to="/projects">
            <li>Projects</li>
            </Link>
        </ul>
        </animated.div>
    ))
}

export default Header;