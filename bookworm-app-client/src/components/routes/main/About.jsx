import React from 'react';
import Nav from '../../shared/Nav'

const About = () => {
    document.getElementsByClassName("aboutNav").className="nav-item active aboutNav"

    return(
        <>
            <Nav/>
        </>
    )
}

export default About