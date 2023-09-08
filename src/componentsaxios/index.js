import axios from "axios";
import { useNavigate } from "react-router-dom";
let navigate = useNavigate();
const API_URL = "https://localhost:443";
export function loginUsernas({name,password}) {


   return function(dispatch) {
    
    // submit name and pass to the server 
    axios
    .post('${API_URL}/login',{name,password})
    .then(response=>{
      
        navigate("/cours");
        

    })
    .catch(()=>{})
    .finally(()=>{});

} 
}

