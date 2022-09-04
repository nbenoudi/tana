import axios from "axios";
const API_URL = "https://localhost:443/";

const request = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  method:"GET"
});


class AuthService {



  /*POST api/auth/signin for User Login*/
  login(username, password) {
    return request.post(API_URL + "login?username="+username+"&password="+password,  {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Methods':'GET,PUT,POST,PATCH,OPTIONS'
      } }
                      ).then(response => {
        if (response.data.access_token) {
          
          
          //localStorage.setItem("tokens", JSON.stringify(response.data));
          localStorage.setItem("access_token", JSON.stringify(response.data.access_token));
         
        }
        
      });
  }







  // RemoveCurrent User
  logout() {
    if(localStorage.getItem('access_token')!=null)localStorage.removeItem("access_token");
    //, 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
     axios.get(API_URL + "logout",   { headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,OPTIONS',
      'Content-Type': 'application/json;charset=UTF-8'}}).then(response => {
       
         JSON.stringify(response.data);}).bind(()=>this);

  }

/*POST https://localhost:8080/users for User Registration*/

  register( vorname,nachname,  email, password) {

  

    return  axios.post(API_URL + "registre",{
      nachname:nachname,
      vorname:vorname,
      email:email,
      password:password
  
    }, {
    
     headers: {
      'Access-Control-Allow-Origin' : 'https://localhost:443/registre',
      'Access-Control-Allow-Methods':'POST,OPTIONS,GET',
      'Content-Type': 'application/json;charset=UTF-8',
      
      },
      
     
    }) .then(response => {
      console.log(response.data);
    });;
  }
  
  // CurrentUser
  getCurrentUser() {
    if(localStorage.getItem('access_token')){ return JSON.parse(localStorage.getItem('access_token'));}
    
    else
    {
      
      return null;
      
    
    

    }
    
   
  }
}
export default new AuthService();
