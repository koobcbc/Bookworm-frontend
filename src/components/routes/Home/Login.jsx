import React, { useState, useEffect } from 'react';
import LoginForm from '../../authentication/LoginForm'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [input, setInput] = useState({
        user: {
          username: "",
          password: ""
        }
      });

    const [errorStatus, setErrorStatus] = useState("");


    const handleSuccessfulAuth = (data) => {
        props.handleLogin(data);
        props.history.push("/");
        window.location.reload();
    };

    const handleChange = (event) => {
        //console.log("event", event.target.name, event.target.value);
        setInput({
          ...input,
          [event.target.name]: event.target.value,
        });
      };

    // Handling POST method for login
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(res => res.json())
        .then(json => {
            // For staying logged-in, we are using browser local storage
            localStorage.setItem("token", json.token)
            props.handleLogin(json.user)
            console.log('handlesubmit-login', json)
        })
        setUsername("")
        setPassword("")
    }

    // 
    // 
    
    //   const handleSubmit = (event) => {
    //     //console.log("form submitted");
    //     event.preventDefault();
    //     if (input.password == input.password_confirmation){
    //     axios
    //       .post(
    //         `${apiUrl}/users`,
    //         {
    //           user: {
    //             username: input.username,
    //             password: input.password
    //           },
    //         },
    //         { withCredentials: true }
    //       )
    //       .then((response) => {
    //         //console.log("registration log", resonse);
    //         if (response.data.status === "created") {
    //           handleSuccessfulAuth(response.data);
    //           window.location.reload();
    //           props.history.push(`/`);
    //         } else {
    //           setErrorStatus(respnse.data.status);
    //         }
    //       })
    //       .catch((response) => {
    //         console.log("registration error", response);
    //         // console.log(response.data.status);
    //         // setErrorStatus(response.data.status);
    //       });
    //     }
    //     else {
    //         setInput({user: {
    //             username: "",
    //             password: "",
    //             password_confirmation: "",
    //           }})
    //     }
    //   };

      return(
          <LoginForm username={username} password={password} handleChange={handleChange} handleSubmit={handleSubmit}/>
      )
}

export default Login