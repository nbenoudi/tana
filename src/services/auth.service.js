import axios from "axios";
import { useCookies } from 'react-cookie';
import authHeader from '../services/auth-header';
import { re } from "mathjs";
const API_URL = "https://localhost:443";

const request = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Headers":"origin, x-requested-with, content-type",
    'Access-Control-Allow-Credentials': 'true',
}
 // method:"POST"
  
});
// Function to extract cookies from response headers
 class AuthService {
  // Make an initial GET request to get the csrftoken cookie
 
  /*POST api/auth/signin for User Login*/

   login= async (username, password) =>{
    return await new Promise((resolve, reject) => {
    
   //if(localStorage.getItem('access_token')!=null) verifier(token) else reject('invalid token');
   
       request
        .post(API_URL+'/login',JSON.stringify({ "username":username, "password":password }),{ params: {
          "username":username, "password":password
        }}).then(res=>{ localStorage.setItem("access_token", JSON.stringify(res.data.access_token)), resolve(0)})
        
        .catch(err=>(alert(err),reject(new Error("OHO : our ghourch lha9 ad takjemd."))))
       // .finally(resolve(this)).bind(()=>this)
        
      })
  }

  // RemoveCurrent User
  async logout() {
    if(localStorage.getItem('access_token')!=null) { localStorage.removeItem("access_token");
    await axios.post("https://localhost:443/logout");
  }
  }

/*POST https://localhost:8080/users for User Registration*/

  register= async ( vorname,nachname,  email, password)=> {
     return await axios.post(API_URL + "/users",{
      nachname:nachname,
      vorname:vorname,
      email:email,
      password:password
  
    },  { headers: authHeader() }) .then(response => {
      console.log(response.data);
    });;
  }
  
  // CurrentUser
   getCurrentUser(){

        if(localStorage.getItem('access_token')&&localStorage.getItem('access_token') !== 'undefined'){ return JSON.parse(localStorage.getItem('access_token'));}
        
        else
        {
          return null;
          
        
        

        }
    
   
  }
}
export default  new AuthService();
