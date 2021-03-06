import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = ({ handleSubmitForLoginFromHome }) => {
    
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
    })

    const handleChange = (event) => {
        //console.log("event", event.target.name, event.target.value);
        setUserInfo({
          ...userInfo,
          [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        // makes all the form input fields
        document.getElementById("login_form").reset();
        console.log('handling Submit' - userInfo) 
        e.preventDefault()
        handleSubmitForLoginFromHome(userInfo)
        setUserInfo({})
        
    }

    return (
            <Form onSubmit={handleSubmit} id="login_form">
                <Form controlId="formBasicUsername">
                    <Form.Label>Username / Email</Form.Label>
                    <Form.Control
                    type="username"
                    placeholder="Username / Email"
                    value={userInfo.username}
                    name="username"
                    onChange={handleChange}
                    required
                    />
                </Form>
        
                <Form controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password"
                    value={userInfo.password}
                    name="password"
                    onChange={handleChange}
                    required
                    />
                </Form>
        
                <br/>
                <Button variant="secondary" type="submit">
                    Login
                </Button>
            </Form>
            
    );
}

export default LoginForm