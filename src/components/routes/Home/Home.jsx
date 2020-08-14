import React from 'react'
import logo from '../../bookworm_logo.png'
import { Link } from 'react-router-dom'

import Login from './Login'

import Button from 'react-bootstrap/Button';

const Home = () => {
    return(
        <>
            <h1>BOOKWORM</h1>
            <a><img src={logo} width="200px"/></a>
            {/* <Login /> */}
            <Link to="/signup"><Button>Sign Up</Button></Link>
        </>
    )
}

export default Home