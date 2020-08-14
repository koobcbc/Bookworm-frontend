import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from './components/ApiConfig'

import Home from './components/routes/Home/Home'
import Registration from './components/authentication/Registration'
import LoginForm from './components/authentication/LoginForm'




const App = (props) => {
  let FormData = require('form-data');

  const [registeredUserInfo, setRegisteredUserInfo] = useState({})
  let formdata = new FormData();
  formdata.append("user[username]", registeredUserInfo.username);
  formdata.append("user[password]", registeredUserInfo.password);

  console.log('App - registeredUserInfo', registeredUserInfo)
  console.log(formdata)


  const handleSubmitFromApp = (input) => {
    console.log('handling submit from App - registeredUserInfo', input)
    setRegisteredUserInfo(input)
  };

  useEffect(()=>{
    if(registeredUserInfo.username !== undefined){
    let requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/users", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  }, [registeredUserInfo])




  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route path='/signup'render={(props) => <Registration {...props} handleSubmitFromApp={handleSubmitFromApp}/>} />
    </Switch>
  </div>
  );
}

export default withRouter(App);
