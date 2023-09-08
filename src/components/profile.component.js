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
         <h3>ⴰⵣⵓⵍ  ⴼⴻⵍⵍⴰⴽ  : ⵎⴰⵢⴷ ⵉ ⵄⵏⴰ</h3>  {currentUser.sub}  <h3>ⵖⵓⵔⵛ ⴺⵓⵔ ⵍ </h3>{currentUser.roles}

      </div>
    );
  }
}
