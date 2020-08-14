import React from 'react'
import logo from '../../../bookworm_logo.png'
import { Link } from 'react-router-dom'

import LoginForm from '../../authentication/LoginForm'

import Button from 'react-bootstrap/Button';

const Home = ( ) => {
    return(
        <>
            <h1>BOOKWORM</h1>
            <img src={logo} width="200px"/>
            <LoginForm />
            <Link to="/signup"><Button>Sign Up</Button></Link>
        </>
    )
}

export default Home