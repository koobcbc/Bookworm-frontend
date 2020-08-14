import React from 'react'
import logo from '../../../bookworm_logo.png'
import { Link } from 'react-router-dom'

import Login from './Login'

import Button from 'react-bootstrap/Button';

const Home = ( ) => {
    return(
        <>
            <h1>BOOKWORM</h1>
            <img src={logo} width="200px"/>
            <Login />
            <Link to="/signup"><Button>Sign Up</Button></Link>
        </>
    )
}

export default Home