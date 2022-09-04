import React, { Component } from "react";
//import AuthService from "../services/auth.service";
//import UserService from "../services/user.service";
import axios from 'axios';
import authHeader from '../services/auth-header';


export default class Cours extends Component {
  
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
    const response = await this.getcours();
  
    this.setState({ content: "", isLoading: false });
  // Get Cours from Backend
  }


    // Get Cours from Backend
    
     getcours() {
     
    
     
      axios.get("https://localhost:443/cours",{headers: authHeader() }).then( function (res) {
                  
                  
                    if (res.data) {
                    
                     this.setState({
                        content: res.data
                      });
                      
                    } else {
                     
                     this.setState({
                        content: "ⵡⴰ ⵍⵓ ⵕIⵚⵓ Error Network."
                      });
                      
                    }            
                  
                  
        }.bind(this)).catch(function (error) {
          console.log("Error while Getting Cours "+error);
         
          this.setState({
            error:"ⵓⵁⵓ ⴰⵡⴰ Oho please login."
          });
        }.bind(this)); 
    };

 
 
  

 
  
  render() {

    const {content, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
    
      <div className="container">
        
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} 
          
        
          /> 

          <div style={{color:"red"}} ><h3>{this.state.error} </h3></div> 
      </div>
      

     
    );
  }

 
}
