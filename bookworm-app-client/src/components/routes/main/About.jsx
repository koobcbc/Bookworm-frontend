import React from 'react';
import Nav from '../../shared/Nav'
import Footer from '../../shared/Footer';

const About = () => {
    document.getElementsByClassName("aboutNav").className="nav-item active aboutNav"

    return(
        <>
            <Nav/>
            <h1>About Bookend</h1>
            <br/>
            <br/>
            <p className="about">This is an app for the user to search up for the book information and also save and keep track of what kind of books they have read.
            In the future, I plan to add more features like adding books to favorites, and rating and writing reviews for the books they have read.</p>
            <Footer/>
        </>
    )
}

export default About