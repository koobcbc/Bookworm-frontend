import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'


import Home from './components/routes/Home/Home'
import Registration from './components/authentication/Registration'
import LoginForm from './components/authentication/LoginForm'



function App() {


  // const [loggedIn, setLoggedIn] = useState("NOT_LOGGED_IN");
  // const [user, setUser] = useState({});
  // const [email, setEmail] = useState("");

  // // Handling auto-login (using token stored in localStorage)
  // useEffect(()=>{
  //   const token = localStorage.getItem("token")
  //   if(token){
  //       fetch(`http://localhost:3000/auto_login`, {
  //           headers: {
  //               Authorization: `Bearer ${token}`
  //           }
  //       })
  //       .then(res => res.json())
  //       .then(json => {
  //           setUser(json)
  //           // console.log(`auto-login:`, json)
  //       })
  //   }
  // })

  // // handling Authclick
  // const handleAuthClick = () => {
  //   const token = localStorage.getItem("token")
  //   fetch(`http://localhost:3000/users`, {
  //     method: "GET",
  //     headers: {
  //       "Authorization": `Bearer ${token}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  // }


  // const handleLogin = (data) => {
  //   setLoggedIn("LOGGED_IN");
  //   setUser(data.user);
  // };

  // useEffect(() => {
  //   const checkLoginStatus = () => {
  //     axios
  //       .get(`${APIConfig}/logged_in`, { withCredentials: true })
  //       .then((response) => {
  //         //console.log("logged in?", response);
  //         if (response.data.logged_in && loggedIn === "NOT_LOGGED_IN") {
  //           setLoggedIn("LOGGED_IN");
  //           setUser(response.data.user);
  //           setEmail(response.data.user.email);
  //         } else if (!response.data.logged_in && loggedIn === "LOGGED_IN") {
  //           setLoggedIn("NOT_LOGGED_IN");
  //           setUser({});
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("log in error", error);
  //       });
  //   };
  //   checkLoginStatus();
  // }, []);

  // const handleLogout = () => {
  //   setLoggedIn("NOT_LOGGED_IN");
  //   setUser({});
  // };
  // //console.log(email);

  // const handleLogoutClick = () => {
  //   axios
  //     .delete(`${APIConfig}/logout`, { withCredentials: true })
  //     .then((response) => {
  //       //console.log("logout", response);
  //       handleLogout();
  //       window.location.reload();
  //       //props.history.push("/");
  //     })
  //     .catch((error) => {
  //       console.log("Logout error", error);
  //     });
  // };

  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/signup'component={Registration}/>
    </Switch>
  </div>
  );
}

export default withRouter(App);
