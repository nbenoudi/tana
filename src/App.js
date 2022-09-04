import React, { Component } from "react";
import { Routes , Route, Link  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Cours from "./components/cours.component";
import jwt_decode from "jwt-decode";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }
  // 
  componentDidMount() {


    // Bis Später 
    
   //const user = jwt_decode(AuthService.getCurrentUser()).sub;
    const user = AuthService.getCurrentUser();
    if (user!=null) {
      this.setState({
        currentUser: jwt_decode(AuthService.getCurrentUser()).sub,
     showModeratorBoard: jwt_decode(AuthService.getCurrentUser()).roles.includes("check"),
     showAdminBoard: jwt_decode(AuthService.getCurrentUser()).sub.includes("3amel"),
      });
    }
  }
  logOut() {
    AuthService.logout();
  }
  render() {

    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          
          ⴰⵣⵣⵓⵍ ⴼⴰⵍⵍⴰⵡⵏ(Home)
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
              ⴽⵊⴰⵎ(Login)
              </Link>
            </li>
           
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/3aml"} className="nav-link">
                  3amel
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/CHekh"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
            
            {/* currentUser && (
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                ⵙⴰⵊⴰⵍ
                </Link>
              </li>
              
            ) */}
          </div>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser}
                </Link>
              </li>
              <li className="nav-item">
              <Link to={"/cours"} className="nav-link">
              Cours
              </Link>
               </li>
              <li className="nav-item">
                <a href="/logout" className="nav-link" onClick={this.logOut}>
                ⴼⴼⴰⵖ
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
             {/* <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                ⴽⵊⴰⵎ
                </Link>
              </li>
              */}
              
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                ⵙⴰⵊⴰⵍ/registre/تسجيل
                </Link>
              </li>
            </div>
          )}
        </nav>
        <div className="container mt-3">
          <Routes >
           
            <Route exact path={"/"} element={<Home/>} /> 
            <Route exact path="/login" element={<Login /> }/>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/cours" element={<Cours />} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route path="/user" element={<BoardUser/>} />
            <Route path="/mod" element={<BoardModerator/>} />
           <Route path="/admin" element={<BoardAdmin/>} />
           <Route path="/logout" element={<Home/>} />
          </Routes >
        </div>
      </div>
    );
  }
}
export default App;


/*
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div className="App">
      <h1>React Cors Guide</h1>
    </div>
  );
}
export default App;
*/