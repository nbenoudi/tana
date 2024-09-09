import React, { Component } from "react";
//import UserService from "../services/user.service";
import axios from 'axios';
//import authHeader from '../services/auth-header';
import Weather from "./weather.component";
import  "./home.component.css";



export default class Home extends Component {
  
 // State
 constructor(props) {
  super(props);
this.state = {
  isLoading: true,
  content: "",
  error: ""
};
}

  async  componentDidMount() {
    //  getcours();
    const response = await this.getPublicContent();
    this.setState({ content: "", isLoading: false });
  // Get Cours from Backend


  }



// Get Home
getPublicContent() {
      axios.get("https://localhost:443/", {
     headers: {
       'Access-Control-Allow-Origin' : '*',
       'Content-Type': 'text/plain;charset=UTF-8',
     } }).then(function (response) {
       //handle success
       
       this.setState({
        content: response.data
      });


   }.bind(this))
   
   .catch(function (error) {
       //handle error
       //console.log(error.response);
       this.setState({
        error:
          (error.response && error.response.data) ||
          error.message ||
          error.toString()
      });

   }.bind(this));
 }
  render() {
    return (
      <div className="ui center ">


      <h1 className="ui title header" > ⴰⵣⵓⵍ ⴼⵍⵍⴰⵡⵍ ⵉⵎⴷⴷⵓⴽⴰⵍ  مرحبا بكم اعزائي الكرام   </h1>

        <Weather ></Weather>

    
        <div dangerouslySetInnerHTML={{ __html: this.state.content  }}   />
       
        <img src="https://www.hespress.com/files/2017/09/tinghir1_680802121.jpg" style={{width:"33%",height:"33%"}} alt="tana"  />
        <img src="https://image.over-blog.com/8PW545ny411vVSc9zuplP6RTQFo=/fit-in/1020x765/filters:no_upscale()/idata%2F4864080%2FRaid-TANA%2F181-5.JPG"  style={{width:"33%",height:"33%"}} alt="tana2" />
        <img src="https://image.over-blog.com/mKj15d2_Cn7hp8PoGDnZJIYq-Co=/fit-in/1020x765/filters:no_upscale()/idata%2F4864080%2FRaid-TANA%2F184.JPG" width="29%" height="29%"  alt="tana3" />
        
        <div className="error">{ this.state.error}</div>
      </div>
    );
  }
}
