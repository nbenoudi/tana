import axios from "axios";
import { useCookies } from 'react-cookie';
import authHeader from '../services/auth-header';
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

  login(username, password) {
    return new Promise((resolve, reject) => {
   //if(localStorage.getItem('access_token')!=null) verifier(token) else reject('invalid token');
  
       request
        .post(API_URL+'/login',JSON.stringify({ "username":username, "password":password }),{ params: {
          "username":username, "password":password
        }})
        .then(res=> localStorage.setItem("access_token", JSON.stringify(res.data.access_token)),resolve())
        
        .catch((err)=>reject(err))
        .finally(resolve(this)).bind(()=>this)
       
      
      })
  }


  // RemoveCurrent User
  logout() {
    if(localStorage.getItem('access_token')!=null) { localStorage.removeItem("access_token");
    

    
    axios.post("https://localhost:443/logout");}
  /*  return new Promise(resolve,reject=>{

alert("DDDDDDDDDDDDDDD");

  if(localStorage.getItem('access_token')!=null) { localStorage.removeItem("access_token");

//, 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
axios.post("https://localhost:443/logout",  JSON.stringify( 
  { headers: {
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,OPTIONS',
  'Content-Type': 'application/json;charset=UTF-8'}}
)
).then(response => {

resolve(JSON.stringify(response.data));}
)
.catch(err=>reject(err))
.bind(()=>this);





}

  else reject("TOKEN IS NULL");
    



    })
    */
  }

/*POST https://localhost:8080/users for User Registration*/

  register( vorname,nachname,  email, password) {

  

    return  axios.post(API_URL + "/users",{
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
        if(localStorage.getItem('access_token')){ return JSON.parse(localStorage.getItem('access_token'));}
        
        else
        {
          
          return null;
          
        
        

        }
    
   
  }
}
export default new AuthService();
