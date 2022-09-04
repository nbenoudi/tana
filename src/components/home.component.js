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
       console.log(response);
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
      <div className="title" /* style={{ 
        backgroundImage: `url("http://www.w3schools.com/css/trolltunga.jpg")` , backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%', 
       }} */>
      <h1 style={{color:"darkblue"}} >ⴰⵣⵓⵍ ⴼⵍⵍⴰⵡⵍ ⴳ ⵓ ⴰⵖⴱⴷⵉⵍ ⵏ ⵜⴰⵏⴰ Aghabdil n wamman n Tana </h1>

        <Weather></Weather>

      <hr />
        <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
       
        <img src="https://www.hespress.com/files/2017/09/tinghir1_680802121.jpg"  />;
        <img src="https://image.over-blog.com/8PW545ny411vVSc9zuplP6RTQFo=/fit-in/1020x765/filters:no_upscale()/idata%2F4864080%2FRaid-TANA%2F181-5.JPG"  />;


        <img src="https://image.over-blog.com/mKj15d2_Cn7hp8PoGDnZJIYq-Co=/fit-in/1020x765/filters:no_upscale()/idata%2F4864080%2FRaid-TANA%2F184.JPG"  />;
        
        <div className="error">{ this.state.error}</div>
      </div>
    );
  }
}
