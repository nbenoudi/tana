import React, { Component } from "react";
import axios from 'axios';
import authHeader from '../services/auth-header';
import "../mystyles/users.css";
const API_URL = 'https://localhost:443/';
//import UserService from "../services/user.service";


export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }
  componentDidMount() {

    axios.get(API_URL + 'users', { headers: authHeader() }).then(res=>{ 
      
      this.setState({
      content: res.data
    });}
    
    ).catch(err=>console.log(err))
/*
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );*/
  }
  render() {
    return (
      <div className="users">
       
         
         
         
            <table >
                <tr>
                    <th> UsernasId </th>
                    <th> Nachname </th>
                    <th> Email </th>
                    <th> Roles </th>
                </tr>
                {this.state.content.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.usernasId}</td>
                            <td>{val.nachname}</td>
                            <td>{val.email}</td>

                           
                           <td>
                         
                           <table align="left" >
                                   

                            {
                            
                            val.rolenass.map((val, key) => {
                              return(<tr key={key}>
                                 <td>{val.name}</td>
                              </tr>)
                             



                            })} 
                            
                            </table>
                            
                            </td>
                             </tr>
                       
                    )
                })}
            </table>
        

       
      </div>
    );
  }
}
