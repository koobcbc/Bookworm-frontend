import React, { useState, useEffect } from 'react';
import textlogo from '../../../bookend_logo_text.png';
import logo from '../../../bookend_logo.png';

import { Link, useHistory } from 'react-router-dom';
import apiUrl from '../../../components/ApiConfig';
import Button from 'react-bootstrap/Button';

import LoginForm from '../../authentication/LoginForm'



const Home = ({ handleUserInfoFromApp, handleAuthenInfoFromApp }) => {

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
        
        fetch(`${apiUrl}/users/login`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.status==200){
                authorization(result.token, result.user.id)
                // handleAuthenInfoFromApp(result.token, result.user.id)
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

        let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`${apiUrl}/users/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            handleUserInfoFromApp(result)
        })
        .catch(error => console.log('error', error));
        history.push("/main/mypage");
    }

    return(
        <>
            <nav class="navbar navbar-light bg-light">
                <img src={logo} display="inline-block" width="1px"/>
                <Link to="/" class="navbar-brand login-brand">Bookend</Link>
                <Link to="/signup"><button type="button" class="btn btn-outline-secondary">Sign Up</button></Link>
            </nav>
            <br/>
            <img src={textlogo} display="inline-block" width="500px"/>
            <br/>
            <LoginForm handleSubmitForLoginFromHome={handleSubmitForLoginFromHome}/>
            {loginSuccessful ? null :
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Error! </strong> Username/Password Incorrect.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div> 
            }
        </>
    )
}

export default Home