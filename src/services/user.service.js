 import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://localhost:443/';
  

class UserService {


   getUserBoard() {
   // return axios.get(API_URL + 'users', { headers: authHeader() });
   
   return   axios.get(API_URL + 'users', { headers: authHeader() }).then(res=>{res.data; alert(res.data)}
    
    ).catch(err=>console.log(err))
  }




  getModeratorBoard() {
    return axios.get(API_URL + 'roles', { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + 'roles/7', { headers: authHeader() });
  }
}
export default new UserService();
