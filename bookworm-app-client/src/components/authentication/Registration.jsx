import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import apiUrl from '../ApiConfig'
import axios from 'axios'


const Registration = ({ handleChange, handleSubmit }) => {
  
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })

    const handleChange = (e) => {
        console.log('handling change in ByCountry input state', e.target.value)
        const userInput = e.target.value
        setUserInfo(userInput)
    }
    
    return (
        <>
            <Form onSubmit={handleSubmit}>
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
    </>
  );
};
export default Registration;