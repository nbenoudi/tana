import React, { Component } from "react";

import jwt_decode from "jwt-decode";

import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }
  render() {
    
    var currentUser=jwt_decode(this.state.currentUser);
    //const role = this.state.toString().split(".")[1];
			
    //let  decoded = jwt_decode({ currentUser },  { header: true });
    
    //const decoded = jwtDecode<JwtPayload>(this.state);
    //let expirationDate = decodedData.exp;
    return (
      <div className="profile">
         {/* <header className="jumbotron">
         <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>  
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>*/
        } 
        
        
        Hallo : {currentUser.sub} You are {currentUser.roles}


      </div>
    );
  }
}
