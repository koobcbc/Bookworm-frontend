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
import BookInfo from './components/routes/main/search/BookInfo'
import SearchBooks from './components/routes/main/search/SearchBooks';
import About from './components/routes/main/About'
import AddProfile from './components/routes/main/mypage/AddProfile';
import Main from './components/routes/main/Main';


const App = (props) => {
  const history = useHistory();

  let FormData = require('form-data');

  const [registeredUserInfo, setRegisteredUserInfo] = useState({})
  const [userInfo, setUserInfo] = useState({})
  const [authenInfo, setAuthenInfo] = useState({token:"", id:""})

  let RegistrationFormdata = new FormData();
  RegistrationFormdata.append("user[username]", registeredUserInfo.username);
  RegistrationFormdata.append("user[password]", registeredUserInfo.password);

  // console.log('App - registeredUserInfo', registeredUserInfo)
  // console.log(RegistrationFormdata)

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
  // ----------END-----------------registration END ^

 

  // HANDLING USER INFO AFTER LOGIN AUTHENTICATION FROM LOGINFORM => HOME ----
  const handleUserInfoFromApp = (input) => {
    // console.log('handle user info from app - ', info)
    setUserInfo(input)
  }

  const handleAuthenInfoFromApp = (token, id) => {
    // console.log('handle user info from app - ', info)
    setAuthenInfo({token:{token}, id:{id}})
  }

  // --------END-----handling user info END ^

  // SEARCHED BOOKS INFO PASSED FROM SearchBooks.jsx through this function
  const [keyword, setKeyword] = useState({})
  const handleSubmitFromAppSearchingKeyword = (input) => {
    // console.log('App-handlesubmit keyword', input)
    setKeyword(input)
  }

  // HANDLING ADDING USER PROFILE (passing up from AddProfile) --------------------
  const [userProfile, setUserProfile] = useState({})
  const handleSubmitForSetProfileFromApp = (input) => {
    setUserProfile(input)
  }

  // HANDLING EDITING PROFILE (passing up from EditProfile)
  const [submittedUpdatedProfile, setSubmittedUpdatedProfile] = useState({})
  const handleSubmitForUpdatedProfileFromApp = (input) => {
    setSubmittedUpdatedProfile(input)
  }
  // 

  const [updatedProfile, setUpdatedProfile] = useState({})
    // UPDATING USER PROFILE (for both adding, editing (used before updating userInfo))
  const updateUserProfileFromApp = (input) => {
    setUpdatedProfile(input)
  }

  console.log('App - userinfo', userInfo)
  console.log('App - autheninfo', authenInfo)
  console.log('app - updatedProfile', updatedProfile)


  // add book to my books
  const [selectedBookisbn, setSelectedBookisbn] = useState({isbn:"",
                                                            title:"",
                                                            image_url:""})

  const handleClickPassIsbnToApp = (isbn, title, image_url) => {
    console.log('handleclickpassisbntoapp', isbn, title, image_url)
    setSelectedBookisbn({isbn:isbn, title:title, image_url:image_url})
  }


  return (
    <div className="App">
      <div id="content-wrap">
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} 
                                  handleUserInfoFromApp={handleUserInfoFromApp} 
                                  handleAuthenInfoFromApp={handleAuthenInfoFromApp}/>} />
          <Route path='/signup' render={(props) => <Registration {...props} 
                                  handleSubmitFromApp={handleSubmitFromApp}/>} />
          <Route path='/main' render={(props) => <Main {...props} 
                                  userProfile={userProfile}
                                  userInfo={userInfo}
                                  handleSubmitFromAppSearchingKeyword={handleSubmitFromAppSearchingKeyword}
                                  handleSubmitForSetProfileFromApp={handleSubmitForSetProfileFromApp}
                                  keyword={keyword}
                                  handleSubmitFromApp={handleSubmitFromApp}
                                  updateUserProfileFromApp={updateUserProfileFromApp}
                                  updatedProfile={updatedProfile}
                                  authenInfo={authenInfo}
                                  handleUserInfoFromApp={handleUserInfoFromApp}
                                  submittedUpdatedProfile={submittedUpdatedProfile}
                                  handleSubmitForUpdatedProfileFromApp={handleSubmitForUpdatedProfileFromApp}
                                  handleClickPassIsbnToApp={handleClickPassIsbnToApp}
                                  selectedBookisbn={selectedBookisbn}
                                  setSelectedBookisbn={setSelectedBookisbn}
                                  />} />
          {/* <Route path='/main/mypage/add-profile' render={(props) => <AddProfile {...props} 
                                  handleSubmitForLoginFromApp={handleSubmitForLoginFromApp}/>} />  
          <Route path='/main/mypage' render={(props) => <Mypage {...props} 
                                  userInfo={userInfo}/>} />                                                
          <Route path='/main/search' render={(props) => <SearchBooks {...props} 
                                  handleSubmitFromAppSearchingKeyword={handleSubmitFromAppSearchingKeyword}
                                  keyword={keyword}/>} /> 
          <Route path='/main/mypage/book/:isbn' render={(props) => <BookInfo {...props} 
                                  handleSubmitFromApp={handleSubmitFromApp}/>} /> */}
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    <Footer />
  </div>
  );
}


export default withRouter(App);
