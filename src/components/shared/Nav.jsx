import React from 'react';
import { NavLink, useHistory, Link } from 'react-router-dom'
import titlelogo from '../../bookend-logo-title.png'

import logo from '../../bookworm_logo.png';


const Nav = () => {
    const history = useHistory();

    function refreshPage() {
        localStorage.clear();
        window.location.href = '/';
      }

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/'><img src={titlelogo} display="inline-block" height="45px" /></Link>
                <NavLink to="/main/mypage" className="navbar-brand"></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item searchBookNav">
                            <NavLink to='/main/search' className="nav-link">Search a Book</NavLink>
                        </li>
                        <li className="nav-item mypageNav">
                            <NavLink to='/main/mypage' className="nav-link">My Page</NavLink>
                        </li>
                        <li className="nav-item aboutNav">
                            <NavLink to='/about' className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item logoutNav">
                            <NavLink to='/' onClick={refreshPage} className="nav-link">Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <br/>
            
        </>
    )
}

export default Nav