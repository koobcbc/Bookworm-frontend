import React, { useEffect, useState } from 'react';
import { Route, Switch, withRouter, Link, useHistory } from 'react-router-dom'

import apiUrl from '../../ApiConfig'

import Home from '../home/Home'
import Registration from '../../authentication/Registration'
import LoginForm from '../../authentication/LoginForm'
import Footer from '../../shared/Footer'
import Mypage from '../../routes/main/mypage/Mypage';
import BookInfo from '../../routes/main/search/BookInfo'
import SearchBooks from '../../routes/main/search/SearchBooks';
import About from '../../routes/main/About'
import AddProfile from '../../routes/main/mypage/AddProfile';
import EditProfile from './mypage/EditProfile';

const Main = ({ userProfile, 
                userInfo, 
                handleSubmitFromAppSearchingKeyword, 
                handleSubmitForSetProfileFromApp, 
                keyword, 
                handleSubmitFromApp, 
                updateUserProfileFromApp,
                updatedProfile,
                authenInfo,
                handleUserInfoFromApp
}) => {

    const [updatedUser, setUpdatedUser] = useState({})
    
    const history = useHistory();
    let FormData = require('form-data');

    console.log('Main - userProfile', userProfile)

    let ProfileFormdata = new FormData();
    ProfileFormdata.append("profile[nickname]", userProfile.nickname);
    ProfileFormdata.append("profile[description]", userProfile.description);
    ProfileFormdata.append("profile[profilePicture]", userProfile.profilePicture);
    ProfileFormdata.append("profile[readingGoal]", userProfile.readingGoal);

    useEffect(()=>{
        if(userProfile.nickname !== "" && userInfo.id!==undefined){
            console.log('fetching profile data from Main')
            // POSTING PROFILE DATA TO THE USER
            let requestOptions = {
                method: 'POST',
                body: ProfileFormdata,
                redirect: 'follow'
            };
            
            fetch(`${apiUrl}/users/${userInfo.id}/profiles`, requestOptions)
                .then(response => response.text())
                .then(result => {console.log(result)
                                updateUserProfileFromApp(result)})
                .catch(error => console.log('error', error));
                // history.push("/main/mypage");

            // FETCHING USER DATA AGAIN TO UPDATE DATA
            let myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${authenInfo.token}`);

            let requestOptionsChangeInfo = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch(`${apiUrl}/users/${userInfo.id}`, requestOptionsChangeInfo)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                handleUserInfoFromApp(result)
            })
            .catch(error => console.log('error', error));
            history.push("/main/mypage");
            
        }
    }, [userProfile])

    return (
        <div className="Main">
          <div id="content-wrap">
            <Switch>
            <Route path='/main/mypage/book/:isbn' render={(props) => <BookInfo {...props} 
                                  handleSubmitFromApp={handleSubmitFromApp}/>} />
            <Route path='/main/mypage/add-profile' render={(props) => <AddProfile {...props} 
                                  handleSubmitForSetProfileFromApp={handleSubmitForSetProfileFromApp}/>} />
            <Route path='/main/mypage/edit-profile' render={(props) => <EditProfile {...props} 
                                  handleSubmitForSetProfileFromApp={handleSubmitForSetProfileFromApp}/>} />  
            <Route path='/main/mypage' render={(props) => <Mypage {...props} 
                                  userInfo={userInfo}
                                  />} />                                          
            <Route path='/main/search' render={(props) => <SearchBooks {...props} 
                                  handleSubmitFromAppSearchingKeyword={handleSubmitFromAppSearchingKeyword}
                                  keyword={keyword}/>} /> 
            </Switch>
          </div>
        <Footer />
      </div>
      );
}

export default Main

