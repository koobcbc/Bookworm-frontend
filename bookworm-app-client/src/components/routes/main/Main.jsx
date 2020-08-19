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
import Added from './search/Added';

const Main = ({ userProfile, 
                userInfo, 
                handleSubmitFromAppSearchingKeyword, 
                handleSubmitForSetProfileFromApp, 
                keyword, 
                handleSubmitFromApp, 
                updateUserProfileFromApp,
                updatedProfile,
                authenInfo,
                handleUserInfoFromApp,
                handleSubmitForUpdatedProfileFromApp,
                submittedUpdatedProfile,
                handleClickPassIsbnToApp,
                selectedBookisbn
}) => {

    // const [updatedUser, setUpdatedUser] = useState({})
    
    const history = useHistory();
    let FormData = require('form-data');


    // ADDING NEW PROFILE
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
                .then(response => response.json())
                .then(result => {console.log(result)
                                updateUserProfileFromApp(result)})
                .catch(error => console.log('error', error));
                // history.push("/main/mypage");
            fetchUpdatedUserInfo(authenInfo.token.token, authenInfo.id.id)

        }
    }, [userProfile])

    console.log('Main - userProfile', userProfile)
    console.log('Main- authenInfo', authenInfo)
    console.log('Main - userInfo', userInfo)
    console.log('Main - submittedUpdatedProfile', submittedUpdatedProfile)
    console.log('Main - userProfile', updatedProfile)

    // UPDATING (PATCH) DATA

    let ProfileUpdateFormdata = new FormData();
    ProfileUpdateFormdata.append("profile[nickname]", submittedUpdatedProfile.nickname);
    ProfileUpdateFormdata.append("profile[description]", submittedUpdatedProfile.description);
    ProfileUpdateFormdata.append("profile[profilePicture]", submittedUpdatedProfile.profilePicture);
    ProfileUpdateFormdata.append("profile[readingGoal]", submittedUpdatedProfile.readingGoal);

    useEffect(()=>{
        if(submittedUpdatedProfile.nickname !== "" && userInfo.id!==undefined && userInfo.profile ){
            console.log('fetching profile data from Main')
            // POSTING PROFILE DATA TO THE USER
            var requestOptionsUpdate = {
                method: 'PUT',
                body: ProfileUpdateFormdata,
                redirect: 'follow'
              };
            
            let fetchForUpdateUrl = `${apiUrl}/users/${userInfo.id}/profiles/${userInfo.profile.id}`
            console.log('fetching (put) updating profile from', fetchForUpdateUrl)

            fetch(fetchForUpdateUrl, requestOptionsUpdate)
                .then(response => response.json())
                .then(result => {console.log(result)
                                updateUserProfileFromApp(result)
                                fetchUpdatedUserInfo(authenInfo.token.token, authenInfo.id.id)})
                .catch(error => console.log('error', error));
                // history.push("/main/mypage");
        }
    }, [submittedUpdatedProfile])

            // FETCHING USER DATA AGAIN TO UPDATE DATA
    const fetchUpdatedUserInfo = (token, id) => {        
            let myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            console.log('fetchUpdatedUserInfo', token, id)

            let requestOptionsChangeInfo = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch(`${apiUrl}/users/${id}`, requestOptionsChangeInfo)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                handleUserInfoFromApp(result)
            })
            .catch(error => console.log('error', error));
            history.push("/main/mypage");
    }


    return (
        <div className="Main">
          <div id="content-wrap">
            <Switch>
            <Route path='/main/mypage/book/:isbn' render={(props) => <BookInfo {...props} 
                                  handleSubmitFromApp={handleSubmitFromApp}
                                  handleClickPassIsbnToApp={handleClickPassIsbnToApp}
                                  selectedBookisbn={selectedBookisbn}
                                  userInfo={userInfo}
                                  authenInfo={authenInfo}
                                  fetchUpdatedUserInfo={fetchUpdatedUserInfo}
                                  />} />
            <Route path='/main/mypage/add-profile' render={(props) => <AddProfile {...props} 
                                  handleSubmitForSetProfileFromApp={handleSubmitForSetProfileFromApp}/>} />
            <Route path='/main/mypage/edit-profile' render={(props) => <EditProfile {...props} 
                                  handleSubmitForUpdatedProfileFromApp={handleSubmitForUpdatedProfileFromApp}/>} />  
            <Route path='/main/mypage/added' components={Added}/>
            <Route path='/main/mypage' render={(props) => <Mypage {...props} 
                                  userInfo={userInfo}
                                  selectedBookisbn={selectedBookisbn}
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

