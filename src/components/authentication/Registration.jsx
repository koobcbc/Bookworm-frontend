import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import apiUrl from '../ApiConfig'
import axios from 'axios'


const Registration = ({ handleSubmitFromApp }) => {
  
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
        }
        else {
            console.log('password matching', passwordMatch)
            setPasswordMatch(false)
        }
    }
    
    console.log(userInfo)
    console.log(passwordMatch)

    return (
        <>
            <Form onSubmit={handleSubmit} id="registration_form">
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="username"
                    placeholder="Username"
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

            {passwordMatch ? null :
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
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