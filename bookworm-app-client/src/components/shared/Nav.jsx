import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return(
        <>
            <div className="small-screen">
                <nav>
                    <NavLink to='/main/search'>Search a Book</NavLink>
                    <NavLink to='/main/mypage'>My Page</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/'>Log Out</NavLink>
                </nav>
            </div>
            <div className="large-screen">
                <NavLink to='/main/mypage'>My Page</NavLink>
                <NavLink to='/'>Log Out</NavLink>
                <nav>
                    <NavLink to='/main/search'>Search a Book</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </nav>
            </div>
            
        </>
    )
}

export default Nav