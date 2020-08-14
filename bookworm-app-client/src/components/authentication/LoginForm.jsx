import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {

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

    return (
        <>

            {/* // <Form onSubmit={handleSubmit}>
            //   <Form.Group controlId="formBasicUsername">
            //     <Form.Label>Email</Form.Label>
            //     <Form.Control
            //       type="username"
            //       placeholder="Username"
            //       value={username}
            //       name="username"
            //       onChange={handleChange}
            //       required
            //     />
            //   </Form.Group>
        
            //   <Form.Group controlId="formBasicPassword">
            //     <Form.Label>Password</Form.Label>
            //     <Form.Control
            //       type="password"
            //       placeholder="Password"
            //       value={password}
            //       name="password"
            //       onChange={handleChange}
            //       required
            //     />
            //   </Form.Group>
        
            //   <Button variant="primary" type="submit">
            //     Login
            //   </Button>
            // </Form> */}
            
        </>
    );
}

export default LoginForm