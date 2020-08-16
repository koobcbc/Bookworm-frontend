import React, { useState, useEffect } from 'react'
import logo from '../../../bookworm_logo.png'
import { Link, useHistory } from 'react-router-dom'

import LoginForm from '../../authentication/LoginForm'

import Button from 'react-bootstrap/Button';

const Home = ({ handleUserInfoFromApp }) => {

    const history = useHistory();
    const [loginInfo, setLoginInfo] = useState({})
    const [loginSuccessful, setLoginSuccessful] = useState(true)

    // FOR LOGIN---------------------------VV
    const handleSubmitForLoginFromHome = (input) => {
        console.log('handling submit from Home - LoginUserInfo', input)
        setLoginInfo(input)
    }

    let LoginFormdata = new FormData();
    LoginFormdata.append("user[username]", loginInfo.username);
    LoginFormdata.append("user[password]", loginInfo.password);

    //login function after submission
    useEffect(()=>{
        if(loginInfo.username !== undefined){
        let requestOptions = {
        method: 'POST',
        body: LoginFormdata,
        redirect: 'follow'
        };
        
        fetch("http://localhost:3000/users/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.status==200){
                authorization(result.token, result.user.id)
            }
            else{
                setLoginSuccessful(false)
            }
        })
        .catch(error => console.log('error', error));
        }
    }, [loginInfo])

    // authorization function (after login) --> GET user info using id and pass it to the App
    const authorization = (token, id) => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`http://localhost:3000/users/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            handleUserInfoFromApp(result)
        })
        .catch(error => console.log('error', error));
        history.push("/main/mypage");
    }

    return(
        <>
            <h1>BOOKWORM</h1>
            <img src={logo} width="200px"/>
            <LoginForm handleSubmitForLoginFromHome={handleSubmitForLoginFromHome}/>
            <Link to="/signup"><Button>Sign Up</Button></Link>
            {loginSuccessful ? null :
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Error! </strong> Username/Password Incorrect.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div> 
            }
        </>
    )
}

export default Home