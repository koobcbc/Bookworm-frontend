import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import apiUrl from '../ApiConfig'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';
import logo from '../../bookend_logo.png';
import textlogo from '../../bookend_logo_text.png';
import titlelogo from '../../bookend-logo-title.png'




const Registration = ({ handleSubmitFromApp }) => {
  
    const history = useHistory();

    const [passwordMatch, setPasswordMatch] = useState(true)

    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })

    const handleChange = (event) => {
        //console.log("event", event.target.name, event.target.value);
        setUserInfo({
          ...userInfo,
          [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        document.getElementById("registration_form").reset();
        console.log('handling Submit' - userInfo) 
        e.preventDefault()
        if (userInfo.password === userInfo.password_confirmation){
            handleSubmitFromApp(userInfo)
            setUserInfo({})
            history.push("/");
        }
        else {
            console.log('password matching', passwordMatch)
            setPasswordMatch(false)
        }
    }
    
    // console.log(userInfo)
    // console.log(passwordMatch)

    return (
        <>
            <nav class="navbar navbar-light bg-light">
                <img src={titlelogo} display="inline-block" height="45px"/>
                <Link to="/" class="navbar-brand login-brand"></Link>
                <Link to="/"><button type="button" class="btn btn-outline-secondary">Back to Log In</button></Link>
            </nav>
            <br/>
            <img src={textlogo} display="inline-block" width="500px"/>
            <br/>
            <h3>Get Started With Bookend</h3>
            <p>Sign up to discover cool features of Bookend</p>
            <Form onSubmit={handleSubmit} id="registration_form">
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username / Email</Form.Label>
                    <Form.Control
                    type="username"
                    placeholder="Username / Email"
                    value={userInfo.username}
                    name="username"
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    value={userInfo.password}
                    name="password"
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                    Password Confirmation
                    </Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password Confirmation"
                    type="password"
                    value={userInfo.password_confirmation}
                    name="password_confirmation"
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <br/>
            {passwordMatch ? null :
            <div class="alert alert-warning alert-dismissible fade show" role="alert" id="alert-box">
                <strong>Error! </strong> Password Not Matching.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div> 
            }
    </>
  );
};
export default Registration;