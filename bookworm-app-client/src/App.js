import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch, withRouter, Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import apiUrl from './components/ApiConfig'

import Home from './components/routes/home/Home'
import Registration from './components/authentication/Registration'
import LoginForm from './components/authentication/LoginForm'
import Footer from './components/shared/Footer'
import Mypage from './components/routes/main/mypage/Mypage';


const App = (props) => {
  const history = useHistory();

  let FormData = require('form-data');

  const [registeredUserInfo, setRegisteredUserInfo] = useState({})
  const [userInfo, setUserInfo] = useState({})
  const [authenInfo, setAuthenInfo] = useState({token:"", id:""})

  let RegistrationFormdata = new FormData();
  RegistrationFormdata.append("user[username]", registeredUserInfo.username);
  RegistrationFormdata.append("user[password]", registeredUserInfo.password);

  console.log('App - registeredUserInfo', registeredUserInfo)
  console.log(RegistrationFormdata)

  // FOR REGISTRATION-----------------------VV
  const handleSubmitFromApp = (input) => {
    console.log('handling submit from App - registeredUserInfo', input)
    setRegisteredUserInfo(input)
  };

  useEffect(()=>{
    if(registeredUserInfo.username !== undefined){
    let requestOptions = {
      method: 'POST',
      body: RegistrationFormdata,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/users", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      history.push("/");
    }
  }, [registeredUserInfo])
  // ----------------------------------registration END ^

  console.log('App - userinfo', userInfo)
  console.log('App - autheninfo', authenInfo)

  // -------------HANDLING USER INFO AFTER LOGIN AUTHENTICATION FROM LOGINFORM => HOME ----
  const handleUserInfoFromApp = (input) => {
    // console.log('handle user info from app - ', info)
    setUserInfo(input)
  }

  const handleAuthenInfoFromApp = (token, id) => {
    // console.log('handle user info from app - ', info)
    setAuthenInfo({token:{token}, id:{id}})
  }

  // -------------handling user info END ^

  return (
    <div className="App">
    <Switch>
      <Route exact path='/' render={(props) => <Home {...props} 
                              handleUserInfoFromApp={handleUserInfoFromApp} 
                              handleAuthenInfoFromApp={handleAuthenInfoFromApp}/>} />
      <Route path='/signup'render={(props) => <Registration {...props} 
                              handleSubmitFromApp={handleSubmitFromApp}/>} />
      <Route path='/main/mypage'render={(props) => <Mypage {...props} 
                              userInfo={userInfo}/>} /> 
    </Switch>
    <Footer />
  </div>
  );
}


export default withRouter(App);
